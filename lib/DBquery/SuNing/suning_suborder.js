/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var suning_suborder = sequelize.define("suning_suborder", {
        id:{type:DataTypes.STRING, primaryKey: true,defaultValue: DataTypes.UUIDV1,comment: "主键" },
        appid:{type: DataTypes.STRING,defaultValue: "" ,comment: "渠道号" },
        product_code :{type: DataTypes.STRING,defaultValue: "" ,comment: "产品id" },
        request_id:{type: DataTypes.STRING,defaultValue: "" ,comment: "请求id" },
        core_order_id :{type: DataTypes.STRING,defaultValue: "" ,comment: "核心订单ID" },
        order_id:{type: DataTypes.STRING,defaultValue: "" ,comment: "总订单ID" },
        status:{type: DataTypes.STRING,defaultValue: "toverify" ,comment: "订单状态:toverify待核保,verify已核保,verify_fail核保失败,topay待支付,payed已支付,toorder待出单,success已出单,fail出单失败,cancel取消" },
        order_amount:{type: DataTypes.INTEGER,comment: "订单金额单位：分" },
        request_info:{type: DataTypes.TEXT,defaultValue: "" ,comment: "请求数据" },
        request_result:{type: DataTypes.TEXT,defaultValue: "" ,comment: "请求结果" },
        confirm_info:{type: DataTypes.TEXT,defaultValue: "" ,comment: "确认投保请求数据" },
        confirm_result:{type: DataTypes.TEXT,defaultValue: "" ,comment: "确认投保结果" },
        policy_info:{type: DataTypes.TEXT,defaultValue: "" ,comment: "保单信息" },
        extend_01:{type: DataTypes.STRING,defaultValue: "" ,comment: "扩展字段1" },
        extend_02:{type: DataTypes.STRING,defaultValue: "" ,comment: "扩展字段2" },
        extend_03:{type: DataTypes.STRING,defaultValue: "" ,comment: "扩展字段3" },
        created_time:{type: DataTypes.DATE,comment: "创建时间" },
        created_id:{type: DataTypes.STRING,defaultValue: "",comment: "创建人" },
        update_time:{type: DataTypes.DATE,comment: "更新时间" },
        update_id:{type: DataTypes.STRING,defaultValue: "",comment: "更新人" },
        valid:{type: DataTypes.INTEGER,defaultValue: 1,comment: "是否有效（1有效；0无效）" },
    }, {
        'tableName': 'suning_suborder',
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
    return suning_suborder;
};