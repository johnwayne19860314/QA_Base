/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var sso_user_info = sequelize.define("sso_user_info",
        { user_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
            password:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '',
                comment: '' },
            name:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '',
                comment: '' },
            birthday:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '',
                comment: '' },
            sex:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '',
                comment: '' },
            education:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '',
                comment: '' },
            country:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '',
                comment: '' },
            province:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '',
                comment: '' },
            city:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '',
                comment: '' },
            address:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '',
                comment: '' },
            cardType:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '',
                comment: '' },
            cardNo:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '',
                comment: '' },
            industry:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '',
                comment: '' },
            job:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '',
                comment: '' },
            status:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '正常',
                comment: '' },
            update_id:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '',
                comment: '' },
            created_id:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '',
                comment: '' },
            valid: { type: 'int', primaryKey: true, defaultValue: '1', comment: '' },
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
        'tableName': 'sso_user_info',
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
    return sso_user_info;
};