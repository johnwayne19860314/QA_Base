/**
 * 手动执行sql记录表
 * @param sequelize
 * @param DataTypes
 * @return {*|{}|Model}
 */
module.exports = function(sequelize, DataTypes) {
    var log_hand_sql_execute = sequelize.define("log_hand_sql_execute", {
        id:{type:DataTypes.STRING, primaryKey: true,defaultValue: DataTypes.UUIDV1,comment: "主键" },
        sql:{type: DataTypes.STRING,defaultValue: "",comment: "sql语句" },
        sql_type:{type: DataTypes.STRING,defaultValue: "",comment: "SQL语句类型 SELECT：查询   INSERT:插入   UPDATE:更新" },
        encode :{type: DataTypes.STRING,defaultValue: "MD5" ,comment: "data加密方式" },
        execute_user:{type: DataTypes.STRING, defaultValue: "",comment: "执行人" },
        description:{type: DataTypes.STRING,comment: "执行说明" },
        sign:{type: DataTypes.STRING,defaultValue: "",comment: "签名" },
        version:{type: DataTypes.TEXT,defaultValue: "1.0",comment: "版本号" },
        execute_result:{type: DataTypes.TEXT,comment: "sql语句执行结果" },
        execute_err_msg:{type: DataTypes.STRING,defaultValue: "",comment: "执行语句错误说明" },
        status:{type: DataTypes.STRING,defaultValue: "success",comment: "状态  begin:开始  success: 执行成功 fail:执行失败"},
        created_time:{type: DataTypes.DATE,comment: "创建时间" },
        created_id:{type: DataTypes.STRING,defaultValue: "",comment: "创建人" },
        update_time:{type: DataTypes.DATE,comment: "更新时间" },
        update_id:{type: DataTypes.STRING,defaultValue: "",comment: "更新人" },
        valid:{type: DataTypes.INTEGER,defaultValue: 1,comment: "是否有效（1有效；0无效）" }
    }, {
        'tableName': 'log_hand_sql_execute',
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
    return log_hand_sql_execute;
};