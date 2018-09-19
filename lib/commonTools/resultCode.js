/**
 * Created by Anyi-tech on 2017/12/1.
 */
/**
 *  返回结果编码公有化处理
 * author:wlzhou
 * create time:2016-07-14
 */
var log = require('./logger').normal;

/**
 * 返回值对应的编码 说明
 *  1-500   笼统说明
 *  1001  错误、失败
 *  10001-19999 通用型错误（详细到细节）
 *  20001-29999 系统错误 （详细到细节）
 *  30001-59999 业务错误 (详细到细节)
 *  60001-79999 调用第三方接口错误
 *
 * @type {{}}
 * author:wlzhou
 * create time:2016-07-14
 */
const codeMessage = {
    "-1": "系统繁忙，此时请稍候再试",
    "0": "成功",
    "1": "后台系统异常(包括程序，数据库连接异常等)",
    "2": "参数不符合规范(包括参数为空等)",
    "3": "未知错误,系统中没有此编号错误的说明,开发也没有提供说明",
    "4": "核保失败",
    "5": "出单失败",
    "6": "支付失败",
    "7": "调用数据库执行sql异常",
    "99": "",                  //调用第三方接口错误

    "1000":"data内容不符合要求",
    "1001":"渠道不存在或渠道配置错误",
    "1002":"签名验证失败",
    "1003":"接口不存在",
    "1004":"不能处理内容",
    "1005":"没有权限",
    "1006":"产品不存在或产品已过期",
    "1007":"订单不存在或状态错误",
    "1008":"请求号已经存在",
    "1009":"保单不存在",
    "1010":"欠费",
    "1011":"没有找到想要的数据",
    "1012":"订单已取消",
    "1013":"出单中请稍后",
    "1014":"数据已存在",
    "1015":"解密错误",
    "1016":"订单金额错误",
    "2101":"无消息队列",
    "3101":"邮件发送错误",
};


var m = {};

/***
 * 返回字段常量
 * @type {string}
 * author:wlzhou
 * create time:2016-07-14
 */
const RETURN_CODE = "result";                  //编号
const RETURN_MSG = "msg";                    //说明
const RETURN_MODULE = "module";              //模块
const RETURN_DATA = "data";                  //结果


/***
 * 设置返回值信息，返回json 格式
 * @param   code 编号
 * @param   message 说明
 * @param   module 说明
 * @param   data 数据结果集
 * @returns {json}
 * author:wlzhou
 * create time:2016-07-14
 */
m.returnResult = function (code, message, module, data) {
    code = code ? code : 99;
    message = message ? message : m.getMessageByCode(code);
    return setReturnResultToJson(code, message, module, data);
}

/**
 * 根据code 获取对应说明
 * @param code
 * @returns {string}
 */
m.getMessageByCode = function (code) {
    var message = "";
    try {
        message = codeMessage[code];
        if (!message) {
            new error("没有找到对应的错误编码");
        }
    } catch (e) {
        code = "3";
        message = codeMessage[code];
    }
    return message;
}

/**
 * 成功
 * @param   module 说明
 * @param   data 数据结果集
 * @returns {json}
 * author:wlzhou
 * create time:2016-07-14
 */
m.success = function (data, module, message) {
    return m.returnResult("0", message, module, data);
}

/**
 *  失败 返回错误但不到具体错误，只提示时报
 * @param   message 说明
 * @param   module 说明
 * @param   data 数据结果集
 * @returns {json}
 * author:wlzhou
 * create time:2016-07-14
 */
m.fail = function (message, module, data) {
    return m.returnResult("1001", message, module, data);
}

/**
 * 系统系统异常  一般在try 中使用
 * @param   message 说明
 * @param   module 说明
 * @param   data 数据结果集
 * @returns {json}
 * author:wlzhou
 * create time:2016-07-14
 */
m.sysError = function (message, module, data) {
    return m.returnResult("1", message, module, data);
}


/**
 * 系统繁忙
 * @param   message 说明
 * @param   module 说明
 * @param   data 数据结果集
 * @returns {json}
 * author:wlzhou
 * create time:2016-07-14
 */
m.sysBusy = function (message, module, data) {
    return m.returnResult("-1", message, module, data);
}

/**
 * 参数错误
 * @param   message 说明
 * @param   module 说明
 * @param   data 数据结果集
 * @returns {json}
 * author:wlzhou
 * create time:2016-07-14
 */
m.parameError = function (message, module, data) {
    return m.returnResult("2", message, module, data);
}


/**
 * 调用第三接口错误
 * @param   message 说明
 * @param   module 说明
 * @param   data 数据结果集
 * @returns {json}
 * author:wlzhou
 * create time:2016-07-14
 */
m.interfaceFail = function (message, module, data) {
    return setReturnResultToJson("99", message, module, data);
}


/**
 * 判断是否为新版返回格式  为兼容旧版存在   新版：true  旧版 false
 * @param object
 */
m.isNewReturnResult = function (object) {
    if (object && typeof(object) == "object") {
        try {
            object = dataToJson(object);
            if (object[RETURN_CODE] && object[RETURN_MSG]) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    } else {
        return false;
    }
};

/**
 * 返回结果集格式化
 * @param data  需要返回的结果集
 * @returns {
     data:{}
 * }
 */
m.returnDataFmt = function (data) {
    var returnResult = new Object();
    data = dataToJson(data);

    returnResult[RETURN_DATA] = data;

    return returnResult;
}


/***
 * 设置返回值信息，返回json 格式  如果为code=1 系统错误 会自动记录错误信息
 * @param   code 编号
 * @param   message 说明
 * @param   module 说明
 * @param   data 数据结果集
 * author:wlzhou
 * create time:2016-07-14
 */
function setReturnResultToJson(code, message, module, data) {
    var returnResult = {};
    returnResult[RETURN_CODE] = code;
    returnResult[RETURN_MSG] = message;
    returnResult[RETURN_MODULE] = module;
    returnResult[RETURN_DATA] = data;

    if ("1" == code) {
        log.error(module ? module : "" + "  时间：" + dataFmt() + "   ERROR:" + message);
    } else {
        console.log(JSON.stringify(returnResult));
    }
    return returnResult;
}

/**
 * 结果集转换成json
 * @param data
 */
function dataToJson(data) {
    if (data) {
        data = typeof  data == "string" ? JSON.parse(data) : data;
    } else {
        data = new Object();
    }
    return data;
}

/**
 * 时间格式化
 * @returns {string}
 */
function dataFmt() {
    var now = new Date();
    var year = now.getFullYear(); //getFullYear getYear
    var month = now.getMonth();
    var date = now.getDate();
    var day = now.getDay();
    var hour = now.getHours();
    var minu = now.getMinutes();
    var sec = now.getSeconds();
    var week;
    month = month + 1;
    if (month < 10) month = "0" + month;
    if (date < 10) date = "0" + date;
    if (hour < 10) hour = "0" + hour;
    if (minu < 10) minu = "0" + minu;
    if (sec < 10) sec = "0" + sec;
    var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    week = arr_week[day];
    var time = "";
    time = year + "年" + month + "月" + date + "日" + " " + hour + ":" + minu + ":" + sec + " " + week;

    return time;
}

module.exports = exports = m;