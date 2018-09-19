/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var pay_account_log = sequelize.define("pay_account_log",
        { id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '主键ID' },
            payment_id:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: null,
                comment: '' },
            suborder_id:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: null,
                comment: '业务订单id:大订单直接存放order_id，如果是子订单则存在子订单编号' },
            account_id:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: null,
                comment: '账户id' },
            account_number:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: null,
                comment: '支付账户' },
            account_name:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: null,
                comment: '' },
            account_type:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: null,
                comment: '账户流水类型：微信支付、易付宝' },
            memo:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: null,
                comment: '流水描述' },
            action:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: null,
                comment: '交易动作：进账、出账' },
            amount_money:
            { type: 'bigint',
                primaryKey: true,
                defaultValue: null,
                comment: '' },
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
        'tableName': 'pay_account_log',
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
    return pay_account_log;
};