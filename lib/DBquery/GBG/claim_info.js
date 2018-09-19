/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var claim_info = sequelize.define("claim_info", { id:
    { type: 'varchar',
        primaryKey: true,
        defaultValue: null,
        comment: '' },
        insurers_type:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '投保类型：个人、团体' },
        openid:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '微信openid' },
        policy_number:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '保单号码' },
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
            comment: '就诊人姓名' },
        sex:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '性别' },
        birthday:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '出生日期' },
        phone:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '电话号码' },
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
        email:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '电子邮件' },
        tel:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '固定电话' },
        address:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '地址' },
        disease_info:
        { type: 'json',
            primaryKey: true,
            defaultValue: null,
            comment: '就诊信息（JSON数据格式）' },
        signer:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        account_number:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '账号' },
        account_type:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '账户类型：大陆、境外含港澳台' },
        account_name:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '开户人姓名' },
        bank_branch:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '开户行支行名称' },
        bank_address:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '银行开户行地址(1)' },
        status:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '状态：未处理、处理中、已处理' },
        create_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '创建时间' } }, {
        'tableName': 'claim_info',
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
    return claim_info;
};