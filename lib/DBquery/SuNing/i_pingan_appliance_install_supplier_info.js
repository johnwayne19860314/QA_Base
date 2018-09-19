/**
 *  苏宁 电器安装-供应商记录表（平安）
 */
module.exports = function(sequelize, DataTypes) {
    var i_pingan_appliance_install_supplier_info = sequelize.define("i_pingan_appliance_install_supplier_info", {
        id:{type:DataTypes.STRING, primaryKey: true,defaultValue: DataTypes.UUIDV1,comment: "主键" },
        appid:{type: DataTypes.STRING,defaultValue: "",comment: "渠道号" },
        request_id:{type: DataTypes.STRING,defaultValue: "",comment: "请求ID" },
        suning_order_id:{type: DataTypes.STRING,defaultValue: "",comment: "苏宁订单号" },
        stage_statistics_id:{type: DataTypes.STRING,defaultValue: "",comment: "分期（批次）统计ID" },
        product_code :{type: DataTypes.STRING,defaultValue: "" ,comment: "产品号" },
        company_name:{type: DataTypes.STRING,defaultValue: "",comment: "公司名称" },
        supplier_code:{type: DataTypes.STRING, defaultValue: "",comment: "供应商编码" },
        area_code:{type: DataTypes.STRING, defaultValue: "",comment: "大区号" },
        bp_code:{type: DataTypes.STRING,defaultValue: "",comment: "bp号" },
        contact_name:{type: DataTypes.STRING,defaultValue: "",comment: "联系人名称" },
        phone:{type: DataTypes.STRING,defaultValue: "",comment: "联系号码" },
        email:{type: DataTypes.STRING,defaultValue: "",comment: "邮箱" },
        card_id:{type: DataTypes.STRING,defaultValue: "",comment: "证件号" },
        total_price:{type: DataTypes.INTEGER,defaultValue: "0",comment: "总金额（单位/分）" },
        surplus_price:{type: DataTypes.INTEGER,defaultValue: "0",comment: "剩余金额（单位/分）" },
        policy_no:{type: DataTypes.STRING,defaultValue: "",comment: "保单号多个按逗号分隔" },
        status:{type: DataTypes.STRING, defaultValue: "normal",comment: "状态  normal:正常  warning:警告  stop:停工" },
        warning_time:{type: DataTypes.STRING, defaultValue: "",comment: "警告时间" },
        created_time:{type: DataTypes.DATE,comment: "创建时间" },
        created_id:{type: DataTypes.STRING,defaultValue: "",comment: "创建人" },
        update_time:{type: DataTypes.DATE,comment: "更新时间" },
        update_id:{type: DataTypes.STRING,defaultValue: "",comment: "更新人" },
        valid:{type: DataTypes.INTEGER,defaultValue: 1,comment: "是否有效（1有效；0无效）" }
    }, {
        'tableName': 'i_pingan_appliance_install_supplier_info',
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
    return i_pingan_appliance_install_supplier_info;
};