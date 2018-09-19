/**
 *  苏宁 -电器安装初始化数据
 */
module.exports = function(sequelize, DataTypes) {
    var i_pingan_appliance_install_init_data = sequelize.define("i_pingan_appliance_install_init_data", {
        area_code:{type: DataTypes.STRING, defaultValue: "",comment: "大区号" },
        sign_name:{type: DataTypes.STRING, defaultValue: "",comment: "签约公司名称" },
        company_name:{type: DataTypes.STRING, defaultValue: "",comment: "公司名称/服务商名称" },
        supplier_code:{type: DataTypes.STRING, defaultValue: "",comment: "供应商编码" },
        bp_code:{type: DataTypes.STRING, defaultValue: "",comment: "BP号" },
        card_id:{type: DataTypes.STRING, defaultValue: "",comment: "纳税人识别号/统一社会信用代码" },
        contact_name:{type: DataTypes.STRING, defaultValue: "",comment: "服务商负责人姓名" },
        phone:{type: DataTypes.STRING, defaultValue: "",comment: "负责人手机号码" },
        email:{type: DataTypes.STRING, defaultValue: "",comment: "公司名称/服务商名称" },
        email_2:{type: DataTypes.STRING, defaultValue: "",comment: "电子发票邮箱" },
        email_3:{type: DataTypes.STRING, defaultValue: "",comment: "电子保单邮箱" },
        address:{type: DataTypes.STRING, defaultValue: "",comment: "通信地址" },
        order_id:{type: DataTypes.STRING, defaultValue: "",comment: "订单号" },
        policy_no:{type: DataTypes.STRING, defaultValue: "",comment: "保单号" },
        service_type:{type: DataTypes.STRING, defaultValue: "",comment: "方案类型" },
        service_type_flag:{type: DataTypes.STRING, defaultValue: "",comment: "雇主责任 方案类型参保说明" },
        fix_type:{type: DataTypes.STRING, defaultValue: "",comment: "安维责任、安装维修责任保险  Y:参保  N:不参保" },
        install:{type: DataTypes.STRING, defaultValue: "",comment: "空调安装量" },
        fix:{type: DataTypes.STRING, defaultValue: "",comment: "维修量" },
        total_price:{type: DataTypes.STRING, defaultValue: "",comment: "总价格" },
        surplus_price:{type: DataTypes.STRING, defaultValue: "",comment: "剩余金额" },
        use_price:{type: DataTypes.STRING, defaultValue: "",comment: "使用金额" },
        created_time:{type: DataTypes.DATE,comment: "创建时间" },
        created_id:{type: DataTypes.STRING,defaultValue: "",comment: "创建人" },
        update_time:{type: DataTypes.DATE,comment: "更新时间" },
        update_id:{type: DataTypes.STRING,defaultValue: "",comment: "更新人" },
        valid:{type: DataTypes.INTEGER,defaultValue: 1,comment: "是否有效（1有效；0无效）" }
    }, {
        'tableName': 'i_pingan_appliance_install_init_data',
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
    return i_pingan_appliance_install_init_data;
};