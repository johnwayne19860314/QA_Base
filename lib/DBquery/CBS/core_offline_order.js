/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var core_offline_order = sequelize.define("core_offline_order", { id:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '主键ID' },
       core_order_id:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '核心订单id' },
       request_id:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '业务系统请求id' },
       user_id:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '用户id' },
       appid:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: 'appid' },
       order_name:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '订单名称' },
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
       marital_status:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '婚姻状况' },
       nationality:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '国籍' },
       covered_area:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '保障区域' },
       id_type:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '证件类型' },
       id_number:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '证件号码' },
       birthday:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '生日' },
       mobile:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '手机' },
       email:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '邮箱' },
       project:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '项目' },
       mailing_address:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '邮寄地址' },
       residential_address:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '居住地址' },
       method_type:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '订单方式类型：干净件、非干净件' },
       order_payment_type:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '订单支付方式：线上支付、线下支付' },
       status:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '状态' },
       product_id:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '保险产品id' },
       product_name:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '保险公司' },
       total_premiums:
        { type: 'int',
          primaryKey: true,
          defaultValue: null,
          comment: '总保费' },
       discount:
        { type: 'float',
          primaryKey: true,
          defaultValue: null,
          comment: '折扣' },
       premiums_receivable:
        { type: 'int',
          primaryKey: true,
          defaultValue: null,
          comment: '实际支付保费' },
       period_day:
        { type: 'datetime',
          primaryKey: true,
          defaultValue: null,
          comment: '价格过期日' },
       request:
        { type: 'text',
          primaryKey: true,
          defaultValue: null,
          comment: '请求数据' },
       note:
        { type: 'text',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
       payment_time:
        { type: 'datetime',
          primaryKey: true,
          defaultValue: null,
          comment: '支付时间' },
       payment_id:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '支付交易号' },
       payment_info:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '支付信息' },
       payment_result:
        { type: 'text',
          primaryKey: true,
          defaultValue: null,
          comment: '支付结果记录' },
       additional:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '附加信息' },
       special:
        { type: 'tinyint',
          primaryKey: true,
          defaultValue: '0',
          comment: '审核特批' },
       policy_no:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '保单号' },
       policy_result:
        { type: 'text',
          primaryKey: true,
          defaultValue: null,
          comment: '保单回录信息' },
       reckon_call_count:
        { type: 'int',
          primaryKey: true,
          defaultValue: '0',
          comment: '核保沟通次数' },
       reckon_call_time:
        { type: 'datetime',
          primaryKey: true,
          defaultValue: null,
          comment: '最近核保沟通日期' },
       baba_call_count:
        { type: 'int',
          primaryKey: true,
          defaultValue: '0',
          comment: '客户沟通次数' },
       baba_call_time:
        { type: 'datetime',
          primaryKey: true,
          defaultValue: null,
          comment: '最近客户沟通日期' },
       policy_effect:
        { type: 'datetime',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
       policy_expire:
        { type: 'datetime',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
       verify_time:
        { type: 'datetime',
          primaryKey: true,
          defaultValue: null,
          comment: '核保时间' },
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
          comment: '是否有效（1有效；0无效）' }  }, {
        'tableName': 'core_offline_order',
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
    return core_offline_order;
};