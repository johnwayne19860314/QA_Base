module.exports = exports = function (sequelize, DataTypes) {
    const ProductRecord = sequelize.define("ProductRecord", {
        userId: {type: DataTypes.STRING(128)},
        platform: {type: DataTypes.STRING(40)},
        productId: {type: DataTypes.STRING(50)},
        compareId: {type: DataTypes.STRING(50)}
    }, {timestamps: true, tableName: "records_product"});

    ProductRecord.saveRecord = function (userId, platform, productId, compareId) {
        return ProductRecord.create({userId, platform, productId, compareId});
    };

    return ProductRecord;
};
