/**
 * 微博短链接
 * 微博开放平台地址:http://open.weibo.com
 * API地址:http://open.weibo.com/wiki/Short_url/shorten
 */
const validator = require("validator");
const project_configs = require("./configs");
const {requester} = require("./base.requester");
const {logger} = require("./logger");
let server_configs = project_configs['service']['short_url'];

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
    }).catch(e => {
        logger.error("get shor url failed, e=%s: %s", e.name, e.message);
        return Promise.reject(new Error("短连接获取失败"));
    }).then(result => {
        result = JSON.parse(result);
        logger.info('-------', result)
        if (result && result.length > 0) {
            return Promise.resolve(result[0]);
        } else {
            logger.error("get shor url failed, server return empty", result);
            return Promise.reject(new Error("短连接获取错误"));
        }
    });
};
