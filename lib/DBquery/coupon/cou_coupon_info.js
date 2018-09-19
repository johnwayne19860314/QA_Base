/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var cou_coupon_info = sequelize.define("cou_coupon_info",
        { id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '主键ID' },
            order_id:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: null,
                comment: '订单id：由订单创建卡号' },
            card_name:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: null,
                comment: '卡名称' },
            card_number:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: null,
                comment: '卡号' },
            card_password:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: null,
                comment: '密码' },
            sales_type:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: null,
                comment: '销售类型：线上销售、线下销售' },
            card_type:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: null,
                comment: '卡类型：预约体检一' },
            status:
            { type: 'varchar',
                primaryKey: true,
                defaultValue: null,
                comment: '状态：待激活、已激活、已失效' },
            effective_time:
            { type: 'datetime',
                primaryKey: true,
                defaultValue: null,
                comment: '开始时间：最早可激活使用的时间' },
            failure_time:
            { type: 'datetime',
                primaryKey: true,
                defaultValue: null,
                comment: '过期时间：最后可激活的时间' },
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
        'tableName': 'cou_coupon_info',
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
    return cou_coupon_info;
};