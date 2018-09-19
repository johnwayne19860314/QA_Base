
/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var t_yb_app_product_relation = sequelize.define("t_yb_app_product_relation", { id:
    { type: 'varchar',
        primaryKey: true,
        defaultValue: null,
        comment: '主键ID' },
        product_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '产品ID' },
        app_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '渠道ID' },
        url:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '链接地址' },
        status:
        { type: 'char',
            primaryKey: true,
            defaultValue: null,
            comment: '状态   1-有效   0-无效' },
        cjr:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '创建人' },
        cjr_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '创建人ID' },
        cj_rq:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '创建日期' },
        gxr:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '更新人' },
        gxr_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '更新人ID' },
        gx_rq:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '更新时间' },
        description:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '描述' },
        package_code:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '保险产品所在的产品包代码' },
        rate:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '产品渠道的分佣比例' },
        pay_tpe:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '产品的支付方式 1-净费  2-非净费' } }, {
        'tableName': 't_yb_app_product_relation',
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
    return t_yb_app_product_relation;
};