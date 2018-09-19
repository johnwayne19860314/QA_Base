module.exports = exports = function (sequelize, DataTypes) {
    const QuestionSet = sequelize.define("QuestionSet", {
        id: {type: DataTypes.STRING(40), primaryKey: true},
        name: {type: DataTypes.STRING(40)},
        questionIdList: {type: DataTypes.JSON},
        reportType: {type: DataTypes.STRING(20)},
        response: {type: DataTypes.JSON}
    }, {timestamps: true, tableName: "questionsets"});

    return QuestionSet;
};

/*

// 使用提前定义好的方法
// 20171114更新，感觉process其实没有必要，而response这个逻辑是必备的，计算、生成报表等，可以都放在这里做。
// getNext这里也采用默认的方法，不开放配置
{
    process: {
        type: "func", 
        fnName: "abc"
    }
}

// 使用自定义的方法
{
    process: {
        type: "script", 
        fnString: "function(abc) {
            console.log(abc);
        }"
    }
}

// report的生成，理论上是在各个processAnswer的逻辑里

*/

// ===================DiseaseReport===================
