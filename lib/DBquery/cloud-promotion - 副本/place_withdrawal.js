"use strict";

module.exports = function(sequelize, DataTypes) {
  var place_withdrawal = sequelize.define("place_withdrawal", {
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
      payment_type:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '付款方式：微信、支付宝、银行卡' },
      name:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '收款人姓名' },
      idCardNo:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '证件号码' },
      cardNo:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '收款人账户：如果是微信填写openid' },
      phoneNo:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '手机号码' },
      amount:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: null,
          comment: '提现金额（单位：分）' },
      status:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '状态：提现中、提现成功、提现异常、提现失败' },
      payment_no:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '付款编号' },
      payment_time:
      { type: 'datetime',
          primaryKey: true,
          defaultValue: null,
          comment: '付款时间' },
      memo:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '描述' },
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
    tableName: 'place_withdrawal',
  });  
  return place_withdrawal;
};