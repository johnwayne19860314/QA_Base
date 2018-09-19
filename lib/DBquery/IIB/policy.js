"use strict";

module.exports = function(sequelize, DataTypes) {
  var iib_policy = sequelize.define("Policy", {
      id:{type:DataTypes.STRING, defaultValue: DataTypes.UUIDV1,primaryKey: true,comment: "id" },
      appid:{type: DataTypes.STRING,comment: "appid" },
      order_id:{type: DataTypes.STRING,comment: "order_id" },
      product_id:{type: DataTypes.STRING,comment: "product_id" },
      request_id:{type: DataTypes.STRING,comment: "request_id" },
      policy_no:{type: DataTypes.STRING,comment: "policy_no" },
      request:{type: DataTypes.TEXT,comment: "request" },
      card_id:{type: DataTypes.STRING,comment: "证件号" },
      name:{type: DataTypes.STRING,comment: "姓名" },
      phone:{type: DataTypes.STRING,comment: "手机号" },
      total:{type: DataTypes.INTEGER,comment: "金额（单位/分）" },
      rate:{type: DataTypes.INTEGER,comment: "费率" },
      policy_effect:{type: DataTypes.DATE,comment: "生效时间" },
      policy_expire:{type: DataTypes.DATE,comment: "失效时间" },
      cancel_date:{type: DataTypes.DATE,comment: "退保时间" },
      status:{type: DataTypes.STRING,defaultValue: "",comment: "状态" },
      valid:{type: DataTypes.INTEGER,defaultValue: 1,comment: "是否删除" },
  }, {
    tableName: 'iib_policy',
  });  
  return iib_policy;
};