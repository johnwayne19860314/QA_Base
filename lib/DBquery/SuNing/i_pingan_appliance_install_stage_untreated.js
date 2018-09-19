/**
 *  苏宁 电器安装-供应商记录表（平安）
 */
module.exports = function(sequelize, DataTypes) {
    var i_pingan_appliance_install_stage_untreated = sequelize.define("i_pingan_appliance_install_stage_untreated", {
        id:{type:DataTypes.STRING, primaryKey: true,defaultValue: DataTypes.UUIDV1,comment: "主键" },
        stage_no:{type: DataTypes.STRING,defaultValue: "",comment: "阶段编码" },
        supplier_code:{type: DataTypes.STRING, defaultValue: "",comment: "供应商编码" },
        area_code:{type: DataTypes.STRING, defaultValue: "",comment: "大区号" },
        bp_code:{type: DataTypes.STRING,defaultValue: "",comment: "bp号" },
        dispatch:{type: DataTypes.INTEGER,defaultValue: "",comment: "派工量" },
        install:{type: DataTypes.INTEGER,defaultValue: "",comment: "空调安装量" },
        status:{type: DataTypes.STRING, defaultValue: "wait",comment: "success发送成功,cancel取消,wait:等待发送" },
        created_time:{type: DataTypes.DATE,comment: "创建时间" },
        created_id:{type: DataTypes.STRING,defaultValue: "",comment: "创建人" },
        update_time:{type: DataTypes.DATE,comment: "更新时间" },
        update_id:{type: DataTypes.STRING,defaultValue: "",comment: "更新人" },
        valid:{type: DataTypes.INTEGER,defaultValue: 1,comment: "是否有效（1有效；0无效）" }
    }, {
        'tableName': 'i_pingan_appliance_install_stage_untreated',
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
    return i_pingan_appliance_install_stage_untreated;
};