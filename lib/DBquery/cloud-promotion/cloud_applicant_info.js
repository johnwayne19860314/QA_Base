"use strict";

module.exports = function(sequelize, DataTypes) {
  var cloud_applicant_info = sequelize.define("cloud_applicant_info", {
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
          comment: '凭证号' },
      type:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '投保人类型 1- 个人 2- 企业 3- 个体工商户' },
      biz_name:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '投保机构名称' },
      biz_no:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '企业证号' },
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
      contact_idcard:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '联系人身份证号' },
      contact_email:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '联系人邮箱' },
      sf_bb_yz:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '被保信息是否和投保一样   1-一样   0-不一样' },
      bb_type:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '被保机构类型' },
      bb_biz_name:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '被保机构名称' },
      bb_contact_name:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '被保联系人' },
      bb_contact_telephone:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '被保联系人电话' },
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
          comment: '是否有效（1有效；0无效）'  },
  }, {
    tableName: 'cloud_applicant_info',
'timestamps': false,
  });  
  return cloud_applicant_info;
};