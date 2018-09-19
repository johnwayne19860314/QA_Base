const moment = require("moment");
const {logger} = require("../../../publicMethodsLib/commonTools/logger");

module.exports = exports = function (sequelize, DataTypes) {
    // 阳光雇主责任险被保员工
    const SIGInsuredEmployee = sequelize.define("SIGInsuredEmployee", {
        policy_no: {type: DataTypes.STRING(), allowNull: false}, // 原始保单号
        name: {type: DataTypes.STRING(60), allowNull: false}, // 员工姓名
        card_id: {type: DataTypes.STRING(60), allowNull: false}, // 员工身份证
        package: {type: DataTypes.STRING(60), allowNull: false}, // 套餐
        type: {type: DataTypes.STRING(60), allowNull: false}, // 是否为空调类
        price: {type: DataTypes.INTEGER, allowNull: false}, // 保费，单位为分
        effect: {type: DataTypes.DATE, allowNull: false}, // 生效时间
        expire: {type: DataTypes.DATE, allowNull: false}, // 到期时间，默认为生效时间+1年
        created_time: {type: DataTypes.DATE, defaultValue: sequelize.NOW}
    }, {timestamps: false, tableName: "sinosig_insured_employee"});

    function isIntervalDate (date, start, end) {
        let d = new Date(date);
        return d > start && d < end;
    }

    // 检查重复应该考量到一个长周期的问题，比如A投保的时间是18~19年，到19后应该能够继续投，这个重复是允许的
    SIGInsuredEmployee.checkDuplicate = function (policy_no, employee_list) {
        let employee_dict = {};
        employee_list.forEach(x => {
            employee_dict[x.card_id] = x;
        });
        let employee_cardid_list = employee_list.map(x => x.card_id);
        return SIGInsuredEmployee.findAll({where: {
            policy_no: policy_no,
            card_id: {[sequelize.Op.in]: employee_cardid_list}
        }}).then(insured_employee_list => {
            let duplicated_list = [];
            if (insured_employee_list.length > 0) {
                for (let insured_employee of insured_employee_list) {
                    let employee = employee_dict[insured_employee.card_id];
                    let duplicated = (
                        isIntervalDate(employee.effect, insured_employee.effect, insured_employee.expire) ||
                        isIntervalDate(employee.expire, insured_employee.effect, insured_employee.expire)
                    );
                    if (duplicated) { // 身份证相同，然后二者的生效周期内有重叠
                        duplicated_list.push(employee.card_id);
                    }
                }
                return Promise.resolve(duplicated_list);
            } else {
                return Promise.resolve(duplicated_list);
            }
        });
    };

    SIGInsuredEmployee.getEmployee = function (policy_no) {
        return this.findAll({where: {policy_no}});
    };

    SIGInsuredEmployee.renewalEmployee = function (policy_no, effect, expire, update_list, add_list) {
        var self = this;
        return Promise.all([
            self.updateEmployee(policy_no, effect, update_list),
            self.insertEmployee(policy_no, effect, expire, add_list)
        ]).then(result => {
            let update_result = result[0];
            let insert_result = result[1];
            logger.info("renewal employee for policy %s successed: updated: %s, insert %s",
                policy_no, update_result.length, insert_result.length);
            return Promise.resolve(true);
        });
    };

    SIGInsuredEmployee.updateEmployee = function (policy_no, effect, employee_list) {
        var self = this;
        let update_promise_list = [];
        for (let update_employee of employee_list) {
            update_promise_list.push(
                self.update({
                    card_id: update_employee.card_id,
                    name: update_employee.name,
                    effect: effect
                }, {where: {
                    policy_no: policy_no,
                    card_id: update_employee.origin_cardid
                }}).then(() => {
                    return Promise.resolve({isok: true, card_id: update_employee.origin_cardid});
                }).catch(e => { // promise.all一定要保证自己处理异常
                    return Promise.resolve({isok: false, reason: e.message, card_id: update_employee.origin_cardid});
                })
            );
        }
        return Promise.all(update_promise_list);
    };

    SIGInsuredEmployee.insertEmployee = function (policy_no, effect, expire, employee_list) {
        let insert_list = [];
        let created_time = moment();
        if (!expire) {
            expire = moment(effect).add(1, "years");
        }
        for (let employee of employee_list) {
            insert_list.push({
                policy_no,
                effect,
                expire,
                created_time,
                name: employee.name,
                card_id: employee.card_id,
                package: employee.package,
                price: employee.price,
                type: employee.type
            });
        }
        return this.bulkCreate(insert_list);
    };

    return SIGInsuredEmployee;
};
