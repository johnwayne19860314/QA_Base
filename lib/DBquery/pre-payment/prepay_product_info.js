/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var prepay_product_info = sequelize.define("prepay_product_info",
        { id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
            appid:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '',
                comment: '' },
            product_id:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '',
                comment: '' },
            code:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '',
                comment: '' },
            path_file:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '',
                comment: '' },
            name:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '',
                comment: '' },
            vendor_id:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '',
                comment: '' },
            start_time:
            { type: 'datetime',
                primaryKey: true,
                defaultValue: null,
                comment: '' },
            end_time:
            { type: 'datetime',
                primaryKey: true,
                defaultValue: null,
                comment: '' },
            status:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '正常',
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
                comment: '' },
            systemUser_id:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: null,
                comment: '' } }, {
        'tableName': 'prepay_product_info',
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
    return prepay_product_info;
};