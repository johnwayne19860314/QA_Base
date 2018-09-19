module.exports = exports = function (sequelize, DataTypes) {
    const AskRecord = sequelize.define("AskRecord", {
        userId: {type: DataTypes.STRING(128)},
        platform: {type: DataTypes.STRING(40)},
        ask: {type: DataTypes.TEXT},
        answer: {type: DataTypes.TEXT},
        score: {type: DataTypes.FLOAT}
    }, {timestamps: true, tableName: "records_ask"});

    AskRecord.saveRecord = function (userId, platform, ask, answer, score) {
        return AskRecord.create({userId, platform, ask, answer, score});
    };

    return AskRecord;
};
