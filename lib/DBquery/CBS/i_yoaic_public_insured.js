/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var i_yoaic_public_insured = sequelize.define("i_yoaic_public_insured", { order_id:
    { type: 'varchar',
        primaryKey: true,
        defaultValue: null,
        comment: '订单号' },
        name:
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
        phone:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '手机号' },
        email:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '邮件' },
        effect:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '保险起期' },
        expire:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '保险止期' },
        product_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '产品ID' },
        shares:
        { type: 'int',
            primaryKey: true,
            defaultValue: '0',
            comment: '购买份数' },
        create_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: 'CURRENT_TIMESTAMP',
            comment: '创建日期' } }, {
        'tableName': 'i_yoaic_public_insured',
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
    return i_yoaic_public_insured;
};