/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var i_yaic_jiangyuxian_applicant = sequelize.define("i_yaic_jiangyuxian_applicant", { name:
    { type: 'varchar',
        primaryKey: true,
        defaultValue: null,
        comment: '' },
        card_type:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        card_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
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
            comment: '' },
        city_code:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        shares: { type: 'int', primaryKey: true, defaultValue: '0', comment: '' } }, {
        'tableName': 'i_yaic_jiangyuxian_applicant',
        // 'freezeTableName': true,
        // 是否需要增加createdAt、updatedAt、deletedAt字段
        //'timestamps': true,
        //// 不需要createdAt字段
        //'createdAt': 'created_time',
        //// 将updatedAt字段改个名
        //'updatedAt': 'update_time',
        //// 将deletedAt字段改名
        // 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
        'deletedAt': false
    });
    return i_yaic_jiangyuxian_applicant;
};