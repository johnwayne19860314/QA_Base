"use strict";

module.exports = function(sequelize, DataTypes) {
    var cloud_people_info = sequelize.define("cloud_people_info", {
        id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '主键ID' },
        cert_no:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '凭证号' },
        order_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '订单id' },
        order_people_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '订单人员id' },
        name:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '姓名' },
        post:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '岗位' },
        id_card:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '身份证号' },
        birthday:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '出生日期' },
        sex:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '性别' },
        telephone:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '手机号码' },
        email:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '邮箱地址' },
        status:
        { type: 'char',
            primaryKey: true,
            defaultValue: null,
            comment: '状态' },
        type:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '类别' },
        relation:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '关系' },
        id_type:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '证件类型' },
        id_no:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '证件号码' },
        beneficiary:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '受益人' },
        cert_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '凭证ID' },
        applicant:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '投保人' },
        content:
        { type: 'text',
            primaryKey: true,
            defaultValue: null,
            comment: '人员全部信息json' },
        remark:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '备注' },
        created_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '创建时间' },
        created_at:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '创建人' },
        created_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '创建者' },
        update_at:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '更新人' },
        update_time:
        { type: 'datetime',
            primaryKey: true,
            defaultValue: null,
            comment: '更新时间' },
        update_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '更新者' },
        valid:
        { type: 'tinyint',
            primaryKey: true,
            defaultValue: '1',
            comment: '是否有效（1有效；0无效）' }
    }, {
        tableName: 'cloud_people_info',
'timestamps': false,
    });
    return cloud_people_info;
};

