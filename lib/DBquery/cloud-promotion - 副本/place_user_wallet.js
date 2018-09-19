"use strict";

module.exports = function(sequelize, DataTypes) {
  var place_user_wallet = sequelize.define("place_user_wallet", {
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
      balance:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: '0',
          comment: '余额' },
      freeze_amount:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: '0',
          comment: '冻结金额：冻结金额不可使用或是取现' },
      total_revenue:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: '0',
          comment: '总收入' },
      total_withdrawals:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: '0',
          comment: '提现总额' },
      total_scottare:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: '0',
          comment: '缴税总额' },
      status:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '钱包状态：正常、冻结、禁用' },
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
    tableName: 'place_user_wallet',
  });  
  return place_user_wallet;
};