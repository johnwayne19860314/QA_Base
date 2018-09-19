"use strict";

module.exports = function(sequelize, DataTypes) {
  var cloud_app_product_relation = sequelize.define("cloud_app_product_relation", {
      id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '主键ID' },
      product_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '产品id' },
      app_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: 'app_id' },
      fee_rule:
      { type: 'tinyint',
          primaryKey: true,
          defaultValue: '1',
          comment: '算费规则：1-启用自定义配置、0-使用产品默认配置' },
      company_ratio:
      { type: 'float',
          primaryKey: true,
          defaultValue: null,
          comment: '公司佣金比例' },
      channel_ratio:
      { type: 'float',
          primaryKey: true,
          defaultValue: null,
          comment: '渠道佣金比例' },
      salesperson_ratio:
      { type: 'float',
          primaryKey: true,
          defaultValue: null,
          comment: '分销商佣金比例' },
      url:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '链接地址' },
      package_code:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '保险产品所在的产品包代码' },
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
    tableName: 'cloud_app_product_relation',
'timestamps': false,
  });  
  return cloud_app_product_relation;
};