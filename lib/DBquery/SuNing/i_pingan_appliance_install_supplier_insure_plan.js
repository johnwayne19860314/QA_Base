/**
 *  苏宁 电器安装-供应商方案表（平安）
 */
module.exports = function(sequelize, DataTypes) {
    var i_pingan_appliance_install_supplier_insure_plan = sequelize.define("i_pingan_appliance_install_supplier_insure_plan", {
        id:{type:DataTypes.STRING, primaryKey: true,defaultValue: DataTypes.UUIDV1,comment: "主键" },
        supplier_id:{type: DataTypes.STRING,defaultValue: "",comment: "供应ID" },
        service_type:{type: DataTypes.STRING,defaultValue: "A",comment: "作业人员责任保险方案 作业人员责任保险方案 A:70万元/人  B:80万元/人 C:100万元/人" },
        fix_type:{type: DataTypes.STRING,defaultValue: "1",comment: "安装维修责任保险  Y:参保  N:不参保" },
        created_time:{type: DataTypes.DATE,comment: "创建时间" },
        created_id:{type: DataTypes.STRING,defaultValue: "",comment: "创建人" },
        update_time:{type: DataTypes.DATE,comment: "更新时间" },
        update_id:{type: DataTypes.STRING,defaultValue: "",comment: "更新人" },
        valid:{type: DataTypes.INTEGER,defaultValue: 1,comment: "是否有效（1有效；0无效）" }
    }, {
        'tableName': 'i_pingan_appliance_install_supplier_insure_plan',
        // 'freezeTableName': true,
        // 是否需要增加createdAt、updatedAt、deletedAt字段
        'timestamps': true,
        // 不需要createdAt字段
        'createdAt': 'created_time',
        // 将updatedAt字段改个名
        'updatedAt': 'update_time',
        // 将deletedAt字段改名
        // 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
        'deletedAt': false
    });
    return i_pingan_appliance_install_supplier_insure_plan;
};