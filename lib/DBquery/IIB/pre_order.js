"use strict";

module.exports = function(sequelize, DataTypes) {
  var iib_pre_order = sequelize.define("PreOrder", {
      id:{type:DataTypes.STRING, defaultValue: DataTypes.UUIDV1,primaryKey: true,comment: "id" },
      appid:{type: DataTypes.STRING,comment: "appid" },
      order_id:{type: DataTypes.STRING,comment: "order_id" },
      product_id:{type: DataTypes.STRING,comment: "product_id" },
      request_id:{type: DataTypes.STRING,comment: "request_id" },
      request:{type: DataTypes.TEXT,comment: "request" },
      card_id:{type: DataTypes.STRING,comment: "证件号" },
      name:{type: DataTypes.STRING,comment: "姓名" },
      phone:{type: DataTypes.STRING,comment: "手机号" },
      total:{type: DataTypes.INTEGER,comment: "金额（单位/分）" },
      rate:{type: DataTypes.INTEGER,comment: "费率" },
      start_time:{type: DataTypes.DATE,comment: "开始时间" },
      end_time:{type: DataTypes.DATE,comment: "结束时间" },
      type:{type: DataTypes.STRING,comment: "类型（开始，结束）" },
      status:{type: DataTypes.STRING,defaultValue: "正常",comment: "状态" },
      valid:{type: DataTypes.INTEGER,defaultValue: 1,comment: "是否删除" },
  }, {
    tableName: 'iib_pre_order',
  });  
  return iib_pre_order;
};