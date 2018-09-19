"use strict";

module.exports = function(sequelize, DataTypes) {
  var cloud_app_info = sequelize.define("cloud_app_info", {
      id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '主键ID' },
      code:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '渠道编码' },
      name:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '渠道名称' },
      securekey:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '渠道密钥' },
      contact_people:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '联系人' },
      contact_telephone:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '联系人电话' },
      contact_switchboard:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '联系电话-总机' },
      address:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '渠道地址' },
      bank_account:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '银行账号' },
      opening_bank:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '开户银行' },
      parent_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '父级渠道ID' },
      lock_status:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '锁定状态 1-锁定   0-未锁定' },
      status:
      { type: 'char',
          primaryKey: true,
          defaultValue: null,
          comment: '状态：1-有效   0-无效' },
      is_mx:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '是否美行：1-美行  9-其他' },
      email:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '电子邮箱' },
      industry:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '渠道行业' },
      virtual_channel:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '虚拟渠道(一级渠道)' },
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
    tableName: 'cloud_app_info',
  });  
  return cloud_app_info;
};