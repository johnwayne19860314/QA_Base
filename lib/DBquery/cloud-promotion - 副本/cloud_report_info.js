"use strict";

module.exports = function(sequelize, DataTypes) {
  var cloud_report_info = sequelize.define("cloud_report_info", {
      id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '主键ID' },
      user_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '统一账户体系中的用户ID' },
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
      policy_no:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '保单（凭证）号' },
      contact_name:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '联系人姓名' },
      contact_phone:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '联系人手机号码' },
      report_json:
      { type: 'text',
          primaryKey: true,
          defaultValue: null,
          comment: '报案的json' },
      file_json:
      { type: 'text',
          primaryKey: true,
          defaultValue: null,
          comment: '报案相关附件的json' },
      deal_status:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '报案处理状态' },
      status:
      { type: 'char',
          primaryKey: true,
          defaultValue: null,
          comment: '有效状态' },
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
    tableName: 'cloud_report_info',
  });  
  return cloud_report_info;
};