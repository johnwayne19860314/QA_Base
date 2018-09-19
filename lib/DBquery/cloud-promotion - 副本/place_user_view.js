"use strict";

module.exports = function(sequelize, DataTypes) {
  var place_user_view = sequelize.define("place_user_view", {
      id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
      user_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '用户ID' },
      name:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '用户名称' },
      title:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '标题' },
      content:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '内容' },
      oper_type:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '用户操作类型' },
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
          comment: '是否有效（1有效；0无效）' }
  }, {
    tableName: 'place_user_view',
  });  
  return place_user_view;
};