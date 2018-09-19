
var {requester} = require("./base.requester");
const project_configs = require("./configs");
const sms_configs = project_configs['service']['sms'];

module.exports.sendSms = (phones, content, options) => {
    if (!phones) {
        return Promise.reject(new Error("电话号码不能为空"));
    }
    if (!content) {
        return Promise.reject(new Error("内容不能为空"));
    }
    let appKey = sms_configs.key;
    if (options && options.appKey) {
        appKey = options.appKey;
    }
    return requester.post(sms_configs.url, {
        headers: {appkey: appKey},
        json: {
            phones,
            content
        }
    }).then(result => {
        if (result.code == 0) {
            return Promise.resolve(result);
        } else {
            return Promise.reject(new Error(result.msg));
        }
    });
};
