/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var cou_physical_report = sequelize.define("cou_physical_report", { id:
    { type: 'varchar',
        primaryKey: true,
        defaultValue: null,
        comment: '主键ID' },
        user_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '用户id' },
        appointment_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '卡预约id' },
        card_number:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '激活码' },
        give_physical:
        { type: 'tinyint',
            primaryKey: true,
            defaultValue: null,
            comment: '是否体检' },
        examination_name:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '体检人' },
        sex:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '性别' },
        id_card_no:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '身份证号码' },
        mobile:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '手机' },
        inspection_doctor:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '送检医生' },
        inspection_department:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '送检科室' },
        portfolio_project:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '组合项目' },
        project_name:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '项目名称' },
        project_short_name:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '项目简称' },
        tips:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '提示' },
        result:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '结果' },
        proposed_explanation:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '建议解释' },
        reference_value:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '参考值' },
        unit:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '单位' },
        clinical_significance:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '临床意义' },
        sampling_significance:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '标本意义' },
        check_status:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '检查状态' },
        hemolysis:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '溶血' },
        lipohemia:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '脂血' },
        jaundice:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '黄疸' },
        other:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '其他' },
        yin_yang:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '阴阳性' },
        give_insurance:
        { type: 'tinyint',
            primaryKey: true,
            defaultValue: null,
            comment: '赠送保险' },
        policy_number:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '保单号' },
        policy_name:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '保险名称' },
        insurance_policy_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '保险产品id' },
        effective_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '保单生效时间' },
        failure_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '保单失效时间' },
        mdt_server:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: 'MDT服务' },
        remark:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '备注' },
        created_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: '1970-01-01 00:00:00.000',
            comment: '创建时间' },
        created_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '创建id' },
        update_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: '1970-01-01 00:00:00.000',
            comment: '更新时间' },
        update_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '更新id' },
        valid:
        { type: 'tinyint',
            primaryKey: true,
            defaultValue: '1',
            comment: '是否有效（1有效；0无效）' },
        status:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' } }, {
        'tableName': 'cou_physical_report',
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
    return cou_physical_report;
};