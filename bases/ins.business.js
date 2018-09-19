
const BaseActionManager = require("./ins.am");
const {NotImplementError} = require("../toolkits/error");

class BaseBusinessManager {
    /**
     * 撤单
     */
    static cancel (params) {
        return  this.action_manager.cancel(params);
    }

    /**
     * 理赔
     */
    static claim (params) {
        return Promise.reject(new NotImplementError("claim"));
    }

    /**
     * 批改保单
     * @param {Object} params
     */
    static modify (params) {
        return Promise.reject(new NotImplementError("modify"));
    }

    static verify (params) {
        return this.action_manager.verify(params);
    }

    static confirm (params) {
        return this.action_manager.confirm(params);
    }

    static reckon (params) {
        return this.action_manager.reckon(params);
    }

    static policyBack (params) {
        return this.action_manager.policyBack(params);
    }
}

BaseBusinessManager.action_manager = BaseActionManager;
BaseBusinessManager.support_actions = ['verify'];

module.exports = BaseBusinessManager;
