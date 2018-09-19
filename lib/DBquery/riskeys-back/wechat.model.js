module.exports = exports = function (sequelize, DataTypes) {
    const WeChatUserRelation = sequelize.define("WeChatUserRelation", {
        unionId: {type: DataTypes.STRING(128)},
        userId: {type: DataTypes.STRING(128)}
    }, {timestamps: true, tableName: "wechat_userrelation"});

    WeChatUserRelation.getUserIdList = function (userId) {
        return this.findAll({
            where: {
                [sequelize.Op.or]: [{userId: userId}, {unionid: userId}]
            }
        }).then(resultList => {
            if (resultList.length > 0) {
                let userIdList = [];
                resultList.forEach(r => {
                    userIdList.push(r.userId);
                    userIdList.push(r.unionId);
                });
                return Promise.resolve(userIdList);
            } else {
                return Promise.resolve([userId]);
            }
        });
    };

    return WeChatUserRelation;
};
