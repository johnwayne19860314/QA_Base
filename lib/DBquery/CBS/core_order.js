/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var core_order = sequelize.define("core_order", { id:
    { type: 'varchar',
        primaryKey: true,
        defaultValue: null,
        comment: '' },
        appid:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: '',
            comment: 'appid：指向平台标识' },
        product_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: '',
            comment: '产品id' },
        request_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: '',
            comment: '请求唯一ID' },
        request:
        { type: 'json',
            primaryKey: true,
            defaultValue: null,
            comment: '请求数据' },
        attach:
        { type: 'text',
            primaryKey: true,
            defaultValue: null,
            comment: '出单时需要的数据' },
        proof:
        { type: 'text',
            primaryKey: true,
            defaultValue: null,
            comment: '出单时需要的数据' },
        confirm_info:
        { type: 'text',
            primaryKey: true,
            defaultValue: null,
            comment: '订单确认接口请求信息' },
        status:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: '',
            comment: '订单状态:toverify待核保,verify已核保,verify_fail核保失败,topay待支付,payed已支付,toorder待出单,success已出单,fail出单失败,cancel取消  20170707' },
        order_amount:
        { type: 'int',
            primaryKey: true,
            defaultValue: '0',
            comment: '订单金额（单位/分）' },
        worth:
        { type: 'int',
            primaryKey: true,
            defaultValue: '0',
            comment: '实付金额（单位/分） 作废，后续在支付系统中体现。现在与order_amount一致' },
        cutoff:
        { type: 'int',
            primaryKey: true,
            defaultValue: '0',
            comment: '优惠金额（单位/分） 作废，后续在支付系统中体现' },
        pay_no:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '支付回单号' },
        pay_method:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '支付方式：weixin' },
        method_type:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '20170705,线上对接产品(A),无需人工核保产品(B),人工核保产品(C)' },
        order_type:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '订单类型 20170706' },
        pay_status:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '结算状态 20170912 未结算 已结算' },
        policy_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '出保时间' },
        deal_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '处理时间' },
        pay_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '支付时间' },
        expiry_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '过期时间' },
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
        'tableName': 'core_order',
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
    return core_order;
};