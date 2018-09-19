const {assert} = require("chai");
var {suite, test, setup, teardown, after, done} = require("mocha");
const {NotImplementError} = require("../toolkits/error");
const BaseActionManager = require("../bases/ins.am");

suite('产品功能完善', function () {
    test("试算完成", function () {
        return BaseActionManager.reckon().then(r => {
            return assert.isOk(false, `应该报错为未实现异常`);
        }, e => {
            if (e instanceof NotImplementError) {
                return assert.isOk(true, "试算功能正常");
            } else {
                console.dir(e);
                return assert.isOk(false, "试算功能异常");
            }
            done();
        });
    });

    test("投保完善", function () {
        return BaseActionManager.verify().then(r => {
            return assert.isOk(false, `应该报错为未实现异常`);
        }, e => {
            if (e instanceof NotImplementError) {
                return assert.isOk(true, "投保功能已支持");
            } else {
                console.dir(e);
                return assert.isOk(false, "投保功能异常");
            }
            done();
        });
    });

    test("出单正常", function () {
        return BaseActionManager.confirm().then(r => {
            return assert.isOk(false, `应该报错为未实现异常`);
        }, e => {
            if (e instanceof NotImplementError) {
                return assert.isOk(true, "出保功能已支持");
            } else {
                console.dir(e);
                return assert.isOk(false, "出保功能异常");
            }
            done();
        });
    });
//not registered
    // test("批改正常", function () {
    //     return BaseActionManager.modify().then(r => {
    //         return assert.isOk(false, `应该报错为未实现异常`);
    //     }, e => {
    //         if (e instanceof NotImplementError) {
    //             return assert.isOk(true, "批改保单正常");
    //         } else {
    //             console.dir(e);
    //             return assert.isOk(false, "批改保单异常");
    //         }
    //         done();
    //     });
    // });

    test("确保之后，由保险公司的回调，一般是给出保单号", function () {
        return BaseActionManager.confirmCallback().then(r => {
            return assert.isOk(false, `应该报错为未实现异常`);
        }, e => {
            if (e instanceof NotImplementError) {
                return assert.isOk(true, "确保之后，由保险公司的回调，一般是给出保单号");
            } else {
                console.dir(e);
                return assert.isOk(false, "确保之后，由保险公司的回调，一般是给出保单号 异常");
            }
            done();
        });
    });
    test("回录保单", function () {
        return BaseActionManager.policyBack().then(r => {
            return assert.isOk(false, `应该报错为未实现异常`);
        }, e => {
            if (e instanceof NotImplementError) {
                return assert.isOk(true, "回录保单正常");
            } else {
                console.dir(e);
                return assert.isOk(false, "回录保单异常");
            }
            done();
        });
    });
    test("发起支付，支付的逻辑完成后，需要跳转到保险公司/第三方/安逸自己的支付", function () {
        return BaseActionManager.pay().then(r => {
            return assert.isOk(false, `应该报错为未实现异常`);
        }, e => {
            if (e instanceof NotImplementError) {
                return assert.isOk(true, "ok");
            } else {
                console.dir(e);
                return assert.isOk(false, "wrong");
            }
            done();
        });
    });
    test("支付完成后保险公司的支付完成回调", function () {
        return BaseActionManager.postPay().then(r => {
            return assert.isOk(false, `应该报错为未实现异常`);
        }, e => {
            if (e instanceof NotImplementError) {
                return assert.isOk(true, "ok");
            } else {
                console.dir(e);
                return assert.isOk(false, "wrong");
            }
            done();
        });
    });
});
