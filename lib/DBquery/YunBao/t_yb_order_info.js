
/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var t_yb_order_info = sequelize.define("t_yb_order_info", { id:
    { type: 'varchar',
        primaryKey: true,
        defaultValue: null,
        comment: '主键ID' },
        app_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '渠道ID' },
        product_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '产品ID' },
        user_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '用户ID' },
        cert_no:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '凭证号' },
        type:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '订单类型 1-批增 2-批减 3-投保  4-批改' },
        price:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '价格' },
        gz_price:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '雇主责任险保费' },
        ay_yj:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '安逸佣金' },
        app_yj:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '渠道佣金' },
        employee_num:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '员工数量' },
        employee_fs:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '员工份数' },
        pay_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '支付时间' },
        operate_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '加减保生效时间' },
        content:
        { type: 'json',
            primaryKey: true,
            defaultValue: null,
            comment: '投保信息' },
        request_id:
        { type: 'text',
            primaryKey: true,
            defaultValue: null,
            comment: '请求ID' },
        order_status:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '订单状态 1-待支付   2-已支付   3-待处理    4-已处理' },
        insurance_status:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '保险公司状态   1-未确定    2-已确定    3-已回传' },
        status:
        { type: 'char',
            primaryKey: true,
            defaultValue: null,
            comment: '状态' },
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
        anyi_rate:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '安逸的佣金比例' },
        app_rate:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '渠道的佣金比例' },
        pay_price:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '实际支付价格' },
        cd_status:
        { type: 'char',
            primaryKey: true,
            defaultValue: '1',
            comment: '撤单状态 1-已出单 2-已撤单' },
        cdr:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '出单人' } }, {
        'tableName': 't_yb_order_info',
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
    return t_yb_order_info;
};