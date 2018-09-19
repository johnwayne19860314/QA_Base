/**
 * 公用方法
 * author:wlzhou
 * create time:2016-08-03
 */
var mustache = require("mustache");
var iconv = require('iconv-lite');
var xml2js = require('xml2js');
var parseString = require('xml2js').parseString;
var fs = require("fs");
require('date-utils');
var crypto = require('crypto')
//var log = require('./logger').normal;
//var wechat_tool = require('../wechat/tools')
var bcrypt = require('bcryptjs');
var md5 = require('MD5')
var sha1 = require('sha1')
var request = require('request');
var _ = require('lodash');
var https = require('https');
var url_mod = require('url');

var signTypes = {
    MD5: md5,
    SHA1: sha1
};

var RETURN_CODES = {
    SUCCESS: "SUCCESS",
    FAIL: "FAIL"
};

var URLS = {
    SENDREDPACK: "https://api.mch.weixin.qq.com/mmpaymkttransfers/sendredpack",
    TRANSFERS: "https://api.mch.weixin.qq.com/mmpaymkttransfers/promotion/transfers"
};

/**
 * 静态公司常量
 * @type {{}}
 */
var static_company_const = {
    "ANSHENG": {name: "安盛天平"},
    "YIAN": {name: "易安保险"},
    "CPIC": {name: "太平洋保险"},
    "PICC": {name: "中国人保"},
    "PINGAN": {name: "中国平安"},
    "YONGCHENG": {name: "永诚保险"}
};

var static_const = null;
if (process.env.NODE_ENV === "production") {
    static_const = {
        isTest: false //是否测试
    }
}
else {
    static_const = {
        isTest: false  //是否测试
    }
}


var m = {
    validate: {
        /**
         * 验证参数为空  为空：true 不为空：false
         * @param object 待验证的值
         * author:wlzhou
         * create time:2016-08-03
         */
        isEmpty: function (object) {
            if (null == object || "" == object || undefined == object || "undefined" == object || "null" == object) {
                return true;
            } else {
                return false;
            }
        },
        /**
         * 验证参数不为空  为空：false 不为空：true
         * @param object 待验证的值
         * author:wlzhou
         * create time:2016-08-03
         */
        isNotEmpty: function (object) {
            if (null == object || "" == object || undefined == object || "undefined" == object || "null" == object) {
                return false;
            } else {
                return true;
            }
        },
        /**
         * 判断是否为{}对象，借用了jQuery的实现方式
         */
        isEmptyObject: function (e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        /**
         * 验证是否为数字  数字 true  非数字 false
         * @param object 待验证值
         * @returns {boolean}
         * author:wlzhou
         * create time:2016-08-03
         */
        isNum: function (object) {
            var reg = /^[0-9]*$/;
            return reg.test(object);
        },
        /**
         * 验证是否为邮箱 邮箱 true  非邮箱 false
         * @param object 待验证值
         * @returns {boolean}
         * author:wlzhou
         * create time:2016-08-03
         */
        isEmail: function (object) {
            var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
            return reg.test(object);
        },
        /**
         * 验证身份证  只验证18位的   身份证格式正确 true  不正确 false
         * @param object
         * @returns {boolean}
         * author:wlzhou
         * create time:2016-08-03
         */
        isCardId: function (code) {

            var city = {
                11: "北京",
                12: "天津",
                13: "河北",
                14: "山西",
                15: "内蒙古",
                21: "辽宁",
                22: "吉林",
                23: "黑龙江 ",
                31: "上海",
                32: "江苏",
                33: "浙江",
                34: "安徽",
                35: "福建",
                36: "江西",
                37: "山东",
                41: "河南",
                42: "湖北 ",
                43: "湖南",
                44: "广东",
                45: "广西",
                46: "海南",
                50: "重庆",
                51: "四川",
                52: "贵州",
                53: "云南",
                54: "西藏 ",
                61: "陕西",
                62: "甘肃",
                63: "青海",
                64: "宁夏",
                65: "新疆",
                71: "台湾",
                81: "香港",
                82: "澳门",
                91: "国外 "
            };
            var tip = "";
            var pass = true;
            console.log('------')
            if (!code || !/^\d{6}(18|19|20)\d{2}(0[1-9]|1[0-2])\d{2}\d{3}(\d|X)$/i.test(code)) {
                tip = "身份证号格式错误";
                pass = false;
            }

            else if (!city[code.substr(0, 2)]) {
                tip = "地址编码错误";
                pass = false;
            }
            else {
                //18位身份证需要验证最后一位校验位
                if (code.length == 18) {
                    code = code.split('');
                    //∑(ai×Wi)(mod 11)
                    //加权因子
                    var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                    //校验位
                    var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
                    var sum = 0;
                    var ai = 0;
                    var wi = 0;
                    for (var i = 0; i < 17; i++) {
                        ai = code[i];
                        wi = factor[i];
                        sum += ai * wi;
                    }
                    var last = parity[sum % 11];
                    if (parity[sum % 11] != code[17]) {
                        tip = "校验位错误";
                        pass = false;
                    }
                }
            }
            console.log('the isCard msg',tip)
            return pass;
        },
        /**
         * 验证是否为手机号码 正确 true  不正确 false
         * @param object 待验证值
         * @returns {boolean}
         * author:wlzhou
         * create time:2016-08-03
         */
        isMobile: function (object) {
            var reg = /^1\d{10}$/;
            return reg.test(object);
        },
        /**
         * 是否车牌
         */
        isVehicleLicenceCode: function (object) {
            var reg = /^([\u4E00-\u9FFF]{1}\s|[\u4E00-\u9FFF]{1}|[\u4E00-\u9FFF]{1}-)+[A-Z0-9]{6}$/;
            return reg.test(object);
        },
        /**
         * 是否为车辆识别代码(车架号)
         */
        isVehicleFrameNo: function (object) {
            var reg = /^[ABCDEFGHJKLMNPRSTUVWXYZ0-9]{17}$/;
            return reg.test(object);
        },
        /**
         * 是否为发动机号
         */
        isEngineNo: function (object) {
            var reg = /^[A-Za-z0-9]{1,30}$/;
            return reg.test(object);
        },
        /**
         * 是否我金额
         */
        isMoney: function (object) {
            var reg = /^([1-9][\d]{0,11}|0)(\.[\d]{1,2})?$/;
            return reg.test(object);
        },
        /**
         * 判断是否数组是否不为空
         */
        isArrayNotEmpty: function (arrayObejct) {
            if (m.validate.isNotEmpty(arrayObejct) && Array.isArray(arrayObejct) && arrayObejct.length > 0) {
                return true;
            } else {
                return false;
            }
        },
        /**
         * 判断是否数组是否为空
         */
        isArrayEmpty: function (arrayObejct) {
            return !m.validate.isArrayNotEmpty(arrayObejct);
        }
    },
    /**
     * 常用公共方法
     */
    util: {
        /**
         * 根据date 获取生日
         * @param date
         * author:wlzhou
         * create time:2016-08-03
         */
        getAge: function (date) {
            console.log(date);
            var d1 = new Date();
            var y1 = d1.getYear();
            var y2 = date.getYear();
            var suby = y1 - y2;
            console.log('the suby', suby)
            var tdate = date.addYears(suby);
            if (tdate > d1) {
                return suby - 1;
            } else {
                return suby;
            }
        },
        /**
         * 根据生日和保单生效日期获取年龄
         * @param d2
         * @returns {number}
         */
        getAge_eff: function (d2,d1) {
            if(!d1){
                d1 = new Date();
            }
            var y1 = d1.getYear();
            var y2 = d2.getYear();
            var suby = y1 - y2;
            var tdate = d2.addYears(suby);
            if (tdate > d1) {
                return suby - 1;
            } else {
                return suby;
            }
        },
        /**
         * 根据身份证获取生日，性别
         * @param cardid  身份证
         * @retur
         *   var idinfo = {
         *       sex: "M",
         *       birdth: "1980-01-01"
         *   }
         */
        showBirthday: function (cardid) {
            var idinfo = {
                sex: "M",
                birdth: ""
            }
            var birthdayValue;
            console.log('the cardId is', cardid)
            if (m.validate.isCardId(cardid)) { //18位身份证号码
                birthdayValue = cardid.charAt(6) + cardid.charAt(7) + cardid.charAt(8) + cardid.charAt(9) + '-' + cardid.charAt(10) + cardid.charAt(11) + '-' + cardid.charAt(12) + cardid.charAt(13);
                if (parseInt(cardid.charAt(16) / 2) * 2 != cardid.charAt(16))
                    idinfo.sex = 'M';
                else
                    idinfo.sex = 'F';
                idinfo.birdth = birthdayValue;
            }
            console.log('the birthday info is',idinfo)
            return idinfo;
        },
        /**
         * 对Date的扩展，将 Date 转化为指定格式的String * 年（y） 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
         * @param date
         * @param patternStr
         * author:wlzhou
         * create time:2016-08-03
         */
        dateFormat: function (date, patternStr) {
            /** * 对Date的扩展，将 Date 转化为指定格式的String * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
             可以用 1-2 个占位符 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) * eg: * (new
             Date()).pattern("yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423
             * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
             * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
             * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
             * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
             */
            Date.prototype.pattern = function (fmt) {
                var o = {
                    "M+": this.getMonth() + 1, //月份
                    "d+": this.getDate(), //日
                    "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时
                    "H+": this.getHours(), //小时
                    "m+": this.getMinutes(), //分
                    "s+": this.getSeconds(), //秒
                    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
                    "S": this.getMilliseconds() //毫秒
                };
                var week = {
                    "0": "/u65e5",
                    "1": "/u4e00",
                    "2": "/u4e8c",
                    "3": "/u4e09",
                    "4": "/u56db",
                    "5": "/u4e94",
                    "6": "/u516d"
                };
                if (/(y+)/.test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                }
                if (/(E+)/.test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[this.getDay() + ""]);
                }
                for (var k in o) {
                    if (new RegExp("(" + k + ")").test(fmt)) {
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                    }
                }
                return fmt;
            }
            return new Date(date).pattern(patternStr);
        },
        /**
         * 计算两个时间差
         * @param startTime  开始时间
         * @param endTime   结束时间
         * author:wlzhou
         * create time:2016-08-03
         */
        timeDifference: function (startTime, endTime) {
            //时间差的毫秒数
            var difference = endTime.getTime() - startTime.getTime();
            //计算出相差天数
            var days = Math.floor(difference / (24 * 3600 * 1000));
            //计算出小时数
            var leave1 = difference % (24 * 3600 * 1000);
            // //计算天数后剩余的毫秒数
            var hours = Math.floor(leave1 / (3600 * 1000));
            //计算相差分钟数
            var leave2 = leave1 % (3600 * 1000)
            //计算小时数后剩余的毫秒数
            var minutes = Math.floor(leave2 / (60 * 1000))
            //计算相差秒数
            var leave3 = leave2 % (60 * 1000);
            //计算分钟数后剩余的毫秒数
            var seconds = Math.round(leave3 / 1000);

            var differenceStr = days + "天 " + hours + "小时 " + minutes + " 分钟" + seconds + " 秒";
            return differenceStr;
        },
        /**
         * 同步读取请求模本文件并替换值
         * @param path   模本路径
         * @param replace  替换值
         * author:wlzhou
         * create time:2016-08-03
         */
        readTemplateReplace: function (path, replace) {
            var resultStr = "";   //
            try {
                resultStr = fs.readFileSync(path).toString();
                if (m.validate.isNotEmpty(resultStr) && m.validate.isNotEmpty(replace)) {
                    resultStr = m.util.templateReplace(resultStr, replace);
                }
            } catch (err) {
                log.error("同步读取请求模本文件并替换值错误", err);
            }
            return resultStr;
        },
        /**
         * 模本值替换
         * @param templateStr  模本
         * @param replace    替换值
         * author:wlzhou
         * create time:2016-08-03
         */
        templateReplace: function (templateStr, replace) {
            var resultStr = "";
            try {
                if (m.validate.isNotEmpty(templateStr) && m.validate.isNotEmpty(replace)) {
                    resultStr = mustache.render(templateStr.toString(), replace);
                }
            } catch (err) {
                log.error("模本值替换错误", err);
            }
            return resultStr;
        },
        /**
         * 字符串编码
         * @param str  待编码字符串
         * @param encoding    编码格式
         * @returns {string}
         * author:wlzhou
         * create time:2016-08-03
         */
        strEncode: function (str, encoding) {
            var resultStr = "";   //
            try {
                if (m.validate.isNotEmpty(str) && m.validate.isNotEmpty(encoding)) {
                    resultStr = iconv.encode(str, encoding);
                }
            } catch (err) {
                log.error("字符串编码", err);
            }
            return resultStr;
        },
        /**
         * 字符串解码
         * @param str  待解码字符串
         * @param encoding    编码格式
         * @returns {string}
         * author:wlzhou
         * create time:2016-08-03
         */
        strDecode: function (str, encoding) {
            var resultStr = "";   //
            try {
                if (m.validate.isNotEmpty(str) && m.validate.isNotEmpty(encoding)) {
                    resultStr = iconv.decode(str, encoding);
                }
            } catch (err) {
                log.error("符串解码", err);
            }
            return resultStr;
        },
        /**
         * 将json 转化 xml
         * @param jsonObject    待转化的json格式
         * @param options   可选属性 具体请参考 xml2js API
         * @returns {string}
         * author:wlzhou
         * create time:2016-08-05
         */
        jsonToXml: function (jsonObject, options) {
            var xmlStr = "";
            try {
                var builder = new xml2js.Builder();
                //设置可选属性 具体请参考 xml2js API
                if (m.validate.isNotEmpty(options)) {
                    builder = new xml2js.Builder(typeof  options == "string" ? JSON.parse(options) : options);
                }
                //json 转化为
                if (m.validate.isNotEmpty(jsonObject)) {
                    xmlStr = builder.buildObject(typeof  jsonObject == "string" ? JSON.parse(jsonObject) : jsonObject);
                }
            } catch (err) {
                log.error("json转化xml错误 jsonObject:" + JSON.stringify(jsonObject || {}) + "  options:" + JSON.stringify(options || {}), err);
            }
            return xmlStr;
        },
        /**
         * 将xml 转化 json
         * @param xmlStr    待转化的xml
         * @param options   可选属性 具体请参考 xml2js API
         * @returns {string}
         * author:wlzhou
         * create time:2016-08-05
         */
        xmlToJson: function (xmlStr, options, cb) {
            var jsonObject = new Object();
            try {

                //设置可选属性 具体请参考 xml2js API
                if (m.validate.isEmpty(options)) {
                    options = {};
                }
                //json 转化为
                if (m.validate.isNotEmpty(xmlStr)) {
                    var parseString = xml2js.parseString;
                    parseString(xmlStr, options, function (err, result) {
                        cb(err, result);
                    });
                }
            } catch (err) {
                log.error("json转化xml错误 jsonObject:" + JSON.stringify(jsonObject || {}) + "  options:" + JSON.stringify(options || {}), err);
                cb(err);
            }
        },
        /**
         * 将 String  转化 json
         * @param str    待转化的String
         * @returns {string}
         * author:wlzhou
         * create time:2016-08-05
         */
        stringToJson: function (str) {
            var jsonObject = null;
            try {
                jsonObject = (str && typeof str == 'string') ? JSON.parse(str) : {};
            } catch (err) {
                log.error("String转化JSON 错误 String:" + str, err);
            }
            return jsonObject;
        },
        /**
         * 根据供应商标识获取 公司名称
         * @param vendor  供应商标识
         * author:wlzhou
         * create time:2016-09-14
         */
        getCompanyNameByVendor: function (vendor) {
            var companyInfo = m.util.getCompanyInfoByVendor(vendor);
            return companyInfo.name || "";
        },
        /**
         * 根据供应商标识获取 公司信息
         * @param vendor  供应商标识
         * author:wlzhou
         * create time:2016-09-14
         */
        getCompanyInfoByVendor: function (vendor) {
            var companyInfo = static_company_const[vendor] || {};
            return companyInfo;
        },
        /**
         * 获取微信公众号信息
         * @param req
         * author:wlzhou
         * create time:2017-02-15
         */
        getWeChatInfo: function (req) {
            var weixin = {};
            /**
             * 获取openid必须上微信才能获取的到哟
             */
            try {
                console.log("wechat_tool.getWxuserinfo(req):", JSON.stringify(wechat_tool.getWxuserinfo(req)));
                var wxuserinfo = wechat_tool.getWxuserinfo(req) || {};
                if (wxuserinfo) {
                    weixin = typeof wxuserinfo == 'string' ? JSON.parse(wxuserinfo) : wxuserinfo;
                }

                //是否測試
                if (static_const.isTest) {
                    weixin.openid = "ocN-YvwDS8eQM_Lg9LBF6pFXeYs0";
                    //生产测试
                    if (process.env.NODE_ENV === "production") {
                        weixin.wechat = "anyi";
                    } else {
                        weixin.wechat = "anyi_tech";
                    }
                }

                return weixin;
            } catch (e) {
                log.error("获取微信openid 错误", e);
                return weixin;
            }
        },
        /**
         * 根据订单中addtional 的信息获取微信来源(为兼容旧版本)
         * @param req
         * author:wlzhou
         * create time:2017-02-15
         */
        getWeChatSourceByAddtional: function (param) {
            var wechat_source = {};
            if (param) {
                var openid = param.openid || "";   //旧版本openid 存储的位置
                var temp_wechat_source = param.wechat_source || null;  //新版本微信来源

                if (temp_wechat_source && temp_wechat_source.openid) {
                    wechat_source.openid = temp_wechat_source.openid;
                    wechat_source.wechat_name = temp_wechat_source.wechat_name;
                } else {
                    wechat_source.openid = openid;
                    if (process.env.NODE_ENV === "production") {
                        wechat_source.wechat_name = "anyi";
                    } else {
                        wechat_source.wechat_name = "anyi_tech";
                    }

                }
            }
            return wechat_source;
        },
        /**
         * 数字长度补充  少位数添0,多位数则直接返回
         * @param str   字符串
         * @param length  长度
         */
        strSupplementZero: function (str, length) {
            var supplementZeroStr = str + "";
            var supplementZeroStrLength = supplementZeroStr.length;
            if (supplementZeroStrLength >= length) {
                return supplementZeroStr;
            } else {
                for (var i = 0; i < (length - supplementZeroStrLength); i++) {
                    supplementZeroStr = "0" + supplementZeroStr;
                }
                return supplementZeroStr;
            }
        }
    },
    //打印
    print: {
        /**
         * 打印请求
         * @param url
         * @param params
         * @param remark  备注说明，仅用于系统打印日志用
         * author:wlzhou
         * create time:2016-08-03
         */
        request: function (url, params, remark) {
            try {
                console.log(remark + " url:" + url);
                console.log(remark + " 参数:" + (typeof  params == 'object' ? JSON.stringify(params) : params ));
            } catch (err) {
                log.error("打印请求值错误 ", err);
            }
        },
        /**
         * 打印结果
         * @param url
         * @param params
         * @param remark  备注说明，仅用于系统打印日志用
         * author:wlzhou
         * create time:2016-08-03
         */
        result: function (result, remark) {
            try {
                console.log(remark + " 结果:" + (typeof  result == 'object' ? JSON.stringify(result) : result ));
            } catch (err) {
                log.error("打印结果值错误 ", err);
            }
        },
        /**
         * 打印耗时
         * @param startTime  开始时间
         * @param endTime   结束时间
         * @param remark    备注说明，仅用于系统打印日志用
         */
        timeConsuming: function (startTime, endTime, remark) {
            try {
                console.log(remark + " 耗时:" + m.util.timeDifference(startTime, endTime));
            } catch (err) {
                log.error("打印耗时错误 ", err);
            }
        }
    },

    payment: {

        _toQueryString: function (object) {
            return Object.keys(object).filter(function (key) {
                return object[key] !== undefined && object[key] !== '';
            }).sort().map(function (key) {
                return key + "=" + object[key];
            }).join("&");
        },

        _getSign: function (pkg, signType) {
            pkg = _.clone(pkg);
            delete pkg.sign;
            signType = signType || "MD5";
            var string1 = m.payment._toQueryString(pkg);
            var stringSignTemp = string1 + "&key=" + this.partnerKey;
            var signValue = signTypes[signType](stringSignTemp).toUpperCase();
            return signValue;
        },

        buildXml: function (obj) {
            var builder = new xml2js.Builder();
            var xml = builder.buildObject({xml:obj});
            return xml;
        }
    }

};
/**
 * des 加密，解密处理
 */
m.des = (() => {
    var self = {};
    var key = '44567822';
    self.algorithm = {des: 'des', ecb: 'des-ecb', cbc: 'des-cbc'};
    /**
     * des 加密，
     * @param text  待加密文本
     * @param key   加密 key 值，八位随机数据
     * @returns {string}
     */
    self.encrypt = function (text, key, encoding) {
        var buf_key = new Buffer(key);
        var en = encoding ? encoding : "base64";
        var cipher = crypto.createCipher(self.algorithm.des, buf_key);
        cipher.setAutoPadding(true); //default true
        var ciph = cipher.update(text, 'utf8', en);
        ciph += cipher.final(en);
        return ciph;
    };
    /**
     * des 解密
     * @param encrypt_text  待解密的密文
     * @param key 加密 key 值，八位随机数据，和加密的 key 同步
     */
    self.decrypt = function (encrypt_text, key, encoding) {
        var buf_key = new Buffer(key);
        var en = encoding ? encoding : "base64";
        var decipher = crypto.createDecipher(self.algorithm.des, buf_key);
        decipher.setAutoPadding(true);
        var txt = decipher.update(encrypt_text, en, 'utf8');
        txt += decipher.final('utf8');
        return txt;
    };
    /**
     * des cbc 加密，
     * @param text  待加密文本
     * @param key   加密 key 值，八位随机数据
     * @returns {string}
     */
    self.encrypt_cbc = function (text, key, encoding) {
        var buf_key = new Buffer(key);
        var buf_iv = new Buffer(key);
        var en = encoding ? encoding : "base64";
        var cipher = crypto.createCipheriv(self.algorithm.cbc, buf_key, buf_iv);
        cipher.setAutoPadding(true) //default true
        var ciph = cipher.update(text, 'utf8', en);
        ciph += cipher.final(en);
        return ciph;
    };
    /**
     * des cbc 解密
     * @param encrypt_text  待解密的密文
     * @param key 加密 key 值，八位随机数据，和加密的 key 同步
     */
    self.decrypt_cbc = function (encrypt_text, key, encoding) {
        var buf_key = new Buffer(key);
        var buf_iv = new Buffer(key);
        var en = encoding ? encoding : "base64";
        var decipher = crypto.createDecipheriv(self.algorithm.cbc, buf_key, buf_iv);
        decipher.setAutoPadding(true);
        var txt = decipher.update(encrypt_text, en, 'utf8');
        txt += decipher.final('utf8');
        return txt;
    };

    return self;
})();

m.rsa = (() => {
    var self = {};
    /**
     * 在指定位置插入字符串
     * @param str
     * @param insert_str
     * @param sn
     * @returns {string}
     */
    var insert_str = function (str, insert_str, sn) {
        var newstr = "";
        for (var i = 0; i < str.length; i += sn) {
            var tmp = str.substring(i, i + sn);
            newstr += tmp + insert_str;
        }
        return newstr;
    };

    /**
     * 签名
     * @param src_sign
     * @param self_private
     * @param encoding
     * @returns {*}
     */
    self.sign = function (src_sign, self_private, encoding, algorithm) {
        var _private = '-----BEGIN PRIVATE KEY-----\n' + insert_str(self_private, "\n", 64) + '-----END PRIVATE KEY-----';
        return crypto.createSign(algorithm ? algorithm : 'RSA-SHA1')
            .update(new Buffer(src_sign, 'utf-8'))
            .sign(_private, encoding ? encoding : 'base64');
    };
    /**
     * 验证签名
     * @param src_sign 签名源串
     * @param signature 已生成的签名
     * @param public_key 公钥
     * @returns {*}
     */
    self.verify = function (src_sign, signature, public_key, encoding, algorithm) {
        var _public = '-----BEGIN PUBLIC KEY-----\n' + insert_str(public_key, '\n', 64) + '-----END PUBLIC KEY-----';
        return crypto.createVerify(algorithm ? algorithm : 'RSA-SHA1')
            .update(new Buffer(src_sign, 'utf-8'))
            .verify(_public, signature, encoding ? encoding : 'base64');
    };
    /**
     * 加密
     * @param src_data
     * @param public_key
     * @param encoding
     * @returns {string|Buffer}
     */
    self.encrypt = function (src_data, public_key, encoding) {
        var _public = '-----BEGIN PUBLIC KEY-----\n' + insert_str(public_key, '\n', 64) + '-----END PUBLIC KEY-----';
        var _NodeRSA = new NodeRSA(_public, {encryptionScheme: "pkcs1"});
        return _NodeRSA.encrypt(src_data, encoding ? encoding : 'base64');
    };

    /**
     * 解密
     * @param cryptograph
     * @param private_key
     * @param encoding
     * @returns {Buffer|Object|string}
     */
    self.decrypt = function (cryptograph, private_key, encoding) {
        var _private = '-----BEGIN PRIVATE KEY-----\n' + insert_str(private_key, "\n", 64) + '-----END PRIVATE KEY-----';
        var _NodeRSA = new NodeRSA(_private, {encryptionScheme: "pkcs1"});
        return _NodeRSA.decrypt(cryptograph, encoding ? encoding : 'utf-8');
    };

    /**
     * rsa公钥解密
     * **/
    self.rsaPubDcrypt=function(text,publicKey,encoding){
        var _NodeRSA = new NodeRSA(publicKey, {encryptionScheme: "pkcs1"});
        return _NodeRSA.decryptPublic(text, encoding ? encoding : 'utf-8');

    };


    return self;
})();

m.aes = (() => {
    var self = {};
    /**
     * 加密
     * @param src_data  待加密字符串
     * @param key  秘钥
     * @param encoding  编码
     * @returns {string|Buffer}
     */
    self.encrypt = function (src_data, key, encoding, iv) {
        iv = iv || "";
        var clearEncoding = encoding || 'utf8';
        var cipherEncoding = 'base64';
        var cipherChunks = [];
        var cipher = crypto.createCipheriv('aes-256-ecb', key, iv);
        cipher.setAutoPadding(true);
        cipherChunks.push(cipher.update(src_data, clearEncoding, cipherEncoding));
        cipherChunks.push(cipher.final(cipherEncoding));
        return cipherChunks.join('');
    };
    /**
     * 解密
     * @param cryptograph 加密串
     * @param private_key  秘钥
     * @param encoding  编码
     * @returns {Buffer|Object|string}
     */
    self.decrypt = function (cryptograph, key, encoding, iv) {
        if (!cryptograph) {
            return "";
        }

        iv = iv || "";
        var clearEncoding = encoding || 'utf8';
        var cipherEncoding = 'hex';
        var cipherChunks = [];
        var decipher = crypto.createDecipheriv('aes-128-ecb', key, iv);

        decipher.setAutoPadding(true);
        cipherChunks.push(decipher.update(cryptograph, cipherEncoding, clearEncoding));
        cipherChunks.push(decipher.final(clearEncoding));
        return cipherChunks.join('');
    };

    return self;
})();

m.hash = (() => {
    var self = {};

    /**
     * 生成加盐并哈希的密码
     * @param {String} org_string
     * @param {Number} salt_size
     * @returns {Promise} encrypt_string
     */
    self.getHash = function (org_string, salt_size) {
        if (!salt_size) {
            salt_size = 10;
        }
        return bcrypt.hash(org_string, salt_size);
    };

    /**
     * 检查是否一致
     * @param {String} org_string
     * @param {String} encrypt_string
     * @returns {Promise} true / false
     */
    self.checkHash = function (org_string, encrypt_string) {
        return bcrypt.compare(org_string, encrypt_string);
    };

    return self;
})();

module.exports = exports = m;
