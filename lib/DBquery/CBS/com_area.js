/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var com_area = sequelize.define("com_area", { code:
    { type: 'varchar',
        primaryKey: true,
        defaultValue: null,
        comment: '区域code' },
        parent_code:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '上级区域code' },
        name:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '区域名称' },
        alias:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '区域别名' },
        pinyin:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '区域拼音' },
        abbr:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '区域名称首字母' },
        zip:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '邮编' },
        level:
        { type: 'char',
            primaryKey: true,
            defaultValue: null,
            comment: '层级' },
        zhongan:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '众安公司code' } }, {
        'tableName': 'com_area',
        // 'freezeTableName': true,
        // 是否需要增加createdAt、updatedAt、deletedAt字段
      //  'timestamps': true,
        // 不需要createdAt字段
     //   'createdAt': 'created_time',
        // 将updatedAt字段改个名
      //  'updatedAt': 'update_time',
        // 将deletedAt字段改名
        // 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
        'deletedAt': false
    });
    return com_area;
};