"use strict";

module.exports = function(sequelize, DataTypes) {
  var place_reward = sequelize.define("place_reward", {
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
      event_name:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '活动名称' },
      event_type:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '活动类型：拉新、促活、留存' },
      reward_type:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '奖励类型：现金、实物、积分、礼品' },
      reward_rule:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '奖励规则：直接发放、被动领取' },
      amount:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: null,
          comment: '奖励金额（单位：分）' },
      start_time:
      { type: 'datetime',
          primaryKey: true,
          defaultValue: null,
          comment: '有效起始时间' },
      expire_time:
      { type: 'datetime',
          primaryKey: true,
          defaultValue: null,
          comment: '失效终止时间' },
      status:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '状态：未领取、已领取、已发放、已失效' },
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
    tableName: 'place_reward',
'timestamps': false,
  });  
  return place_reward;
};