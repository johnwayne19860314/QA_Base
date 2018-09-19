"use strict";

module.exports = function(sequelize, DataTypes) {
  var cloud_product_package = sequelize.define("cloud_product_package", {
      id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '主键ID' },
      name:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '产品包名称' },
      code:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '产品包代码' },
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
    tableName: 'cloud_product_package',
  });  
  return cloud_product_package;
};