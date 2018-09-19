module.exports = exports = function (sequelize, DataTypes) {
    const APIPermission = sequelize.define("APIPermission", {
        app_key: {type: DataTypes.STRING(40), allowNull: false},
        config_id: {type: DataTypes.INTEGER, allowNull: false},
        perm_string: {type: DataTypes.STRING(20), allowNull: false}
        // method: { type: DataTypes.STRING(20), defaultValue: "get" },
        // request_list: { type: DataTypes.JSON, allowNull: false }
    }, {
        timestamps: true,
        tableName: "apis_permissions",
        indexes: [
            {unique: true, fields: ["app_key", "config_id"]}
        ]
    });

    // 删除配置时的级联删除该权限
    return APIPermission;
};
