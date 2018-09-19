/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var core_router = sequelize.define("core_router", { id:
    { type: 'varchar',
        primaryKey: true,
        defaultValue: '',
        comment: '路由ID' },
        product_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: '',
            comment: '路由对应的产品id' },
        router_name:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: '',
            comment: '产品模块具体的接口名' },
        router_info:
        { type: 'text',
            primaryKey: true,
            defaultValue: null,
            comment: '路由信息，json数据结构' },
        update_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: '1970-01-01 00:00:00.000',
            comment: '更新时间' },
        created_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: '1970-01-01 00:00:00.000',
            comment: '创建时间' },
        valid:
        { type: 'tinyint',
            primaryKey: true,
            defaultValue: '1',
            comment: '是否有效 1有效，2无效' } }, {
        'tableName': 'core_router',
        // 'freezeTableName': true,
        // 是否需要增加createdAt、updatedAt、deletedAt字段
        'timestamps': true,
        // 不需要createdAt字段
        'createdAt': 'created_time',
        // 将updatedAt字段改个名
        'updatedAt': 'update_time',
        // 将deletedAt字段改名
        // 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
        'deletedAt': false
    });
    return core_router;
};