/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var t_yb_product_info = sequelize.define("t_yb_product_info", { id:
    { type: 'varchar',
        primaryKey: true,
        defaultValue: null,
        comment: '主键ID' },
        name:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '产品名称' },
        code:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '产品代码' },
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
        company:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '保险产品所属保险公司' },
        default_rate:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '产品渠道的默认分佣比例' },
        e_cert:
        { type: 'char',
            primaryKey: true,
            defaultValue: null,
            comment: '是否需要出电子凭证' },
        anyi_rate:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '安逸的经纪费比例' },
        product_type:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '产品类别' },
        tb_type:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '投保类型  0-用户端  1-渠道端    9-全部' },
        core_product_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '核心库中的产品ID' }  }, {
        'tableName': 't_yb_product_info',
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
    return t_yb_product_info;
};