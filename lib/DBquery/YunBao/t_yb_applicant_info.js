

/**
 * Created by Anyi-tech on 2017/9/14.
 */
/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var t_yb_applicant_info = sequelize.define("t_yb_applicant_info", { id:
    { type: 'varchar',
        primaryKey: true,
        defaultValue: null,
        comment: '主键ID' },
        cert_no:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '凭证号' },
        type:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '投保人类型 1- 个人 2- 企业 3- 个体工商户' },
        biz_name:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '投保机构名称' },
        biz_no:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '企业证号' },
        contact_name:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '联系人姓名' },
        contact_telephone:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '联系人手机号码' },
        contact_idcard:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '联系人身份证号' },
        contact_email:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '联系人邮箱' },
        sf_bb_yz:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '被保信息是否和投保一样   1-一样   0-不一样' },
        bb_type:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '被保机构类型' },
        bb_biz_name:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '被保机构名称' },
        bb_contact_name:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '被保联系人' },
        bb_contact_telephone:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '被保联系人电话' },
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
        order_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '订单号' } }, {
        'tableName': 't_yb_applicant_info',
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
    return t_yb_applicant_info;
};