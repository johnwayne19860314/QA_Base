"use strict";

module.exports = function(sequelize, DataTypes) {
    var iib_systemUser = sequelize.define("SystemUser", {
        id:{type:DataTypes.STRING, primaryKey: true,comment: "id" },
        userName:{type: DataTypes.STRING,comment: "userName" },
        password:{type: DataTypes.STRING,comment: "password" },
        name:{type: DataTypes.STRING,comment: "name" },
        email:{type: DataTypes.STRING,comment: "邮箱" },
        phone:{type: DataTypes.STRING,comment: "手机号" },
        status:{type: DataTypes.STRING,defaultValue: "正常",comment: "状态" },
        valid:{type: DataTypes.INTEGER,defaultValue: 1,comment: "是否删除" },
    }, {
        tableName: 'iib_systemUser',
    });
    return iib_systemUser;
};

