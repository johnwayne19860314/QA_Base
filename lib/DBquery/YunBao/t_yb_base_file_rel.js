
/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var t_yb_base_file_rel = sequelize.define("t_yb_base_file_rel", { id:
    { type: 'varchar',
        primaryKey: true,
        defaultValue: null,
        comment: '主键' },
        file_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '附件id' },
        resource_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '关联对象id' },
        status:
        { type: 'char',
            primaryKey: true,
            defaultValue: null,
            comment: '有效状态' },
        cjr_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '创建人id' },
        cjr:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '创建人' },
        cj_rq:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '创建日期' },
        gxr_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '更新人id' },
        gxr:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '更新人' },
        gx_rq:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '更新日期' },
        description:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '描述' } }, {
        'tableName': 't_yb_base_file_rel',
        // 'freezeTableName': true,
        // 是否需要增加createdAt、updatedAt、deletedAt字段
        'timestamps': true,
        // 不需要createdAt字段
        'createdAt': 'cj_rq',
        // 将updatedAt字段改个名
        'updatedAt': 'gx_rq',
        // 将deletedAt字段改名
        // 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
        'deletedAt': false
    });
    return t_yb_base_file_rel;
};