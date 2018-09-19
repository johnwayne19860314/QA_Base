"use strict";
module.exports = function(sequelize, DataTypes) {
    var suning_order = sequelize.define("suning_order", {
        id:{type:DataTypes.STRING, primaryKey: true,defaultValue: DataTypes.UUIDV1,comment: "主键" },
        appid:{type: DataTypes.STRING,defaultValue: "" ,comment: "渠道号" },
        product_code :{type: DataTypes.STRING,defaultValue: "" ,comment: "产品id" },
        request_id:{type: DataTypes.STRING,defaultValue: "" ,comment: "请求id" },
        request:{type: DataTypes.TEXT,defaultValue: "" ,comment: "请求内容" },
        confirm_result:{type: DataTypes.TEXT,defaultValue: "" ,comment: "确认投保返回结果"},
        confirm_info:{type: DataTypes.TEXT,defaultValue: "" ,comment: "确认投保数据"},
        status:{type: DataTypes.STRING,defaultValue: "toverify" ,comment: "订单状态:toverify待核保,verify已核保,verify_fail核保失败,topay待支付,payed已支付,toorder待出单,success已出单,fail出单失败,cancel取消" },
        order_amount:{type: DataTypes.INTEGER,comment: "订单金额单位：分" },
        suning_order_id:{type: DataTypes.STRING,defaultValue: "",comment: "订单号" },
        area_code:{type: DataTypes.STRING, defaultValue: "",comment: "大区号" },
        supplier_code:{type: DataTypes.STRING, defaultValue: "",comment: "供应商编码" },
        bp_code:{type: DataTypes.STRING,comment: "bp号" },
        company_name:{type: DataTypes.STRING,comment: "供应商名称" },
        insure_type:{type: DataTypes.STRING,defaultValue: "1",comment: "投保类型 1:正常投保   2:补缴   3:翻年 " },
        policy_time:{type: DataTypes.DATE,comment: "出保时间" },
        deal_time:{type: DataTypes.DATE,comment: "处理时间" },
        pay_time:{type: DataTypes.DATE,comment: "支付时间" },
        remark:{type: DataTypes.STRING,defaultValue: "",comment: "备注信息" },
        created_time:{type: DataTypes.DATE,comment: "创建时间" },
        created_id:{type: DataTypes.STRING,defaultValue: "",comment: "创建人" },
        update_time:{type: DataTypes.DATE,comment: "更新时间" },
        update_id:{type: DataTypes.STRING,defaultValue: "",comment: "更新人" },
        valid:{type: DataTypes.INTEGER,defaultValue: 1,comment: "是否有效（1有效；0无效）" },
    }, {
        'tableName': 'suning_order',
      //  'freezeTableName': true,
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
    return suning_order;
};