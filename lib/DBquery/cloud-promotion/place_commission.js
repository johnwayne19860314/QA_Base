"use strict";

module.exports = function(sequelize, DataTypes) {
  var place_commission = sequelize.define("place_commission", {
      id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '主键' },
      order_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '订单id:一个订单可能存在多条分账记录（子订单的情况）' },
      order_name:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '订单名称' },
      app_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '渠道ID' },
      user_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '用户ID' },
      status:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '分账状态:已清算、成功、已撤销' },
      order_mode:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '分账模式：云保模式、推广模式' },
      premium:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: null,
          comment: '总保费' },
      premium_user_pay:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: null,
          comment: '用户实际支付金额' },
      product_ratio:
      { type: 'float',
          primaryKey: true,
          defaultValue: null,
          comment: '产品佣金比例' },
      total_commission:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: null,
          comment: '总佣金' },
      company_ratio:
      { type: 'float',
          primaryKey: true,
          defaultValue: null,
          comment: '公司佣金比例' },
      total_company_commission:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: null,
          comment: '公司佣金' },
      channel_ratio:
      { type: 'float',
          primaryKey: true,
          defaultValue: null,
          comment: '渠道佣金比例' },
      total_channel_commission:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: null,
          comment: '渠道总佣金' },
      salesperson_ratio:
      { type: 'float',
          primaryKey: true,
          defaultValue: null,
          comment: '分销商佣金比例' },
      salesperson_commission:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: null,
          comment: '分销商佣金' },
      entered_time:
      { type: 'datetime',
          primaryKey: true,
          defaultValue: null,
          comment: '入账时间：根据产品来定，可自由调配' },
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
    tableName: 'place_commission',
'timestamps': false,
  });  
  return place_commission;
};