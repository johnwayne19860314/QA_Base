/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var core_contact = sequelize.define("core_contact", { Id: { type: 'int', primaryKey: true, defaultValue: null, comment: '' },
    name:
     { type: 'varchar',
       primaryKey: true,
       defaultValue: null,
       comment: '姓名' },
    mobile:
     { type: 'varchar',
       primaryKey: true,
       defaultValue: null,
       comment: '手机号' },
    email:
     { type: 'varchar',
       primaryKey: true,
       defaultValue: null,
       comment: '邮箱' },
    company:
     { type: 'varchar',
       primaryKey: true,
       defaultValue: null,
       comment: '所属企业' } }, {
        'tableName': 'core_contact',
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
    return core_contact;
};