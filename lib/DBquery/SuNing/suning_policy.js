/**
 *  苏宁保单信息
 */

module.exports = function(sequelize, DataTypes) {

    var suning_policy = sequelize.define("suning_policy", {
        id:{type:DataTypes.STRING, primaryKey: true,defaultValue: DataTypes.UUIDV1,comment: "主键" },
        request_id:{type: DataTypes.STRING,defaultValue: "",comment: "请求ID" },
        suning_order_id:{type: DataTypes.STRING,defaultValue: "",comment: "苏宁订单号" },
        order_id:{type: DataTypes.STRING,defaultValue: "",comment: "订单号" },
        product_code :{type: DataTypes.STRING,defaultValue: "" ,comment: "产品id" },
        area_code:{type: DataTypes.STRING, defaultValue: "",comment: "大区号" },
        supplier_code:{type: DataTypes.STRING, defaultValue: "",comment: "供应商编码" },
        bp_code:{type: DataTypes.STRING,defaultValue: "",comment: "bp号" },
        company_name:{type: DataTypes.STRING,comment: "保险公司名称" },
        policy_no:{type: DataTypes.STRING,defaultValue: "",comment: "保单号" },
        policy_info:{type: DataTypes.TEXT,defaultValue: "",comment: "保单信息" },
        order_amount:{type: DataTypes.INTEGER,comment: "订单金额（单位/分）" },
        invoice_type:{type: DataTypes.STRING,defaultValue: "0",comment: "发票类型" },
        invoice_info:{type: DataTypes.TEXT,defaultValue: "",comment: "发票信息" },
        start_time:{type: DataTypes.DATE,comment: "签约开始时间" },
        end_time:{type: DataTypes.DATE,comment: "签约结束时间" },
        effect:{type: DataTypes.DATE,comment: "保险起期" },
        expire:{type: DataTypes.DATE,comment: "保险终期" },
        status:{type: DataTypes.STRING,defaultValue: "success",comment: "状态 successs 成功 fail:失败  cancel:取消"},
        created_time:{type: DataTypes.DATE,comment: "创建时间" },
        created_id:{type: DataTypes.STRING,defaultValue: "",comment: "创建人" },
        update_time:{type: DataTypes.DATE,comment: "更新时间" },
        update_id:{type: DataTypes.STRING,defaultValue: "",comment: "更新人" },
        valid:{type: DataTypes.INTEGER,defaultValue: 1,comment: "是否有效（1有效；0无效）" }
    }, {
        'tableName': 'suning_policy',
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
    return suning_policy;
};