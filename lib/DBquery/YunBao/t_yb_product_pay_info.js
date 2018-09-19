/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var t_yb_product_pay_info = sequelize.define("t_yb_product_pay_info", { id:
    { type: 'varchar',
        primaryKey: true,
        defaultValue: null,
        comment: '主键ID' },
        product_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '产品编码' },
        order_name:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        sub_order_name:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        charge_name:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        charge_account:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        payee_account:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        payment_type:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        payment_method:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        payment_scene:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        pay_notify_url:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        status:
        { type: 'char',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        pay_success_url:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        cj_rq:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        cjr:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        cjr_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        gx_rq:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        gxr:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        gxr_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' },
        description:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '' } }, {
        'tableName': 't_yb_product_pay_info',
        // 'freezeTableName': true,
        // 是否需要增加createdAt、updatedAt、deletedAt字段
        'timestamps': true,
        // 不需要createdAt字段
        'createdAt': 'cj_rq',
        // 将updatedAt字段改个名
        'updatedAt': 'gx_rq',
        // 将deletedAt字段改名
        // 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
        'deletedAt': false
    });
    return t_yb_product_pay_info;
};