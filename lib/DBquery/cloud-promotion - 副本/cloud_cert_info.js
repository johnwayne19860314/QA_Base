"use strict";

module.exports = function(sequelize, DataTypes) {
  var cloud_cert_info = sequelize.define("cloud_cert_info", {
      id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '主键ID' },
      order_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '订单ID' },
      cert_no:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '凭证号' },
      product_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '产品id' },
      user_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '用户ID' },
      app_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '渠道id' },
      start_time:
      { type: 'datetime',
          primaryKey: true,
          defaultValue: null,
          comment: '起保时间' },
      end_time:
      { type: 'datetime',
          primaryKey: true,
          defaultValue: null,
          comment: '结束时间' },
      price:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '总保费' },
      ay_yj:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '安逸总佣金' },
      app_yj:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '渠道总佣金' },
      employee_num:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '员工数量' },
      employee_fs:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '员工份数  1-1份，每人最高赔偿12万（含医疗住院费）   2-2份，每人最高赔偿22万（含医疗住院费）   3-3份，每人最高赔偿32万（含医疗住院费）   4-4份，每人最高赔偿42万（含医疗住院费）' },
      status:
      { type: 'char',
          primaryKey: true,
          defaultValue: null,
          comment: '状态' },
      cdr:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '出单人' },
      parent_no:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '父级凭证号' },
      content:
      { type: 'json',
          primaryKey: true,
          defaultValue: null,
          comment: '投保信息' },
      pay_price:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '实际支付保费' },
      cd_status:
      { type: 'char',
          primaryKey: true,
          defaultValue: '1',
          comment: '撤单状态：1-已出单 2-已撤单 3-撤单失败' },
      cd_desc:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '撤单描述' },
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
    tableName: 'cloud_cert_info',
  });  
  return cloud_cert_info;
};