const {assert} = require("chai");
var {suite, test} = require("mocha");
const {requester} = require("../toolkits/base.requester");
const {ConnectError} = require("../toolkits/error");

suite("请求示例", () => {
    test("请求失败，连接错误", () => {
        let url = "http://localhost:2222";
        return requester.get(url).then(r => {
            return assert.isOk(false, "有错误但未检测出");
        }, e => {
            return assert.instanceOf(e, ConnectError, "连接错误");
        });
    });
});
