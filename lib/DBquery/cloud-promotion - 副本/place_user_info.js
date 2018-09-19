"use strict";

module.exports = function(sequelize, DataTypes) {
    var place_user_info = sequelize.define("place_user_info", {
        id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '用户id：如果使用了sso系统，请保持sso系统的user_id' },
        openid:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '微信openid' },
        user_role:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '用户身份：普通用户（U1-U10）、运营人员（M1-M10）、销售人员（S1-S10）；多重身份用|线条分割' },
        name:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '姓名' },
        idcard:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '证件号码' },
        idtype:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '证件类型：身份证、护照、驾驶证' },
        is_certify:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '是否认证：未认证、审核中、已认证、驳回' },
        account:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '账号' },
        password:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '密码' },
        telephone:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '联系电话' },
        email:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '邮箱' },
        lock_status:
        { type: 'char',
            primaryKey: true,
            defaultValue: null,
            comment: '锁定状态 0-非锁定 1-锁定' },
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
        created_id:
        { type: 'varchar',
            primaryKey: true,
            defaultValue: null,
            comment: '创建者' },
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
            defaultValue: null,
            comment: '是否有效（1有效；0无效）' }
    }, {
        tableName: 'place_user_info',
        'timestamps': false,
    });
    return place_user_info;
};

