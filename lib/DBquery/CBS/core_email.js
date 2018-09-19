/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var core_email = sequelize.define("core_email", { id:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: '',
          comment: '主键' },
       description:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: '',
          comment: '说明' },
       subject:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: '',
          comment: '标题' },
       to:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: '',
          comment: '邮件接收人（多人通过逗号分隔）' },
       cc:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: '',
          comment: '抄送人（多人通过逗号分隔）' },
       text:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: '',
          comment: '文本内容' },
       html:
        { type: 'text',
          primaryKey: true,
          defaultValue: null,
          comment: '邮件格式内容' },
       is_attachments:
        { type: 'tinyint',
          primaryKey: true,
          defaultValue: '0',
          comment: '是否发送附件' },
       valid:
        { type: 'tinyint',
          primaryKey: true,
          defaultValue: '1',
          comment: '是否有效（1有效；0无效）' },
       remark:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: '',
          comment: '备注信息' },
       create_user:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '创建人' },
       create_time:
        { type: 'datetime',
          primaryKey: true,
          defaultValue: '1970-01-01 00:00:00',
          comment: '创建时间' },
       update_user:
        { type: 'varchar',
          primaryKey: true,
          defaultValue: null,
          comment: '更新人' },
       update_time:
        { type: 'datetime',
          primaryKey: true,
          defaultValue: '1970-01-01 00:00:00',
          comment: '更新时间' } }, {
        'tableName': 'core_email',
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
    return core_email;
};