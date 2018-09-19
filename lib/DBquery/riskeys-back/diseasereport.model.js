module.exports = exports = function (sequelize, DataTypes) {
    const DiseaseReport = sequelize.define("DiseaseReport", {
        userId: {type: DataTypes.STRING},
        platform: {type: DataTypes.STRING(40)},
        questionsetId: {type: DataTypes.STRING(40)},
        answerMap: {type: DataTypes.JSON}, // 因为这个人可能会有多次提交，因为数据库里的答案会有多次
        rate: {type: DataTypes.STRING(20)},
        adviceList: {type: DataTypes.JSON},
        riskLevel: {type: DataTypes.STRING(20)}
    }, {timestamps: true,
        tableName: "reports_diseaserisk"});

    DiseaseReport.saveReport = function (userId, platform, answerMap, result, questionsetId) {
        return DiseaseReport.create({userId,
            platform,
            questionsetId,
            answerMap: answerMap,
            rate: result.rate || "0",
            riskLevel: result.riskLevel,
            adviceList: result.adviceList });
    };
    DiseaseReport.getLastestReport = function (userIdList, questionsetId) {
        return DiseaseReport.findOne({
            where: {
                questionsetId,
                userId: {[sequelize.Op.in]: userIdList}
            },
            order: [["createdAt", "DESC"]]
        });
    };

    DiseaseReport.getUserReport = function (userIdList) {
        return DiseaseReport.findAll({
            where: {userId: {[sequelize.Op.in]: userIdList}}
        }).then((reportList) => {
            var resultMap = {};
            for (var report of reportList) {
                if (report.questionsetId in resultMap) {
                    if (resultMap[report.questionsetId].createdAt < report.createdAt) {
                        resultMap[report.questionsetId] = report;
                    }
                } else {
                    resultMap[report.questionsetId] = report;
                }
            }
            return resultMap;
        });
    };

    DiseaseReport.descMap = {
        "atrial-fibrillation": "心房颤动",
        "bladder-cancer": "膀胱癌",
        "breast-cancer": "乳腺癌",
        "cervical-cancer": "宫颈癌",
        "colon-cancer": "结直肠癌",
        "diabetes": "糖尿病",
        "heart-attack": "心脏病",
        "kidney-cancer": "肾癌",
        "leukemia": "白血病",
        "nhl-cancer": "非霍奇金淋巴瘤",
        "ovarian-cancer": "卵巢癌",
        "pancreatic-cancer": "胰腺癌",
        "prostate-cancer": "前列腺癌",
        "skin-cancer": "皮肤癌",
        "stomach-cancer": "胃癌",
        "uterine-cancer": "子宫癌",
        "lung-cancer": "肺癌",
        "stroke": "中风"
    };

    DiseaseReport.prototype.format = function () {
        return {
            type: "disease-report",
            value: {
                linkId: this.questionsetId,
                name: this.constructor.descMap[this.questionsetId],
                riskLevel: this.riskLevel,
                rate: Number(this.rate).toFixed(0)
            }
        };
    };

    return DiseaseReport;
};
