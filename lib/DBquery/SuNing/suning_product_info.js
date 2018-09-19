/**
 * 苏宁订单拆分的子订单表
 *
 */
module.exports = function(sequelize, DataTypes) {
    var suning_product_info = sequelize.define("suning_product_info", {
        id:{type:DataTypes.STRING, primaryKey: true,defaultValue: DataTypes.UUIDV1,comment: "主键" },
        name:{type: DataTypes.STRING,defaultValue: "" ,comment: "渠道名称" },
        code:{type: DataTypes.STRING,defaultValue: "" ,comment: "产品代码" },
        passageway_code:{type: DataTypes.STRING,defaultValue: "" ,comment: "产品通道code" },
        product_valid:{type: DataTypes.INTEGER,defaultValue: 1,comment: "产品有效性 0 无效，1 有效" },
        start_time:{type: DataTypes.DATE,comment: "开始时间" },
        end_time:{type: DataTypes.DATE,comment: "结束时间" },
        remark:{type: DataTypes.STRING,defaultValue: "",comment: "备注信息" },
        created_time:{type: DataTypes.DATE,comment: "创建时间" },
        created_id:{type: DataTypes.STRING,defaultValue: "",comment: "创建人" },
        update_time:{type: DataTypes.DATE,comment: "更新时间" },
        update_id:{type: DataTypes.STRING,defaultValue: "",comment: "更新人" },
        valid:{type: DataTypes.INTEGER,defaultValue: 1,comment: "是否有效（1有效；0无效）" }
    }, {
        'tableName': 'suning_product_info',
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
    return suning_product_info;
};