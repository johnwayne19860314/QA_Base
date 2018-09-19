const {assert} = require("chai");
var {suite, test,suiteSetup,suiteTeardown,setup,teardown} = require("mocha");
const {sendSms} = require("../toolkits/sms");
const {requester} = require("../toolkits/base.requester");
const sinon = require('sinon')
const moment = require("moment");
let phone = '18916134195'
let content  = 'this is a phone msg'
let options = {
    //appKey:'111111'
}
suite("sms", () => {
    test("sendSms", () => {
        return sendSms(phone,content,options).then(r=>{
            console.log('------',r)
           
            return assert.equal(r.code, '0', 'sendSms wrong')
        }, e =>{
            console.log(e)
            return assert.isOk(false, `sendSms wrong ${ e.name }, ${e.message}`)
        })
    });
    suite("sms - exception", () => {
        var fake_request
        suiteSetup(()=> {
            fake_request = sinon.stub(requester, 'post')
        
            let fake_doRequest_response = new Error('ECONNREFUSED')
            fake_request.rejects(fake_doRequest_response)

        })
        suiteTeardown(()=>{
            fake_request.restore();
        })
        test("sendSms", () => {
            return sendSms(phone,content,options).then(r=>{
                console.log('------',r)
                return assert.isOk(false, 'shall get an exception')              
            }, e =>{
                console.log(`sendSms wrong ${ e.name }, ${e.message}`)
                return assert.equal(e.message, `ECONNREFUSED`,'wrong')
            })
        });
    });
});
