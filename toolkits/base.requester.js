const request = require("request");
const {logger, dLogger} = require("./logger");
const {HTTPError, ConnectError} = require("./error");
var https = require('https');
var url_mod = require('url');
function delay (delay_time) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay_time);
    });
}

class BaseRequester {
    constructor (name, host, defaultHeaders) {
        this.name = name;
        this.host = host;
        this.defaultHeaders = defaultHeaders || {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache"
        };
        this.defaultTimeout = 1000 * 10;
    }
    /**
     * 一个通用的请求类
     * @param {string} method  {post|get|put|delete|patch}
     * @param {string} url
     * @param {Object} options {headers: {}, body: {}, json: {}}
     */
    request (method, url, options) {
        let default_options = {
            headers: this.defaultHeaders,
            timeout: this.defaultTimeout,
            debug: true,
            retry_count: 0
        };
        options = Object.assign(default_options, options);
        if (options.debug) {
            dLogger.debug("[%s][%s] request with options=%j", method, url, options);
        }
        let retry_count = options.retry_count;
        if (retry_count > 0) {
            return this.constructor.doRequestWithRetry(method, url, options, retry_count);
        } else {
            return this.constructor.doRequest(method, url, options);
        }
    }

    get (url, options) {
        return this.request("get", url, options);
    }

    post (url, options) {
        return this.request("post", url, options);
    }

    delete (url, options) {
        return this.request("delete", url, options);
    }

    put (url, options) {
        return this.request("put", url, options);
    }

    patch (url, options) {
        return this.request("patch", url, options);
    }

    static doRequest (method, url, options) {
        return new Promise(function (resolve, reject) {
            request[method](url, options, function (err, res, body) {
                if (err) {
                    logger.error("[%s] %s Failed, error=%s: %s, options=%j", method, url, err.name, err.message, options);
                    if (err.message.indexOf("ETIMEDOUT") != -1) {
                        reject(new ConnectError("连接超时"));
                    } else if (err.message.indexOf("ECONNREFUSED") != -1) {
                        reject(new ConnectError("服务器连接拒绝"));
                    }
                    reject(err);
                } else {
                    if (res.statusCode >= 200 && res.statusCode < 300) {
                        resolve(body);
                    } else {
                        logger.error("[%s] %s return code=%s, options=%j", method, url, res.statusCode, options);
                        reject(new HTTPError(res.statusCode, body));
                    }
                }
            });
        });
    }

    static doRequestWithRetry (method, url, options, retry_count) {
        var self = this;
        return this.doRequest(method, url, options).catch(function (err) {
            if (err instanceof ConnectError) {
                if (retry_count <= 0) {
                    logger.error("[%s] %s Failed, max retries reached", method, url);
                    return Promise.reject(err);
                } else {
                    return delay(1000).then(() => {
                        return self.doRequestWithRetry(method, url, options, retry_count - 1);
                    });
                }
            } else {
                return Promise.reject(err);
            }
        });
    }
    _httpsRequest (url,options) {
        var parsed_url = url_mod.parse(url);
        return new Promise((resolve, reject) => {
            var req = https.request({
                    host: parsed_url.host,
                    port: 443,
                    path: parsed_url.path,
                    pfx: options.pfx,
                    passphrase: options.passphrase,
                    method: options.method
                }, function (res) {
                    var content = '';
                    res.on('data', function (chunk) {
                        content += chunk;
                    });
                    res.on('end', function () {
                        resolve(content);
                    });
                });
        
            req.on('error', function (e) {
                reject(e);
            });
            req.write(options.data);
            req.end();
        });
    }
}

/**
 * requester.get(url, options), requester.post(url, options); 这样的，options里可以增加retry_count表示重试次数
 * BaseRequester用于继承，主要用于一些特定服务的请求，比如请求核心服务器的，就专门继承一个类，写核心调用的方法
 */

module.exports = exports = {BaseRequester, requester: new BaseRequester()};
