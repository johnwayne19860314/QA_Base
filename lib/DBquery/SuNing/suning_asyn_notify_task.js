/**
 * 苏宁异步通知任务表
 * @param sequelize
 * @param DataTypes
 * @return {*|{}|Model}
 */
module.exports = function(sequelize, DataTypes) {
    var suning_asyn_notify_task = sequelize.define("suning_asyn_notify_task", {
        id:{type:DataTypes.STRING, primaryKey: true,defaultValue: DataTypes.UUIDV1,comment: "主键" },
        appid:{type: DataTypes.STRING,defaultValue: "",comment: "渠道号" },
        product_code:{type: DataTypes.STRING,defaultValue: "",comment: "产品id" },
        request_id :{type: DataTypes.STRING,defaultValue: "" ,comment: "请求号" },
        order_id :{type: DataTypes.STRING,defaultValue: "" ,comment: "订单ID" },
        notify_url:{type: DataTypes.STRING, defaultValue: "",comment: "通知url" },
        notify_data:{type: DataTypes.TEXT,comment: "通知数据" },
        data_info:{type: DataTypes.TEXT,comment: "返回结果中data详细内容" },
        res_data:{type: DataTypes.TEXT,comment: "响应结果" },
        task_num:{type: DataTypes.INTEGER,defaultValue: "",comment: "执行次数" },
        task_type:{type: DataTypes.STRING, defaultValue: "json",comment: "任务类型 json:按json 返回和接收" },
        description:{type: DataTypes.STRING,comment: "执行说明" },
        status:{type: DataTypes.STRING,defaultValue: "wait",comment: "success执行成功,fail执行失败,cancel取消,wait:等待执行"},
        created_time:{type: DataTypes.DATE,comment: "创建时间" },
        created_id:{type: DataTypes.STRING,defaultValue: "",comment: "创建人" },
        update_time:{type: DataTypes.DATE,comment: "更新时间" },
        update_id:{type: DataTypes.STRING,defaultValue: "",comment: "更新人" },
        valid:{type: DataTypes.INTEGER,defaultValue: 1,comment: "是否有效（1有效；0无效）" }
    }, {
        'tableName': 'suning_asyn_notify_task',
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
    return suning_asyn_notify_task;
};