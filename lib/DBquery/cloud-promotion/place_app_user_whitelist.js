"use strict";

module.exports = function(sequelize, DataTypes) {
  var place_app_user_whitelist = sequelize.define("place_app_user_whitelist", {
      id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '主键ID' },
      app_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '渠道id' },
      name:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '姓名' },
      idcard:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '证件id' },
      idcard_type:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '证件类型：身份证' },
      telephone:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '手机号码' },
      status:
      { type: 'char',
          primaryKey: true,
          defaultValue: null,
          comment: '状态：未激活、已激活' },
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
      created_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '创建者' },
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
          defaultValue: null,
          comment: '是否有效（1有效；0无效）' },
      is_certify: {
          type: 'varchar',
          defaultValue: '未认证',
      }
  }, {
    tableName: 'place_app_user_whitelist',
'timestamps': false,
  });  
  return place_app_user_whitelist;
};