/**
 *  苏宁保单表
 */
module.exports = function(sequelize, DataTypes) {
    var suning_email_task = sequelize.define("suning_email_task", {
        id:{type:DataTypes.STRING, primaryKey: true,defaultValue: DataTypes.UUIDV1,comment: "主键" },
        subject:{type: DataTypes.STRING,defaultValue: "",comment: "标题" },
        to :{type: DataTypes.STRING,defaultValue: "" ,comment: "邮件接收人（多人通过;分隔）" },
        cc:{type: DataTypes.STRING, defaultValue: "",comment: "抄送人（多人通过;分隔）" },
        data_info:{type: DataTypes.TEXT,comment: "邮件内容" },
        res_data:{type: DataTypes.TEXT,comment: "响应结果" },
        task_num:{type: DataTypes.INTEGER,defaultValue: "0",comment: "执行次数" },
        task_type:{type: DataTypes.STRING, defaultValue: "json",comment: "任务类型 json:按json 返回和接收" },
        description:{type: DataTypes.STRING,comment: "执行说明" },
        status:{type: DataTypes.STRING,defaultValue: "wait",comment: "success执行成功,fail执行失败,cancel取消,wait:等待执行"},
        is_attachments:{type: DataTypes.INTEGER,defaultValue: 1,comment: "是否发送附件" },
        created_time:{type: DataTypes.DATE,comment: "创建时间" },
        created_id:{type: DataTypes.STRING,defaultValue: "",comment: "创建人" },
        update_time:{type: DataTypes.DATE,comment: "更新时间" },
        update_id:{type: DataTypes.STRING,defaultValue: "",comment: "更新人" },
        valid:{type: DataTypes.INTEGER,defaultValue: 1,comment: "是否有效（1有效；0无效）" }
    }, {
        'tableName': 'suning_email_task',
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
    return suning_email_task;
};