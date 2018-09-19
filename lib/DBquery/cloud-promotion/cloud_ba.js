"use strict";

module.exports = function(sequelize, DataTypes) {
  var cloud_ba = sequelize.define("cloud_ba", {
      id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '主键' },
      cert_no:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '凭证号' },
      lxr:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '联系人' },
      lx_dh:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '联系电话' },
      lx_yx:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '联系邮箱' },
      sp_je:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '索赔金额' },
      accident_type:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '事故类型  0-员工工伤   1-顾客受伤   2-水管爆裂   3-玻璃破碎   4-设备损坏   5-其它' },
      yg_xm:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '员工姓名' },
      sgfs_sj:
      { type: 'datetime',
          primaryKey: true,
          defaultValue: null,
          comment: '事故发生时间' },
      gjss_je:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '估计损失金额' },
      qtgjss_je:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '临铺、公用等设备损失金额' },
      reason:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '原因与经过' },
      file_json:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '资料附件json' },
      deal_status:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: '0',
          comment: '处理状态  1-已报案  2-已受理  3-已理赔 4-已拒赔' },
      status:
      { type: 'char',
          primaryKey: true,
          defaultValue: null,
          comment: '有效状态' },
      app_code:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '所属渠道' },
      policy_no:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '保单号' },
      user_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '用户ID' },
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
    tableName: 'cloud_ba',
'timestamps': false,
  });  
  return cloud_ba;
};