"use strict";

module.exports = function(sequelize, DataTypes) {
  var cloud_product_info = sequelize.define("cloud_product_info", {
      id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '主键ID' },
      name:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '产品名称' },
      code:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '产品代码' },
      payment_category:
      { type: 'tinyint',
          primaryKey: true,
          defaultValue: null,
          comment: '产品支付类别：1-净费  2-非净费' },
      status:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '状态:存库中、预热中、销售中、已停售、已下架' },
      product_ratio:
      { type: 'float',
          primaryKey: true,
          defaultValue: null,
          comment: '产品经纪费比例' },
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
      Insurance_company:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '保险公司' },
      e_cert:
      { type: 'tinyint',
          primaryKey: true,
          defaultValue: null,
          comment: '是否需要出电子凭证：0（不需要），1（需要）' },
      product_type:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '产品类别' },
      core_product_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '核心库中的产品ID' },
      total_sales:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: '0',
          comment: '产品销售总额' },
      total_copies:
      { type: 'int',
          primaryKey: true,
          defaultValue: '0',
          comment: '产品销售总份数' },
      total_refund:
      { type: 'bigint',
          primaryKey: true,
          defaultValue: '0',
          comment: '产品退款总额' },
      total_chargeback:
      { type: 'int',
          primaryKey: true,
          defaultValue: '0',
          comment: '产品退单数' },
      limit_buy:
      { type: 'int',
          primaryKey: true,
          defaultValue: '0',
          comment: '购买份数限制：默认为0，表示无限制' },
      content:
      { type: 'text',
          primaryKey: true,
          defaultValue: null,
          comment: '保险内容:存放保险内容软文' },
      product_label:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '产品标签:多个标签使用“|”分割' },
      product_info:
      { type: 'json',
          primaryKey: true,
          defaultValue: null,
          comment: '产品结构化信息' },
      cover_url:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '封面图片地址' },
      slogan:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '产品标语' },
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
    tableName: 'cloud_product_info',
'timestamps': false,
  });  
  return cloud_product_info;
};