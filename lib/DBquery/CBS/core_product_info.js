/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var core_product_info = sequelize.define("core_product_info",
        { id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: '',
            comment: '产品ID，不能做为主键' },
            code:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '',
                comment: '产品代码' },
            name:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '',
                comment: '产品名称' },
            vendor_id:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: '',
                comment: '供应商id' },
            passageway_code:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: null,
                comment: '产品通道code' },
            commission_rate:
            { type: 'int',
                primaryKey: true,
                defaultValue: null,
                comment: '产品的佣金比例，自己保留，不给业务系统' },
            product_valid:
            { type: 'tinyint',
                primaryKey: true,
                defaultValue: '0',
                comment: '产品有效性 0 无效，1 有效' },
            life_valid:
            { type: 'tinyint',
                primaryKey: true,
                defaultValue: '0',
                comment: '是否终身有效，0 否，1 是' },
            start_time:
            { type: 'datetime',
                primaryKey: true,
                defaultValue: null,
                comment: '有效期开始时间' },
            end_time:
            { type: 'datetime',
                primaryKey: true,
                defaultValue: null,
                comment: '有效期结束时间' },
            supervise_type:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: null,
                comment: '监管分类' },
            product_type:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: null,
                comment: '产品类型' },
            style:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: null,
                comment: '产品口径：团单，个单，团个单，开口保单' },
            settlement_vendor_id:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: null,
                comment: '产品结算供应商id：存在跟总公司结算' },
            order_monitor:
            { type: 'text',
                primaryKey: true,
                defaultValue: null,
                comment: '针对内部人员，出单通知监控：通知列表（短信、邮箱、内部企业号微信）' },
            ensure_request:
            { type: 'text',
                primaryKey: true,
                defaultValue: null,
                comment: '产品内容（JSON），保障类容，条款' },
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
                comment: '是否有效（1有效；0无效）' },
            core_product_infocol:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: null,
                comment: '' },
            is_private:
            { type: 'tinyint',
                primaryKey: true,
                defaultValue: '0',
                comment: '是否对个人客户隐私' } }, {
        'tableName': 'core_product_info',
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
    return core_product_info;
};