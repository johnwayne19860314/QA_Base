/**
 *  苏宁 电器安装-供应商保单表（平安）
 */
module.exports = function(sequelize, DataTypes) {
    var i_pingan_appliance_install_supplier_policy = sequelize.define("i_pingan_appliance_install_supplier_policy", {
        id:{type:DataTypes.STRING, primaryKey: true,defaultValue: DataTypes.UUIDV1,comment: "主键" },
        supplier_id:{type: DataTypes.STRING,defaultValue: "",comment: "供应ID" },
        insure_plan_id:{type: DataTypes.STRING,defaultValue: "",comment: "投保方案ID" },
        year:{type: DataTypes.STRING,defaultValue: "",comment: "年份" },
        request_id:{type: DataTypes.STRING,defaultValue: "",comment: "请求ID" },
        suning_order_id:{type: DataTypes.STRING,defaultValue: "",comment: "苏宁订单号" },
        policy_no:{type: DataTypes.STRING,defaultValue: "",comment: "保单号" },
        policy_info:{type: DataTypes.TEXT,defaultValue: "",comment: "保单信息" },
        invoice_type:{type: DataTypes.STRING,defaultValue: "0",comment: "发票类型" },
        invoice_info:{type: DataTypes.TEXT,defaultValue: "",comment: "发票信息" },
        order_amount:{type: DataTypes.INTEGER,defaultValue: "0",comment: "订单金额（单位/分）" },
        surplus_price:{type: DataTypes.INTEGER,defaultValue: "0",comment: "余额（单位/分）" },
        use_price:{type: DataTypes.INTEGER,defaultValue: "0",comment: "使用金额（单位/分）" },
        premium:{type: DataTypes.INTEGER,defaultValue: "0",comment: "保费（单位/分 投保时使用订单金额、翻年时使用余额)）" },
        status:{type: DataTypes.STRING,defaultValue: "success",comment: "状态 successs 成功 fail:失败  cancel:取消"},
        notice:{type: DataTypes.STRING,defaultValue: "0",comment: "通知 1已通知  0:未必通知"},
        effect:{type: DataTypes.DATE,comment: "保险起期" },
        expire:{type: DataTypes.DATE,comment: "保险终期" },
        created_time:{type: DataTypes.DATE,comment: "创建时间" },
        created_id:{type: DataTypes.STRING,defaultValue: "",comment: "创建人" },
        update_time:{type: DataTypes.DATE,comment: "更新时间" },
        update_id:{type: DataTypes.STRING,defaultValue: "",comment: "更新人" },
        valid:{type: DataTypes.INTEGER,defaultValue: 1,comment: "是否有效（1有效；0无效）" }
    }, {
        'tableName': 'i_pingan_appliance_install_supplier_policy',
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
    return i_pingan_appliance_install_supplier_policy;
};