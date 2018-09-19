module.exports = exports = function (sequelize, DataTypes) {
    const ProductParity = sequelize.define("ProductParity", {
        id: {type: DataTypes.STRING(50), primaryKey: true},
        product_name: {type: DataTypes.STRING(80)},
        company_name: {type: DataTypes.STRING(60)},
        type: {type: DataTypes.STRING(40)},
        subtype: {type: DataTypes.STRING(40)},
        default_compare_id: {type: DataTypes.STRING(50)},
        product_logo: {type: DataTypes.STRING(255)},
        radar_solvency: {type: DataTypes.FLOAT},
        radar_service: {type: DataTypes.FLOAT},
        radar_responsibility: {type: DataTypes.FLOAT},
        radar_performance: {type: DataTypes.FLOAT},
        radar_clause: {type: DataTypes.FLOAT},
        radar_score: {type: DataTypes.FLOAT},
        formation: {type: DataTypes.JSON},
        benifit: {type: DataTypes.JSON},
        compare: {type: DataTypes.JSON},
        notice: {type: DataTypes.STRING},
        status: {type: DataTypes.STRING(20)},
        remark: {type: DataTypes.STRING(400)}
    }, {timestamps: true, tableName: "app_product_parity"});

    return ProductParity;
};
