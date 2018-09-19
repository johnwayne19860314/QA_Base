/**
 * Created by Anyi-tech on 2017/4/14.
 */
var crypto = require('crypto');
//var path = require("path")
console.log('crypto path', __dirname)
module.exports = {
    getMD5: getMD5,
    decryptMD5:decryptMD5,
    getMD5ByHex:getMD5ByHex,
    md5:md5
}
//加密秘钥
var secret="AcD5E1c3eL"
function getMD5(password){
    var md5 = crypto.createHash('md5');
    md5.update(password);
    var d = md5.digest('base64');

    /*	var md5_2 = crypto.createHash('md5');
     md5_2.update(d);
     var md5Password= md5_2.digest('hex');*/
    return d;
}


function md5(paras){
    //=============================================
    //参数key排序
    let keys = [];
    for (let k in paras) {
        keys.push(k);
    }
    keys = keys.sort();
    //=============================================
    // MD5 签名
    let str = "";
    for (let n in keys) {
        if (keys[n] != "signature" && keys[n] != "signAlgorithm") {     // && keys[n] != "keyIndex"
            str += keys[n] + "=" + paras[keys[n]] + "&";
        }
    }
    let srt = str.substr(0, str.length - 1);
   // console.log('md5字符串', srt);
    let md5 = crypto.createHash('md5').update(srt, 'utf-8').digest('hex').toUpperCase();


    //let signature = security.rsa.sign(md5, certificate.self_private);

    return md5;
}
function getMD5_1(password){
    var md5 = crypto.createHash('md5');
    md5.update(password);
    var d = md5.digest('hex')+secret;
    var md5_2 = crypto.createHash('md5');
    md5_2.update(d);
    var md5Password= md5_2.digest('hex');
    return md5Password
}
function decryptMD5(password){
    var decrypted = ""
    var decipher  = crypto.createDecipher('md5', secret);
    decrypted += decipher.update(password,'hex','utf8');
    decrypted += decipher.final('utf8')
    //pwDecrypt = md5.final('utf8');
    return decrypted
}

//console.log(decryptMD5('qQZEnVdp+nNh1+zGqj9tKA=='))
function getMD5ByHex(password){
    var md5 = crypto.createHash('md5');
    md5.update(password);
    var d = md5.digest('hex');
    return d;
}
//var pw = 'a3cac7853dc6a7c9084b94322196e6c9'
//console.log(decryptMD5(pw))