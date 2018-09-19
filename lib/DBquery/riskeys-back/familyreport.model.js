module.exports = exports = function (sequelize, DataTypes) {
    const FamilyRiskReport = sequelize.define("FamilyRiskReport", {
        userId: {type: DataTypes.STRING},
        platform: {type: DataTypes.STRING(40)},
        answerMap: {type: DataTypes.JSON}, // 因为这个人可能会有多次提交，因为数据库里的答案会有多次
        result: {type: DataTypes.JSON} // 记录细节等信息
    }, {timestamps: true,
        tableName: "reports_familyrisk"});

    FamilyRiskReport.saveReport = function (userId, platform, answerMap, result) {
        return FamilyRiskReport.create({userId,
            platform,
            answerMap: answerMap,
            result: result
        });
    };

    FamilyRiskReport.getLastestReport = function (userIdList) {
        return FamilyRiskReport.findOne({
            where: {userId: {[sequelize.Op.in]: userIdList}},
            order: [["createdAt", "DESC"]]
        });
    };

    FamilyRiskReport.prototype.format = function () {
        return {
            type: "family-report",
            value: {
                health: this.result.health,
                accident: this.result.accident,
                wealth: this.result.wealth,
                familyWealth: this.result.familyWealth,
                family: this.result.family,
                familyMember: this.result.familyMember,
                linkId: "family"
            }
        };
    };

    return FamilyRiskReport;
};
