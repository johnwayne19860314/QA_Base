const {NotImplementError} = require("../toolkits/error");
/**
 * 是一个标准的保险产品的基类，负责定义标准的方法
 */
class BaseProductActionManager {
    /**
     * 试算
     */
    static reckon (params) {
        return Promise.reject(new NotImplementError("reckon"));
    }

    /**
     * 核保
     */
    static verify (params) {
        return Promise.reject(new NotImplementError("verify"));
    }
    /**
     * 出单
     */
    static confirm (params) {
        return Promise.reject(new NotImplementError("confirm"));
    }

    /**
     * 退保
     * @param params
     * @returns {Promise<never>}
     */
    static cancel(params){
        return Promise.reject(new NotImplementError("cancel"));
    }

    /**
     * 确保之后，由保险公司的回调，一般是给出保单号
     * @param {Object} params
     */
    static confirmCallback (params) {
        return Promise.reject(new NotImplementError("confirmCallback"));
    }

    /**
     * 发起支付，支付的逻辑完成后，需要跳转到保险公司/第三方/安逸自己的支付
     */
    static pay (params) {
        return Promise.reject(new NotImplementError("pay"));
    }

    /**
     * 支付完成后保险公司的支付完成回调
     */
    static postPay (params) {
        return Promise.reject(new NotImplementError("postPay"));
    }

    /**
     * 保单回录
     * @param {Object} params
     */
    static policyBack (params) {
        return Promise.reject(new NotImplementError("policyBack"));
    }

    /**
     * 关于回调，比较好的是用观察者模式，但是短期内也可以直接往各个product里写
     */
    // static notify (action, changes) {
    //     for (let obsever of this.observer_list) {
    //         obsever.notify(action, changes);
    //     }
    // }
}

BaseProductActionManager.requester = null; // 绑定的请求类，通过该请求类发起网络请求给保险公司

module.exports = BaseProductActionManager;
