/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var core_pingan_tradeinfo = sequelize.define("core_pingan_tradeinfo", { id:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '支付流水号' },
       out_id:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: '',
          comment: '外部支付请求号' },
       order_id:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: '',
          comment: '订单号，由调用者提供' },
       appid:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: '',
          comment: '调用者id' },
       status:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: '',
          comment: '状态 topay未支付 pending 已支付挂起 payed已支付 offline_pay:线下支付' },
       amount_payable:
        { type: 'int',
          primaryKey: true,
          defaultValue: '0',
          comment: '应付金额，分为单位' },
       amount:
        { type: 'int',
          primaryKey: true,
          defaultValue: '0',
          comment: '交易金额，分为单位' },
       request:
        { type: 'text',
          primaryKey: true,
          defaultValue: null,
          comment: '支付请求表单' },
       pay_info:
        { type: 'text',
          primaryKey: true,
          defaultValue: null,
          comment: '发起支付信息' },
       content:
        { type: 'text',
          primaryKey: true,
          defaultValue: null,
          comment: '支付回传信息' },
       pay_time:
        { type: 'datetime',
          primaryKey: true,
          defaultValue: '1970-01-01 00:00:00.000',
          comment: '支付时间' },
       created_time:
        { type: 'datetime',
          primaryKey: true,
          defaultValue: '1970-01-01 00:00:00.000',
          comment: '创建时间' },
       update_time:
        { type: 'datetime',
          primaryKey: true,
          defaultValue: '1970-01-01 00:00:00.000',
          comment: '更新时间' },
       valid:
        { type: 'tinyint',
          primaryKey: true,
          defaultValue: '1',
          comment: '是否有效（1有效；0无效）' } }, {
        'tableName': 'core_pingan_tradeinfo',
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
    return core_pingan_tradeinfo;
};