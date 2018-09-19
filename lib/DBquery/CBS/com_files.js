/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var com_files = sequelize.define("com_files", { id:
    { type: 'varchar',
        primaryKey: true,
        defaultValue: null,
        comment: 'id' },
        oss_name:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '对象名称' },
        oss_type:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '对象类型' },
        oss_path:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '对象路径' },
        oss_key:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: 'oss_key' },
        query_count:
        { type: 'int',
            primaryKey: true,
            defaultValue: '0',
            comment: 'query_count' },
        download_count:
        { type: 'int',
            primaryKey: true,
            defaultValue: '0',
            comment: '下载次数' },
        mimetype:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '消息内容' },
        oss_size:
        { type: 'int',
            primaryKey: true,
            defaultValue: null,
            comment: '文件大小' },
        md5:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '文件md5摘要' },
        bucket:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: 'bucket' },
        status:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '状态' },
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
        'tableName': 'com_files',
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
    return com_files;
};