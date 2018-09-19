"use strict";

module.exports = function(sequelize, DataTypes) {
  var cloud_invoice_info = sequelize.define("cloud_invoice_info", {
      id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '主键ID' },
      order_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '订单号' },
      cert_no:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '凭证号码' },
      type:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '发票类型  0-不需要发票   1-增值税普通发票   2-增值税专用发票' },
      title:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '发票抬头' },
      address:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '配送地址' },
      contact_name:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '联系人姓名' },
      contact_telephone:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '联系人手机号码' },
      contact_email:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '联系人邮箱' },
      contact_post_code:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '邮政编码' },
      register_address:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '注册地址' },
      bank_name:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '开户银行名称' },
      bank_account:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '开户银行账户' },
      telephone:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '开票电话' },
      code:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '统一社会信用代码' },
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
    tableName: 'cloud_invoice_info',
'timestamps': false,
  });  
  return cloud_invoice_info;
};