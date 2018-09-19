"use strict";

module.exports = function(sequelize, DataTypes) {
  var place_pay_taxes = sequelize.define("place_pay_taxes", {
      id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
      order_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '订单id' },
      order_name:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '订单名称' },
      app_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '渠道id' },
      user_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '用户id' },
      monthly:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '月份，例如：201802' },
      rate:
      { type: 'json',
          primaryKey: true,
          defaultValue: null,
          comment: '税率，税率可能分为几部分计算' },
      amount:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: null,
          comment: '金额' },
      tax:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: null,
          comment: '缴税金额' },
      taxed_income:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: null,
          comment: '完税金额，完税之后的金额' },
      taxed_total:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
      status:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '状态：完税、退税' },
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
    tableName: 'place_pay_taxes',
'timestamps': false,
  });  
  return place_pay_taxes;
};