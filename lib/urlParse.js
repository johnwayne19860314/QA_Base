
const url = require('url');
var body =
    "http://icbc.anyitech.ltd/insurance/transit.html?from_url=http://icbc.anyitech.ltd/insurance/my.html&tobind=http://icbc.anyitech.ltd/insurance/register.html?from_url=http://icbc.anyitech.ltd/insurance/my.html"
var path = url.parse(body).query
var href = url.parse(body).href
console.log('the href is ------', href)
var decodedURL = decodeURIComponent(path)
console.log('the decoded url is ', decodedURL)
var encodedURL = encodeURIComponent(body)
console.log('the encoded url is ', encodedURL)

// var pairs = decodedURL.split('&')
// console.log(pairs)
var m = {}
m.appendParams =  function(url, params) {
    if (params) {
        var baseWithSearch = url.split('#')[0];
        var hash = url.split('#')[1];
        for (var key in params) {
            var attrValue = params[key];
            if (attrValue !== undefined) {
                var newParam = key + "=" + attrValue;
                if (baseWithSearch.indexOf('?') > 0) {
                    var oldParamReg = new RegExp('^' + key + '=[-%.!~*\'\(\)\\w]*', 'g');
                    if (oldParamReg.test(baseWithSearch)) {
                        baseWithSearch = baseWithSearch.replace(oldParamReg, newParam);
                    } else {
                        baseWithSearch += "&" + newParam;
                    }
                } else {
                    baseWithSearch += "?" + newParam;
                }
            }
        }

        if (hash) {
            url = baseWithSearch + '#' + hash;
        } else {
            url = baseWithSearch;
        }
    }
    return url;
}

module.exports = exports = m
// var urlParams = {}
// for (var i in pairs){
//     var pos = pairs[i].indexOf('=')
//     if(pos == -1){
//         continue
//     }
//     urlParams[pairs[i].substring(0,pos)] = pairs[i].substring(pos + 1)
// }

// console.log(urlParams)

// var redirectUrl = appendParams('https://open.weixin.qq.com/connect/oauth2/authorize#wechat_redirect',{
//     'appid': urlParams.appid,
//     'redirect_uri':href ,  //encodeURIComponent(href)
//     'response_type': 'code',
//     'scope': urlParams.scope,
//     'state': urlParams.state,
// })
// console.log('the redirect usl is ', redirectUrl)

// var decodedURL_ = decodeURIComponent(redirectUrl)
// var pairs_ = decodedURL_.split('&')
// console.log(pairs_)