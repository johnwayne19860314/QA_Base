/**
 *  苏宁邮箱配置表
 */
module.exports = function(sequelize, DataTypes) {
    var suning_email = sequelize.define("suning_email", {
        id:{type:DataTypes.STRING, primaryKey: true,defaultValue: DataTypes.UUIDV1,comment: "主键" },
        description:{type: DataTypes.STRING,defaultValue: "",comment: "说明" },
        subject:{type: DataTypes.STRING,defaultValue: "",comment: "标题" },
        to :{type: DataTypes.STRING,defaultValue: "" ,comment: "邮件接收人（多人通过;分隔）" },
        cc:{type: DataTypes.STRING, defaultValue: "",comment: "抄送人（多人通过;分隔）" },
        text:{type: DataTypes.STRING, defaultValue: "",comment: "文本内容" },
        html:{type: DataTypes.TEXT, defaultValue: "",comment: "邮件格式内容" },
        is_attachments:{type: DataTypes.INTEGER,defaultValue: 1,comment: "是否发送附件" },
        remark:{type: DataTypes.STRING, defaultValue: "",comment: "备注信息" },
        created_time:{type: DataTypes.DATE,comment: "创建时间" },
        created_id:{type: DataTypes.STRING,defaultValue: "",comment: "创建人" },
        update_time:{type: DataTypes.DATE,comment: "更新时间" },
        update_id:{type: DataTypes.STRING,defaultValue: "",comment: "更新人" },
        valid:{type: DataTypes.INTEGER,defaultValue: 1,comment: "是否有效（1有效；0无效）" }
    }, {
        'tableName': 'suning_email',
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

    return suning_email;
};