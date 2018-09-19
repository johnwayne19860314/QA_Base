/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var pay_account = sequelize.define("pay_account", { id:
    { type: 'varchar',
        primaryKey: true,
        defaultValue: null,
        comment: '主键ID' },
        payee:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '收款方' },
        account_name:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        account_number:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        balance:
        { type: 'bigint',
            primaryKey: true,
            defaultValue: null,
            comment: '账户余额' },
        income:
        { type: 'bigint',
            primaryKey: true,
            defaultValue: null,
            comment: '账户入账总额：只增不减' },
        expenditure:
        { type: 'bigint',
            primaryKey: true,
            defaultValue: null,
            comment: '账户出账总额：只增不减' },
        account_type:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '账户类型' },
        account_config:
        { type: 'text',
            primaryKey: true,
            defaultValue: null,
            comment: '账户配置' },
        account_summary:
        { type: 'text',
            primaryKey: true,
            defaultValue: null,
            comment: '账户描述' },
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
        'tableName': 'pay_account',
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
    return pay_account;
};