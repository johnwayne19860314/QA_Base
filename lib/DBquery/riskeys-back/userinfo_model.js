module.exports = exports = function (sequelize, DataTypes) {
    const UserInfo = sequelize.define("UserInfo", {
        userId: {type: DataTypes.STRING(40), primaryKey: true},
        gender: {type: DataTypes.TINYINT},
        birthdate: {type: DataTypes.DATE},
        height: {type: DataTypes.INTEGER},
        weight: {type: DataTypes.INTEGER},
        bmi: {type: DataTypes.DOUBLE},
        isSmoking: {type: DataTypes.TINYINT}, // [0, 1, 2, 3]
        dietary: {type: DataTypes.TINYINT}, // 饮食习惯，平时是否经常吃蔬菜和水果
        fitness: {type: DataTypes.TINYINT} // 运动习惯
    }, {timestamps: true, tableName: "user_info"});
    return UserInfo;
};

/**
 * 抽烟状态：
 * 
 * 
 * 抽烟应该是一个分支集合：
 * {
 *      0: {}
 *      1: {
 *          count: 20
 *  }
 *      2: {
 *          count: 5,
 *          years: 5
 *          }
 * }
 * 
 * 
 * 
 * 20171122更新
 * 因为目前有一些疾病明显是有冲突的，比如乳腺癌跟前列腺癌基本是性别相关的测试的
 * 
 * 20171124更新
 * 不用考虑公共问题的存储逻辑了
 */
