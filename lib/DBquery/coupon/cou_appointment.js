/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var cou_appointment = sequelize.define("cou_appointment", { id:
    { type: 'varchar',
        primaryKey: true,
        defaultValue: null,
        comment: '主键id' },
        appointment_type:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '预约类型：卡预约、过期赠险' },
        user_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '用户id' },
        user_coupon_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '用户卡券id' },
        card_number:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '卡号' },
        name:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '姓名' },
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
            comment: '手机号码' },
        package_name:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '套餐名称' },
        city:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '城市' },
        hospital:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '医院' },
        department:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '科室' },
        appointment_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '预约时间' },
        benefit:
        { type: 'text',
            primaryKey: true,
            defaultValue: null,
            comment: '保障利益' },
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
            comment: '是否有效（1有效；0无效）' } }, {
        'tableName': 'cou_appointment',
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
    return cou_appointment;
};