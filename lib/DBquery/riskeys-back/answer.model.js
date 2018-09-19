module.exports = exports = function (sequelize, DataTypes) {
    const Answer = sequelize.define("Answer", {
        userId: {type: DataTypes.STRING(128)},
        platform: {type: DataTypes.STRING(40)},
        questionId: {type: DataTypes.INTEGER},
        value: {type: DataTypes.STRING(40)} // 有可能会有较大文本的形式吗？
    }, {timestamps: true, tableName: "question_answers"});

    Answer.setAnswer = function (userId, platform, questionId, value) {
        return Answer.create({userId, platform, questionId, value});
    };

    return Answer;
};
