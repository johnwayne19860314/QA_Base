"use strict";

module.exports = function(sequelize, DataTypes) {
  var cloud_cert_info = sequelize.define("cloud_cert_info", { id:
  { type: 'varchar',
      primaryKey: true,
      defaultValue: null,
      comment: '主键ID' },
      order_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '订单ID' },
      cert_no:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '凭证号' },
      product_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '产品id' },
      user_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '用户ID' },
      app_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '渠道id' },
      copies:
      { type: 'int',
          primaryKey: true,
          defaultValue: null,
          comment: '份数' },
      start_time:
      { type: 'datetime',
          primaryKey: true,
          defaultValue: null,
          comment: '起保时间' },
      end_time:
      { type: 'datetime',
          primaryKey: true,
          defaultValue: null,
          comment: '结束时间' },
      price:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '总保费' },
      status:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '状态：未出保、已出保、已过期、已退保' },
      promoters:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '投保人' },
      parent_no:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '父级凭证号' },
      request:
      { type: 'json',
          primaryKey: true,
          defaultValue: null,
          comment: '投保信息' },
      payment_price:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '实际支付保费' },
      revoke_status:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: '未出单',
          comment: '撤单状态：未出单、已出单、已撤单、撤单失败' },
      revoke_desc:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '撤单描述' },
      remark:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '备注' },
      created_time:
      { type: 'timestamp',
          primaryKey: true,
          defaultValue: 'CURRENT_TIMESTAMP',
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
      { type: 'timestamp',
          primaryKey: true,
          defaultValue: 'CURRENT_TIMESTAMP',
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
          comment: '是否有效（1有效；0无效）' }
  }, {
    tableName: 'cloud_cert_info',
'timestamps': false,
  });  
  return cloud_cert_info;
};