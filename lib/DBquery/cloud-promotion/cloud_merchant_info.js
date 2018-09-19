"use strict";

module.exports = function(sequelize, DataTypes) {
  var cloud_merchant_info = sequelize.define("cloud_merchant_info", {
      id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '主键ID' },
      order_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '订单号' },
      cert_no:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '凭证号' },
      name:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '商铺名称' },
      number:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '商铺号' },
      market:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '商场位置-广场    0-苏宁广场' },
      kind:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '商铺性质  大类' },
      small_kind:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '商铺性质  小类' },
      type:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '商铺类型' },
      area:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '商铺面积(平米)  0-100平米以下   1-100-200平米  2-200-300平米  3-300-400平米  4-400-500平米' },
      fix_price:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '每平米装修价格   0-2000-3000元   1-3000-4000元  2-4000-5000元' },
      contract_price:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '合同金额' },
      equ_price:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '设备价格    0-50-80万   1-80-100万' },
      stock_price:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '存货价值   0-50-80万   1-80-100万' },
      total_price:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '自由财产' },
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
    tableName: 'cloud_merchant_info',
'timestamps': false,
  });  
  return cloud_merchant_info;
};