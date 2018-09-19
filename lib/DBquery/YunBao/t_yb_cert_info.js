/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var t_yb_cert_info = sequelize.define("t_yb_cert_info", { id:
    { type: 'varchar',
        primaryKey: true,
        defaultValue: null,
        comment: '主键ID' },
        cert_no:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '凭证号' },
        product_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '产品id' },
        user_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '用户ID' },
        app_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '渠道id' },
        start_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '起保时间' },
        end_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '结束时间' },
        price:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '总保费' },
        ay_yj:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '安逸总佣金' },
        app_yj:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '渠道总佣金' },
        employee_num:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '员工数量' },
        employee_fs:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '员工份数  1-1份，每人最高赔偿12万（含医疗住院费）   2-2份，每人最高赔偿22万（含医疗住院费）   3-3份，每人最高赔偿32万（含医疗住院费）   4-4份，每人最高赔偿42万（含医疗住院费）' },
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
        cdr:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '出单人' },
        order_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '订单ID' },
        parent_no:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '父级凭证号' },
        content:
        { type: 'json',
            primaryKey: true,
            defaultValue: null,
            comment: '投保信息' },
        pay_price:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '实际支付保费' },
        cd_status:
        { type: 'char',
            primaryKey: true,
            defaultValue: '1',
            comment: '1-已出单 2-已撤单 3-撤单失败' },
        cd_desc:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '撤单描述' } }, {
        'tableName': 't_yb_cert_info',
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
    return t_yb_cert_info;
};