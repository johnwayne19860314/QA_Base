/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var pay_payment = sequelize.define("pay_payment", { id:
    { type: 'varchar',
        primaryKey: true,
        defaultValue: null,
        comment: '主键ID' },
        appid:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '业务渠道' },
        order_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '订单id' },
        order_name:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '订单名称' },
        payment_no:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '支付单号' },
        payment_element:
        { type: 'text',
            primaryKey: true,
            defaultValue: null,
            comment: '支付请求配置' },
        order_amount:
        { type: 'bigint',
            primaryKey: true,
            defaultValue: null,
            comment: '订单应付金额' },
        user_amount:
        { type: 'bigint',
            primaryKey: true,
            defaultValue: null,
            comment: '用户支付金额' },
        subsidy_amount:
        { type: 'bigint',
            primaryKey: true,
            defaultValue: null,
            comment: '补贴金额' },
        statement:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '支付说明' },
        payment_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '支付成功时间' },
        payment_type:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '支付类型' },
        payment_method:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '支付方法：网页支付、扫码支付' },
        payment_scene:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '支付场景：移动支付' },
        payment_status:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '支付状态:未支付、支付待确认、支付已确认、支付失败' },
        content_attach:
        { type: 'text',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        notify_url:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '业务端异步回调地址' },
        return_url:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '业务端同步回调地址' },
        callback_acount:
        { type: 'int',
            primaryKey: true,
            defaultValue: null,
            comment: '业务端回调次数' },
        callback_status:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '业务端回调状态' },
        callback_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '业务端回调时间' },
        callback_confirm_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '业务端确认时间' },
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
        payee:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '收款方' },
        payment_period:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '付款期限' } }, {
        'tableName': 'pay_payment',
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
    return pay_payment;
};