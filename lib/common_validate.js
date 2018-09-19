/**
 * Created by admin on 2017/08/07.
 */
var _v = require("validator");
//console.log(_v);

/**
 * 重写 isNull function
 */
_v.isNull = function (str) {
    if (_v.toString(str).trim(str) === 'undefined') {
        return true;
    } else if (_v.toString(str).trim(str) === '') {
        return true;
    } else if (_v.toString(str).trim(str) === 'null') {
        return true;
    } else {
        return false;
    }
};
/**
 * is Object Null
 * @param obj
 * @returns {boolean}
 */
_v.isNullObject = function (obj) {
    if (typeof(obj) === 'undefined') {
        return true;
    } else if (obj === 'undefined') {
        return true;
    } else if (obj === null) {
        return true;
    } else if (obj === 'null') {
        return true;
    } else if (Object.keys(obj).length === 0) {
        return true;
    } else {
        return false;
    }
};
/**
 * num equal
 * @param num
 * @param num2
 * @returns {boolean}
 */
_v.equals_num = function (num, num2) {
    if (_v.isNull(num) || _v.isNull(num2))
        return false;
    return num.toString() === num2.toString();
};
/**
 * 求得x的y次方
 * @param x
 * @param y
 * @returns {number}
 */
var square = function (x, y) {
    var i = 1;
    for (var j = 1; j <= y; j++) {
        i *= x;
    }
    return i;
};
/**
 * 18位身份证号最后一位校验
 * @param Num
 * @returns {*}
 * @constructor
 */
var idCard = function (Num) {
    var x = 0;
    for (var i = 18; i >= 2; i--) {
        x = x
            + (square(2, (i - 1)) % 11)
            * parseInt(Num.charAt(19 - i - 1));
    }
    x %= 11;
    var y = 12 - x;
    if (x == 0) {
        y = '1';
    }
    if (x == 1) {
        y = '0';
    }
    if (x == 2) {
        y = 'X';
    }
    return y;
};
/**
 * 验证身份证的有效性
 * @param num
 * @returns {boolean}
 */
_v.isCardId = function (num) {
    if (!_v.isLength(num.toString(), 18, 18)) {
        return false;
    }
    var valid_code = num.charAt(17);
    return _v.equals_num(idCard(num), valid_code);
};
/**
 * is Date
 * @param str
 * @returns {boolean}
 */
_v.isDate = function (str) {
    return !isNaN(Date.parse(str));
};
/**
 * is Birthday
 * @param birthday
 * @returns {boolean}
 */
_v.isBirthday = function (birthday) {
    var _RegExp = /^(\d{4})-(\d{2})-(\d{2})$/;
    if (_v.isNull(birthday)) {
        return false;
    } else {
        return _RegExp.test(birthday);
    }
};
/**
 * is Sex
 * @param sex
 * @returns {*}
 */
_v.isSex = function (sex) {
    if (_v.isNull(sex)) {
        return false;
    } else {
        return _v.equals(sex.toString(), "0") || _v.equals(sex.toString(), "1");
    }
};
/**
 * 是否在区间内
 * @param num
 * @param d1
 * @param d2
 */
_v.isInterval = function (num, d1, d2) {
    if (_v.isNull(num) || _v.isNull(d1) || _v.isNull(d2)) {
        return false;
    } else {
        return num > d1 && num < d2;
    }
};
/**
 * 是否在闭区间内
 * @param num
 * @param d1
 * @param d2
 */
_v.isIntervalClosed = function (num, d1, d2) {
    if (_v.isNull(num) || _v.isNull(d1) || _v.isNull(d2)) {
        return false;
    } else {
        return num >= d1 && num <= d2;
    }
};
/**
 * 是否在昨闭区间内
 * @param num
 * @param d1
 * @param d2
 */
_v.isLIntervalClosed = function (num, d1, d2) {
    if (_v.isNull(num) || _v.isNull(d1) || _v.isNull(d2)) {
        return false;
    } else {
        return num >= d1 && num < d2;
    }
};
/**
 * 是否在右闭区间内
 * @param num
 * @param d1
 * @param d2
 */
_v.isRIntervalClosed = function (num, d1, d2) {
    if (_v.isNull(num) || _v.isNull(d1) || _v.isNull(d2)) {
        return false;
    } else {
        return num > d1 && num <= d2;
    }
};

module.exports = exports = _v;