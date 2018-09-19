/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var core_policy = sequelize.define("core_policy", { id:
    { type: 'varchar',
        primaryKey: true,
        defaultValue: null,
        comment: '' },
        appid:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: '',
            comment: 'appid' },
        order_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: '',
            comment: '订单id' },
        policy_req_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '出单请求序列号' },
        product_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: '',
            comment: '产品id' },
        policy_no:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: '',
            comment: '保单号' },
        status:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: '',
            comment: '保单状态：待支付、投保中、待生效、保障中、已失效' },
        amount:
        { type: 'int',
            primaryKey: true,
            defaultValue: '0',
            comment: '交易金额，分为单位' },

        policy_info:
        { type: 'json',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        effective_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: '1970-01-01 00:00:00.000',
            comment: '保单生效时间' },
        failure_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: '1970-00-00 00:00:00.000',
            comment: '保单失效日期' },
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
        'tableName': 'core_policy',
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
    return core_policy;
};