"use strict";

module.exports = function(sequelize, DataTypes) {
  var iib_product = sequelize.define("Product", {
      id:{type:DataTypes.STRING, primaryKey: true,comment: "id" },
      appid:{type: DataTypes.STRING,defaultValue: "",comment: "appid" },
      product_id:{type: DataTypes.STRING,defaultValue: "",comment: "product_id" },
      name:{type: DataTypes.STRING,defaultValue: "",comment: "name" },
      code:{type: DataTypes.STRING,defaultValue: "",comment: "产品编码" },
      dealData_way:{type: DataTypes.STRING,defaultValue: "",comment: "数据处理方式（数据整合，原始数据）" },
      pay_way:{type: DataTypes.STRING,defaultValue: "",comment: "支付方式（预付款，线下支付）" },
      business_way:{type: DataTypes.STRING,defaultValue: "",comment: "业务方式（邮箱投保，核心投保）" },
      interferce:{type: DataTypes.STRING,defaultValue: "",comment: "数据处理路径名称" },
      vendor_id:{type: DataTypes.STRING,defaultValue: "",comment: "供应商id" },
      start_time:{type: DataTypes.DATE,comment: "开始时间" },
      end_time:{type: DataTypes.DATE,comment: "有效期结束时间" },
      systemUser_id:{type: DataTypes.STRING,comment: "system_id" },
      status:{type: DataTypes.STRING,defaultValue: "正常",comment: "状态"},
      valid:{type: DataTypes.INTEGER,defaultValue: 1,comment: "是否删除" },
  }, {
    tableName: 'iib_product',
  });  
  return iib_product;
};