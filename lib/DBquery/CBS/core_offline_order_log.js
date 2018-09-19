/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var core_offline_order_log = sequelize.define("core_offline_order_log", { id:
    { type: 'varchar',
        primaryKey: true,
        defaultValue: null,
        comment: '主键ID' },
        order_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '线下订单id' },
        log_type:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '操作类型：核保沟通、客户沟通、方案确认' },
        content:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '日志内容' },
        request:
        { type: 'text',
            primaryKey: true,
            defaultValue: null,
            comment: '其他内容' },
        remark:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '备注' },
        created_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: '1970-01-01 00:00:00.000',
            comment: '创建时间' },
        created_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '创建id' },
        update_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: '1970-01-01 00:00:00.000',
            comment: '更新时间' },
        update_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '更新id' },
        valid:
        { type: 'tinyint',
            primaryKey: true,
            defaultValue: '1',
            comment: '是否有效（1有效；0无效）' } }, {
        'tableName': 'core_offline_order_log',
        // 'freezeTableName': true,
        // 是否需要增加createdAt、updatedAt、deletedAt字段
        'timestamps': false,
        // 不需要createdAt字段
     //   'createdAt': 'created_time',
        // 将updatedAt字段改个名
      //  'updatedAt': 'update_time',
        // 将deletedAt字段改名
        // 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
        //'deletedAt': false
    });
    return core_offline_order_log;
};