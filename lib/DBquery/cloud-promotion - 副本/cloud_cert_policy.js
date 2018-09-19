"use strict";

module.exports = function(sequelize, DataTypes) {
  var cloud_cert_policy = sequelize.define("cloud_cert_policy", {
      id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '主键ID' },
      cert_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '凭证id' },
      cert_no:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '凭证号' },
      policy_no:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '保单号' },
      policy_url:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '电子保单url' },
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
      insured_name:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
      app_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
      saler_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '推广人员姓名' },
      buyer_name:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
      buyer_telephone:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
      status:
      { type: 'char',
          primaryKey: true,
          defaultValue: null,
          comment: '状态' },
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
    tableName: 'cloud_cert_policy',
  });  
  return cloud_cert_policy;
};