module.exports = exports = function (sequelize, DataTypes) {
    const GBGAccount = sequelize.define("GBGAccount", {
        openId: {type: DataTypes.STRING(128)}, // wechat openid
        phone: {type: DataTypes.STRING(13)} // phone
    }, {timestamps: true, tableName: "gbg_account"});

    GBGAccount.getPhone = function (openId) {
        return this.findOne({where: {openId}}).then(result => {
            return Promise.resolve(result ? result.phone : "");
        });
    };

    GBGAccount.savePhone = function (openId, phone) {
        var self = this;
        return this.findOne({where: {openId}}).then(result => {
            if (!result) {
                return self.create({openId, phone});
            } else {
                if (result.phone != phone) {
                    result.phone = phone;
                    return result.save();
                } else {
                    return Promise.resolve(result);
                }
            }
        });
    };

    return GBGAccount;
};
