/**
 *  苏宁 电器安装-阶段统计（平安）
 */
module.exports = function(sequelize, DataTypes) {
    var i_pingan_appliance_install_stage_statistics = sequelize.define("i_pingan_appliance_install_stage_statistics", {
        id:{type:DataTypes.STRING, primaryKey: true,defaultValue: DataTypes.UUIDV1,comment: "主键" },
        supplier_id:{type: DataTypes.STRING,defaultValue: "",comment: "供应ID" },
        insure_plan_id:{type: DataTypes.STRING,defaultValue: "",comment: "投保方案ID" },
        year:{type: DataTypes.STRING,defaultValue: "",comment: "年份" },
        stage_no:{type: DataTypes.STRING,defaultValue: "",comment: "阶段编码" },
        policy_no:{type: DataTypes.STRING,defaultValue: "0",comment: "保单号多个按逗号分隔" },
        year_dispatch:{type: DataTypes.INTEGER,defaultValue: "",comment: "年度派工量" },
        year_install:{type: DataTypes.INTEGER,defaultValue: "",comment: "年度空调安装量" },
        year_fix:{type: DataTypes.INTEGER,defaultValue: "",comment: "年度维修量" },
        year_use_price:{type: DataTypes.INTEGER,defaultValue: "0",comment: "年度使用金额" },
        dispatch:{type: DataTypes.INTEGER,defaultValue: "",comment: "派工量" },
        install:{type: DataTypes.INTEGER,defaultValue: "",comment: "空调安装量" },
        fix:{type: DataTypes.INTEGER,defaultValue: "",comment: "维修量" },
        surplus_price:{type: DataTypes.INTEGER,defaultValue: "0",comment: "剩余金额" },
        use_price:{type: DataTypes.INTEGER,defaultValue: "0",comment: "使用金额" },
        status:{type: DataTypes.STRING,defaultValue: "normal",comment: "状态 normal 成功 fail:失败  cancel:取消"},
        created_time:{type: DataTypes.DATE,comment: "创建时间" },
        created_id:{type: DataTypes.STRING,defaultValue: "",comment: "创建人" },
        update_time:{type: DataTypes.DATE,comment: "更新时间" },
        update_id:{type: DataTypes.STRING,defaultValue: "",comment: "更新人" },
        valid:{type: DataTypes.INTEGER,defaultValue: 1,comment: "是否有效（1有效；0无效）" }
    }, {
        'tableName': 'i_pingan_appliance_install_stage_statistics',
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
    return i_pingan_appliance_install_stage_statistics;
};