"use strict";

module.exports = function(sequelize, DataTypes) {
  var place_user_report = sequelize.define("place_user_report", {
      id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '主键' },
      user_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '用户id' },
      monthly:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '月份：201808' },
      monthly_order_quantity:
      { type: 'int',
          primaryKey: true,
          defaultValue: null,
          comment: '当月销售订单数（单位：分）' },
      monthly_total_sales:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: null,
          comment: '当月销售总额（单位：分）' },
      monthly_pretax_income:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: null,
          comment: '当月佣金收入（单位：分）' },
      monthly_aftertax_income:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: '0',
          comment: '当月税后收入' },
      monthly_total_taxed:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: null,
          comment: '当月缴税总额' },
      total_taxed:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: null,
          comment: '缴税总额（单位：分）' },
      total_sales:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: null,
          comment: '销售总额（单位：分）' },
      total_quantity:
      { type: 'int',
          primaryKey: true,
          defaultValue: null,
          comment: '销售总单数' },
      status:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '状态：统计、汇总、归档' },
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
    tableName: 'place_user_report',
  });  
  return place_user_report;
};