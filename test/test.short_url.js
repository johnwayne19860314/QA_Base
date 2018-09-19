const {assert} = require("chai");
var {suite, test,suiteSetup,suiteTeardown,setup,teardown} = require("mocha");
const {getShortUrl} = require("../toolkits/short_url.1");
const {requester} = require("../toolkits/base.requester");
const sinon = require('sinon')
const moment = require("moment");
suite("getShortUrl", () => {
    test("getShortUrl", () => {
        let url = 'http://test.m.anyi-tech.com/policy_detail_no.html?product_id=PINGAN20180628001&orderId=4F000100363BF277485B0000&policyNo=11111'
        return getShortUrl(url).then(r=>{
            console.log('------',r)
            // r.url_short = {
            //     a:'aaa'
            // }
             assert.isString(r.url_short, 'get short url wrong')
            return assert.equal(r.url_long, url, 'get short url  url_long wrong')
        }, e =>{
            console.log(e)
            return assert.isOk(false, `getShortUrl wrong ${ e.name }, ${e.message}`)
        })
    });
    suite("getShortUrl - exception", () => {
        var fake_request
        suiteSetup(()=> {
            fake_request = sinon.stub(requester, 'get')
        
            let fake_doRequest_response = new Error('ECONNREFUSED')
            fake_request.rejects(fake_doRequest_response)

        })
        suiteTeardown(()=>{
            fake_request.restore();
        })
        test("getShortUrl", () => {
            let url = 'http://test.m.anyi-tech.com/policy_detail_no.html?product_id=PINGAN20180628001&orderId=4F000100363BF277485B0000&policyNo=11111'
            return getShortUrl(url).then(r=>{
                console.log('------',r)
                return assert.isOk(false, 'shall get an exception')              
            }, e =>{
                console.log(`getShortUrl wrong ${ e.name }, ${e.message}`)
                return assert.equal(e.message, `短连接获取失败`,'wrong')
            })
        });
    });
    suite("getShortUrl - result not JSON", () => {
        var fake_request
        let url_short = {
                a:'aaa'
            }
        suiteSetup(()=> {
            fake_request = sinon.stub(requester, 'get')
        
            let fake_doRequest_response = JSON.stringify(url_short)
            fake_request.resolves(fake_doRequest_response)

        })
        suiteTeardown(()=>{
            fake_request.restore();
        })
        test("getShortUrl", () => {
            let url = 'http://test.m.anyi-tech.com/policy_detail_no.html?product_id=PINGAN20180628001&orderId=4F000100363BF277485B0000&policyNo=11111'
            return getShortUrl(url).then(r=>{
                console.log('------',r)
                return assert.isOk(false, 'shall get an exception')              
            }, e =>{
                console.log(`getShortUrl wrong ${ e.name }, ${e.message}`)
                return assert.equal(e.message, `短连接获取错误`,'wrong')
            })
        });
    });
});
