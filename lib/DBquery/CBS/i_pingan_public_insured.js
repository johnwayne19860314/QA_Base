/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var i_pingan_public_insured = sequelize.define("i_pingan_public_insured", { name:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '姓名' },
       card_type:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '证件类型' },
       card_id:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '证件号' },
       type:
        { type: 'char',
          primaryKey: true,
          defaultValue: '2',
          comment: '1:投保人,2:被保人.默认2' },
       phone:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
       email:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '' },
       effect:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '生效日' },
       expire:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '到期日' },
       product_id:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '产品id' },
       shares:
        { type: 'int',
          primaryKey: true,
          defaultValue: '0',
          comment: '份数' },
       create_time:
        { type: 'datetime',
          primaryKey: true,
          defaultValue: 'CURRENT_TIMESTAMP',
          comment: '创建日期' },
       plan_code:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '产品方案代码' } }, {
        'tableName': 'i_pingan_public_insured',
        // 'freezeTableName': true,
        // 是否需要增加createdAt、updatedAt、deletedAt字段
        'timestamps': false,
        //// 不需要createdAt字段
        //'createdAt': 'created_time',
        //// 将updatedAt字段改个名
        //'updatedAt': 'update_time',
        //// 将deletedAt字段改名
        // 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
       // 'deletedAt': false
    });
    return i_pingan_public_insured;
};