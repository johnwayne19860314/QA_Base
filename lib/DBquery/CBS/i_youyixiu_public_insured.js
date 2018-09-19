"use strict";

module.exports = function(sequelize, DataTypes) {
  var i_youyixiu_public_insured = sequelize.define("i_youyixiu_public_insured", { id:
  { type: 'varchar',
      primaryKey: true,
      defaultValue: null,
      comment: '' },
      name:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
      phone:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
      package_code:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
      model:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
      product_id:
      { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
      shares: { type: 'int', primaryKey: true, defaultValue: '0', comment: '' },
      create_time:
      { type: 'datetime',
          primaryKey: true,
          defaultValue: 'CURRENT_TIMESTAMP',
          comment: '创建日期' } },
      {
    tableName: 'i_youyixiu_public_insured',
'timestamps': false,
  });  
  return i_youyixiu_public_insured;
};