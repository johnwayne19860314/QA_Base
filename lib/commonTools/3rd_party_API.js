/**
 * Created by Anyi-tech on 2017/12/1.
 */
/**
 * 高德地图api
 * author:zack zou
 * create time:2017-01-06
 */
var urllib = require('urllib');

var m = {};

/**
 * WEB API
 *  配置
 */
var service_config = {
    "juhe": {
        "idcard": {
            "key": "0b8713ef14338068fb23a0efbe95fd45",
            "method": "GET",
            "api": "http://op.juhe.cn/idcard/query"
        }
    },
}


/**
 * 身份证信息认证
 * @param paras 参数
 * {
 *      "idcard":"",            //身份证号码
 *      "realname":""           //姓名
 * }
 * @returns {Promise}
 */
m.idcard = function (paras) {
    return new Promise(function (resolve, reject) {
        //参数验证
        if (!paras.idcard) {
            reject("idcard 不能为空");
            return;
        }
        if (!paras.realname) {
            reject("realname 不能为空");
            return;
        }
        //基础参数
        var _api = service_config.juhe["idcard"];
        if (_api) {
            /**
             * 调用第三方服务
             */
            var p = {
                method: _api.method,
                data: {
                    'key': _api.key,
                    //其他参数
                }
            }
            for (var i in paras) {
                p.data[i] = paras[i];
            }
            /**
             * 请求发送短信
             */
            urllib.request(_api.api, p, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    var rsp = JSON.parse(result.toString());
                    console.log('调用结果：',rsp);
                    if (rsp.error_code == 0) {
                        //调用成功
                        resolve(rsp);
                    } else {
                        console.log("api调用出错", rsp);
                        reject(rsp.reason);
                    }
                }
            });
        }
        else {
            reject("api配置信息不不存在！");
        }
    });
};

module.exports = exports = m;