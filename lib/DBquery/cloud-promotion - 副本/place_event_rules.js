"use strict";

module.exports = function(sequelize, DataTypes) {
  var place_event_rules = sequelize.define("place_event_rules", {
      id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: 'id' },
      event_code:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '规则标识：必须唯一' },
      type:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '奖励类型：现金、积分、实物' },
      preheat_time:
      { type: 'datetime',
          primaryKey: true,
          defaultValue: null,
          comment: '预热时间' },
      start_time:
      { type: 'datetime',
          primaryKey: true,
          defaultValue: null,
          comment: '开始时间' },
      expiration_time:
      { type: 'datetime',
          primaryKey: true,
          defaultValue: null,
          comment: '失效时间' },
      reward_type:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '派发规则' },
      limit_rule:
      { type: 'text',
          primaryKey: true,
          defaultValue: null,
          comment: '活动规则' },
      foundation:
      { type: 'int',
          primaryKey: true,
          defaultValue: null,
          comment: '基础奖励数' },
      total_sum:
      { type: 'int',
          primaryKey: true,
          defaultValue: '0',
          comment: '活动奖励领取总次数' },
      total_worth:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: '0',
          comment: '活动奖励领取总金额' },
      limit_max_amount:
      { type: 'int',
          primaryKey: true,
          defaultValue: '0',
          comment: '最大限制金额，0表示没有限制（单位为分）' },
      limit_max_count:
      { type: 'int',
          primaryKey: true,
          defaultValue: '0',
          comment: '最大限次数，0表示无限制' },
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
    tableName: 'place_event_rules',
  });  
  return place_event_rules;
};