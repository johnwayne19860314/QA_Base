const {assert} = require("chai");
var {suite, test, setup, teardown, after, done} = require("mocha");
const {NotImplementError} = require("../toolkits/error");
const ActionManager = require("../bases/ins.business");

suite('产品功能完善', function () {
    test("试算完成", function () {
        return ActionManager.reckon().then(r => {
            return assert.isOk(false, `应该报错为未实现异常`);
        }, e => {
            if (e instanceof NotImplementError) {
                return assert.isOk(true, "试算功能正常");
            } else {
                console.dir(e);
                return assert.isOk(false, "试算功能异常");
            }
            
        });
    });

    test("投保完善", function () {
        return ActionManager.verify().then(r => {
            return assert.isOk(false, `应该报错为未实现异常`);
        }, e => {
            if (e instanceof NotImplementError) {
                return assert.isOk(true, "投保功能已支持");
            } else {
                console.dir(e);
                return assert.isOk(false, "投保功能异常");
            }
            
        });
    });

    test("出单正常", function () {
        return ActionManager.confirm().then(r => {
            return assert.isOk(false, `应该报错为未实现异常`);
        }, e => {
            if (e instanceof NotImplementError) {
                return assert.isOk(true, "出保功能已支持");
            } else {
                console.dir(e);
                return assert.isOk(false, "出保功能异常");
            }
            
        });
    });

    test("批改正常", function () {
        return ActionManager.modify().then(r => {
            return assert.isOk(false, `应该报错为未实现异常`);
        }, e => {
            if (e instanceof NotImplementError) {
                return assert.isOk(true, "批改保单正常");
            } else {
                console.dir(e);
                return assert.isOk(false, "批改保单异常");
            }
            
        });
    });


    test("回录保单", function () {
        return ActionManager.policyBack().then(r => {
            return assert.isOk(false, `应该报错为未实现异常`);
        }, e => {
            if (e instanceof NotImplementError) {
                return assert.isOk(true, "回录保单正常");
            } else {
                console.dir(e);
                return assert.isOk(false, "回录保单异常");
            }
            
        });
    });
    test("理赔", function () {
        return ActionManager.claim().then(r => {
            return assert.isOk(false, `应该报错为未实现异常`);
        }, e => {
            if (e instanceof NotImplementError) {
                return assert.isOk(true, "ok");
            } else {
                console.dir(e);
                return assert.isOk(false, "wrong");
            }
            
        });
    });


    test("退保", function () {
        return ActionManager.cancel().then(r => {
            return assert.isOk(false, `应该报错为未实现异常`);
        }, e => {
            if (e instanceof NotImplementError) {
                return assert.isOk(true, "退保保单正常");
            } else {
                console.dir(e);
                return assert.isOk(false, "退保保单异常");
            }
            done();
        });
    });
});
