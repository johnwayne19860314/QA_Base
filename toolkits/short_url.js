/**
 * 微博短链接
 * 微博开放平台地址:http://open.weibo.com
 * API地址:http://open.weibo.com/wiki/Short_url/shorten
 */
const validator = require("validator");
const project_configs = require("./configs");
const {requester} = require("./base.requester");
const {logger} = require("./logger");

let service_configs = project_configs['service'];
let server_configs = service_configs['short_url'];

module.exports.getShortUrl = function (url) {
    if (!(url && validator.isURL(url))) {
        return Promise.reject(new Error("短连接获取错误:链接为空"));
    }
    let base_url = server_configs.api_url;
    return requester.get(base_url, {
        qs: {
            source: server_configs.source,
            url_long: url
        }
    }).then(result => {
        result = JSON.parse(result);
        logger.info('-------', result)
        if (result && result.length > 0) {
            return Promise.resolve(result[0].url_short);
        } else {
            logger.error("get shor url failed, server return empty", result);
            return Promise.reject(new Error("短连接获取错误"));
        }
    }).catch(e => {
        logger.error("get shor url failed, e=%s: %s", e.name, e.message);
        return Promise.reject(new Error("短连接获取失败"));
    });
};

// 获取个人中心的保单详情URL
module.exports.getPolicyDetailUrl = function (product_id, order_id, policy_no) {
    let policy_detailurl = service_configs['riskeys']['policy_detail_url'];
    return `${policy_detailurl}?product_id=${product_id}&orderId=${order_id}&policyNo=${policy_no}`;
};

// 获取了上述保单详情URL后转换成短链接
module.exports.getShortPolicyUrl = function (product_id, order_id, policy_no) {
    let detail_url = exports.getPolicyDetailUrl(product_id, order_id, policy_no);
    return exports.getShortUrl(detail_url);
};
