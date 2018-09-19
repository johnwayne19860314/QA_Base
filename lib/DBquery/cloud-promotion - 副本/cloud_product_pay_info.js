"use strict";

module.exports = function(sequelize, DataTypes) {
  var cloud_product_pay_info = sequelize.define("cloud_product_pay_info", {
      id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '主键ID' },
      merchant_no:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '商户编号(目前专供工行)' },
      product_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '产品编码' },
      order_name:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
      sub_order_name:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
      charge_name:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
      charge_account:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
      payee_account:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
      payment_type:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
      payment_method:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
      payment_scene:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
      pay_notify_url:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
      status:
      { type: 'char',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
      pay_success_url:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
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
          comment: '是否有效（1有效；0无效）' }
  }, {
    tableName: 'cloud_product_pay_info',
  });  
  return cloud_product_pay_info;
};