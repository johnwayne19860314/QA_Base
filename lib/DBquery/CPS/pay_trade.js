/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var pay_trade = sequelize.define("pay_trade", { id:
    { type: 'varchar',
        primaryKey: true,
        defaultValue: null,
        comment: '主键ID' },
        payee:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '收款方，标识收款方式谁' },
        payment_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '支付账单id：对照商户交易号' },
        payment_no:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '支付单号：支付机构回调的单号' },
        payment_method:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '支付方式' },
        payment_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '支付时间（支付渠道内的时间）' },
        attach:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '附加信息' },
        bank_type:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '银行类型' },
        fee_type:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '费用类型' },
        trade_type:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        total_fee:
        { type: 'bigint',
            primaryKey: true,
            defaultValue: null,
            comment: '支付金额（单位：分）' },
        request:
        { type: 'longtext',
            primaryKey: true,
            defaultValue: null,
            comment: '支付请求结构' },
        response:
        { type: 'longtext',
            primaryKey: true,
            defaultValue: null,
            comment: '返回结构' },
        payment_result:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        completion_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '交易完成时间' },
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
        payment_type:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '支付类型' } }, {
        'tableName': 'pay_trade',
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
    return pay_trade;
};