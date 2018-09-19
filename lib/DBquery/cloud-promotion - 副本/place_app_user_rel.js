"use strict";

module.exports = function(sequelize, DataTypes) {
    var place_app_user_rel = sequelize.define("place_app_user_rel", {
        id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '主键ID' },
        app_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '渠道id' },
        user_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '用户id' },
        role:
        { type: 'char',
            primaryKey: true,
            defaultValue: null,
            comment: '身份角色:M（管理员）、S（销售）' },
        status:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '状态：已激活、已停用、已删除' },
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
            comment: '是否有效（1有效；0无效）' },
    }, {
        tableName: 'place_app_user_rel',
    });
    return place_app_user_rel;
};

