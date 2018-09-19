"use strict";

module.exports = function(sequelize, DataTypes) {
  var cloud_order_info = sequelize.define("cloud_order_info", {
      id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '主键ID' },
      app_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '渠道ID' },
      product_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '产品ID' },
      user_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '用户ID' },
      type:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '订单类型：批增、批减、投保、批改' },
      order_mode:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '订单模式：云保模式、推广模式' },
      price:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '价格' },
      payment_price:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '实际支付价格' },
      order_name:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '订单名称' },
      buyer:
      { type: 'json',
          primaryKey: true,
          defaultValue: null,
          comment: '购买人信息' },
      expiry_date:
      { type: 'datetime',
          primaryKey: true,
          defaultValue: null,
          comment: '支付过期时间' },
      payment_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '支付id' },
      payment_content:
      { type: 'json',
          primaryKey: true,
          defaultValue: null,
          comment: '支付信息' },
      payment_time:
      { type: 'datetime',
          primaryKey: true,
          defaultValue: null,
          comment: '支付时间' },
      request:
      { type: 'json',
          primaryKey: true,
          defaultValue: null,
          comment: '投保信息' },
      core_order_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '核心订单id' },
      order_status:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '订单状态：待支付、已支付、待处理、已处理' },
      flow_status:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: '1',
          comment: '保险状态: 待核保、已核保、待出单、已出单' },
      insurance_status:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '保险公司状态：未确定、已确定、已回传' },
      commission_status:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '分账状态：未分账、已分账、已退账' },
      commission_info:
      { type: 'json',
          primaryKey: true,
          defaultValue: null,
          comment: '分账信息：存放json数据' },
      revoke_status:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: '1',
          comment: '撤单状态：已出单、已撤单' },
      order_label:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '订单标签' },
      promoters:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '推广人员姓名' },
      service_number:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '服务卡号' },
      e_cert:
      { type: 'tinyint',
          primaryKey: true,
          defaultValue: null,
          comment: '是否需要出电子凭证：0（不需要），1（需要）' },
      total_commission:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: null,
          comment: '总佣金' },
      total_company_commission:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: null,
          comment: '公司剩余佣金' },
      total_channel_commission:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: null,
          comment: '渠道佣金' },
      salesperson_commission:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: null,
          comment: '分销商佣金' },
      remark:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '备注' },
      created_time:
      { type: 'datetime',
          primaryKey: true,
          defaultValue: null,
          comment: '创建时间' },
      created_at:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '创建人' },
      created_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '创建者' },
      update_at:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '更新人' },
      update_time:
      { type: 'datetime',
          primaryKey: true,
          defaultValue: null,
          comment: '更新时间' },
      update_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '更新者' },
      valid:
      { type: 'tinyint',
          primaryKey: true,
          defaultValue: '1',
          comment: '是否有效（1有效；0无效）' },
  }, {
    tableName: 'cloud_order_info',
'timestamps': false,
  });  
  return cloud_order_info;
};