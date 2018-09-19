const {assert} = require("chai");
var {suite, test} = require("mocha");
const {getPolicyDetailUrl, getShortPolicyUrl} = require("../toolkits/short_url");

suite("构建保单详情链接", () => {
    test("构建成功", () => {
        let url = getPolicyDetailUrl("SHLIFE20180711002", "4F000100580C25BA4E5B0000", "2018071800001886");
        return assert.equal(url, "http://test.m.anyi-tech.com/policy_detail_no.html?product_id=SHLIFE20180711002&orderId=4F000100580C25BA4E5B0000&policyNo=2018071800001886");
    });

    test("转换成功", () => {
        return getShortPolicyUrl("HUAAN20180627002", "4F000100C870AB7F445B0000", "H10102P08400420181697609").then(result => {
            return assert.include(result, "t.cn", "转换成功");
        });
    });
});
