module.exports = exports = function (sequelize, DataTypes) {
    const Feedback = sequelize.define("Feedback", {
        userId: {type: DataTypes.STRING(128)},
        text: {type: DataTypes.STRING(1024)}
    }, {timestamps: true, tableName: "feedbacks"});

    return Feedback;
};
