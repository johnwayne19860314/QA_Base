"use strict";

module.exports = function(sequelize, DataTypes) {
  var iib_apps = sequelize.define("Apps", {
      id:{type:DataTypes.STRING, primaryKey: true,comment: "id" },
      securekey:{type: DataTypes.STRING,comment: "securekey" },
      name:{type: DataTypes.STRING,comment: "渠道名称" },
      linkman:{type: DataTypes.STRING,comment: "联系人" },
      email:{type: DataTypes.STRING,comment: "邮箱" },
      phone:{type: DataTypes.STRING,comment: "手机号" },
      rate:{type: DataTypes.INTEGER,comment: "费率" },
      province:{type: DataTypes.STRING,comment: "province" },
      city:{type: DataTypes.TEXT,comment: "city" },
      address:{type: DataTypes.TEXT,comment: "地址" },
      privateKey:{type: DataTypes.TEXT,comment: "RSA私钥" },
      publicKey:{type: DataTypes.TEXT,comment: "RSA公钥" },
      status:{type: DataTypes.STRING,defaultValue: "正常",comment: "状态(正常,禁用)" },
      valid:{type: DataTypes.INTEGER,defaultValue: 1,comment: "是否删除" },
  }, {
    tableName: 'iib_apps',
  });  
  return iib_apps;
};