module.exports = exports = function (sequelize, DataTypes) {
    const APIClient = sequelize.define("APIClient", {
        app_key: {type: DataTypes.STRING(40), allowNull: false, primaryKey: true},
        app_secret: {type: DataTypes.STRING(128), allowNull: false},
        auth_protocol: {type: DataTypes.STRING(20)}
    }, {timestamps: true, tableName: "apis_clients"});
    return APIClient;
}

// 关于client的想法:

// 考虑了一下，感觉使用oauth2.0协议应该是最好的。这样能够减少对于参数的混入。
// 但是oauth2.0的服务端需要考虑更多的东西，比如token的转换机制，key, secret的存储。
// 另外关于权限表可能需要另一张；
// 还有关于流控也需要一张表
