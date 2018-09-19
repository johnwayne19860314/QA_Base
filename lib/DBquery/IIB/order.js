"use strict";

module.exports = function(sequelize, DataTypes) {
  var iib_order = sequelize.define("Order", {
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
      request_times:{type: DataTypes.INTEGER,defaultValue: 0,comment: "请求次数" },
      callback_times:{type: DataTypes.INTEGER,defaultValue: 0,comment: "出单回调请求次数（第三方）" },
      policy_callback_times:{type: DataTypes.INTEGER,defaultValue: 0,comment: "出单回调请求次数（第三方）" },
      policy_callback_status:{type: DataTypes.STRING,comment: "回调状态（回调成功，回调失败）" },
      policy_callback_url:{type: DataTypes.STRING,comment: "第三方保单回调地址" },
      type:{type: DataTypes.STRING,comment: "类型（出单，修改，取消）" },
      remark:{type: DataTypes.STRING,defaultValue: "",comment: "备注" },
      cancel_date:{type: DataTypes.DATE,comment: "退保时间" },
      status:{type: DataTypes.STRING,defaultValue: "",comment: "订单状态(已出保，待出保，出保失败)" },
      valid:{type: DataTypes.INTEGER,defaultValue: 1,comment: "是否删除" },
  }, {
    tableName: 'iib_order',
  });  
  return iib_order;
};