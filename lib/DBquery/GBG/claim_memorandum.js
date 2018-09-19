/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var claim_memorandum = sequelize.define("claim_memorandum", { id:
    { type: 'bigint',
        primaryKey: true,
        defaultValue: null,
        comment: '主键id' },
        type:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '类型：常用就诊人' },
        openid:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        insurers_name:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '被保人姓名' },
        user_number:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '会员编号' },
        user_name:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '姓名' },
        phone:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '电话号码' },
        tel:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '固定电话' },
        email:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '电子邮件' },
        card_type:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '证件类型：身份证、护照' },
        card_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '护照/身份证号' },
        birthday:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '出生日期' },
        sex:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '性别' },
        address:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        create_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '创建时间' } }, {
        'tableName': 'claim_memorandum',
        // 'freezeTableName': true,
        // 是否需要增加createdAt、updatedAt、deletedAt字段
        'timestamps': false,
        //// 不需要createdAt字段
        'createdAt': 'create_time',
        //// 将updatedAt字段改个名
       // 'updatedAt': '',
        //// 将deletedAt字段改名
        //// 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
        //'deletedAt': false
    });
    return claim_memorandum;
};