module.exports = exports = function (sequelize, DataTypes) {
    const Question = sequelize.define("Question", {
        id: {type: DataTypes.INTEGER, primaryKey: true},
        message: {type: DataTypes.JSON},
        // messageList: {type: DataTypes.JSON},
        inputType: {type: DataTypes.STRING(20), defaultValue: "choice"}, // 用来标记回答的输入方式
        // 本来是打算标记问题的类型（如填空，选择），后来改成这个问题的类型，比如有些问题实际上一些用户的信息的存储
        category: {type: DataTypes.JSON},
        tags: {type: DataTypes.STRING(120), defaultValue: null},
        response: {type: DataTypes.JSON},
        process: {type: DataTypes.JSON},
        next: {type: DataTypes.JSON}
    }, {timestamps: true, tableName: "questions"});

    Question.prototype.getChoiceInfo = function () {
        var hasOption = false;
        var choiceMapping = {};
        if (["choice", "multichoice", "dropdown-option"].indexOf(this.inputType) == -1) {
            return {hasOption, choiceMapping};
        }
        for (var message of this.message.messageList) {
            if (message.type != "option") {
                continue;
            } else {
                hasOption = true;
                for (var option of message.value) {
                    choiceMapping[option.value] = option;
                }
            }
        }
        return {hasOption, choiceMapping};
    };

    Question.prototype.choiceInfo = function () {
        if (this._hasOption != undefined) {
            return {hasOption: this._hasOption, choiceMapping: this._choiceMapping};
        } else {
            var obj = this.getChoiceInfo();
            this._hasOption = obj.hasOption;
            this._choiceMapping = obj.choiceMapping;
            return obj;
        }
    };

    Question.getQuestionList = function (questionIdList) {
        return Question.findAll({
            where: {id: {[sequelize.Op.in]: questionIdList}}
        });
    };

    return Question;
};

/*

// response 的规则

{
    response: {
        type: "static", 
        messageList: [
            {type: "text", value: "abc"}
        ]
    }
}

{
    response: {
        type: "script", 
        fnString: "()=>{}"
    }
}

{
    response: {
        type: "func", 
        fnName: ""
    }
}

// next的规则，next跟response不一样，next其实是下一次的处理逻辑，而response是要返回给前端的显示数据

{
    next: {
        type: "static", 
        nextId: 10081
    }
}

{
    next:  {
        type: "choice", 
        choiceMap: [
            {value: 20, nextId: 10082}, 
            {value: 30, nextId: 10083}
        ]
    }
}

{
    category: {
        type: "normal"
    }
}

{
    category: {
        type: "person", 
        attribute: "height"
    }
}

*/
