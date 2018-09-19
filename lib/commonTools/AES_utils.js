/**
 * aes 加密解密
 * @type {"crypto"}
 */
var crypto = require('crypto');

var  exports = {} ;
/**
 * aes128加密
 * @param data     明文
 * @param secretKey  密钥
 * @returns {*}
 */
exports.encrypt = function (data, secretKey) {
    var cipher = crypto.createCipher('aes-128-ecb',secretKey);
    return cipher.update(data,'utf8','hex') + cipher.final('hex');
};

/**
 * aes128解密
 * @param data        密文
 * @param secretKey     密钥
 * @returns {*}
 */
exports.decrypt = function(data, secretKey) {
    var cipher = crypto.createDecipher('aes-128-ecb',secretKey);
    return cipher.update(data,'hex','utf8') + cipher.final('utf8');
}

module.exports = exports;