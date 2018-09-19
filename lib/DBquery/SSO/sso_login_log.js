/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var sso_login_log = sequelize.define("sso_login_log",
        { id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
            user_id:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: null,
                comment: '' },
            loginTime:
            { type: 'datetime',
                primaryKey: true,
                defaultValue: null,
                comment: '' },
            from:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: null,
                comment: '' },
            createdAt:
            { type: 'datetime',
                primaryKey: true,
                defaultValue: null,
                comment: '' },
            updatedAt:
            { type: 'datetime',
                primaryKey: true,
                defaultValue: null,
                comment: '' } }
        , {
        'tableName': 'sso_login_log',
            // 'freezeTableName': true,
            // 是否需要增加createdAt、updatedAt、deletedAt字段
            'timestamps': true,
            // 不需要createdAt字段
            'createdAt': 'createdAt',
            // 将updatedAt字段改个名
            'updatedAt': 'updatedAt',
            // 将deletedAt字段改名
            // 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
            'deletedAt': false
    });
    return sso_login_log;
};