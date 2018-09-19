const moment = require("moment");
const {assert} = require("chai");
var {suite, test, setup, teardown, after, done} = require("mocha");

const error = require("../common/error");
let msg = 'aaa'
var cbs_verify = function(){

}
let prodId = 'sino1111'
let reason = 'total not match'
let objId = 'orderId'
let status_code = '200'
let body = {
    errorCode:'0'
}
suite('error', function(){
    test('BaseError',function(){
        let result = new error.BaseError(msg)
        console.log(result.message)
        console.log(result.name)
        console.log(result.constructor)
        assert.equal(result.message, msg, 'BaseError msg wrong')
        assert.equal(result.name, 'BaseError', 'BaseError name wrong')
        assert.isFunction(result.constructor, 'BaseError constructor wrong')
    })
    test('NotImplementError',function(){
        let result = new error.NotImplementError(cbs_verify)
        console.log(result.message)
        console.log(result.name)
        console.log(result.constructor)
        assert.equal(result.message, `cbs_verify is not implemented`, 'NotImplementError msg wrong')
        assert.equal(result.name, 'NotImplementError', 'NotImplementError name wrong')
        assert.isFunction(result.constructor, 'NotImplementError constructor wrong')
    })
    test('ValidateError',function(){
        let result = new error.ValidateError(msg)
        console.log(result.message)
        console.log(result.name)
        console.log(result.constructor)
        assert.equal(result.message, msg, 'ValidateError msg wrong')
        assert.equal(result.name, 'ValidateError', 'ValidateError name wrong')
        assert.isFunction(result.constructor, 'ValidateError constructor wrong')
    })
    test('VerifyError',function(){
        let result = new error.VerifyError(prodId,reason)
        console.log(result.message)
        console.log(result.name)
        console.log(result.constructor)
        assert.equal(result.message, `产品[${prodId}]核保失败，原因: ${reason}`, 'VerifyError msg wrong')
        assert.equal(result.name, 'VerifyError', 'VerifyError name wrong')
        assert.isFunction(result.constructor, 'VerifyError constructor wrong')
    })
    test('ConfirmError',function(){
        let result = new error.ConfirmError(reason)
        console.log(result.message)
        console.log(result.name)
        console.log(result.constructor)
        assert.equal(result.message, `确认出保失败: ${reason}`, 'ConfirmError msg wrong')
        assert.equal(result.name, 'ConfirmError', 'ConfirmError name wrong')
        assert.isFunction(result.constructor, 'ConfirmError constructor wrong')
    })
    test('UnauthorizedError',function(){
        let result = new error.UnauthorizedError(msg)
        console.log(result.message)
        console.log(result.name)
        console.log(result.constructor)
        assert.equal(result.message, msg, 'UnauthorizedError msg wrong')
        assert.equal(result.name, 'UnauthorizedError', 'UnauthorizedError name wrong')
        assert.isFunction(result.constructor, 'UnauthorizedError constructor wrong')
    })
    test('ObjectNotFound',function(){
        let result = new error.ObjectNotFound(objId)
        console.log(result.message)
        console.log(result.name)
        console.log(result.constructor)
        assert.equal(result.message, `${objId} Not Found`, 'ObjectNotFound msg wrong')
        assert.equal(result.name, 'ObjectNotFound', 'ObjectNotFound name wrong')
        assert.isFunction(result.constructor, 'ObjectNotFound constructor wrong')
    })
    test('OrderNotFound',function(){
        let result = new error.OrderNotFound(objId)
        console.log(result.message)
        console.log(result.name)
        console.log(result.constructor)
        assert.equal(result.message, `${objId} Not Found`, 'OrderNotFound msg wrong')
        assert.equal(result.name, 'OrderNotFound', 'OrderNotFound name wrong')
        assert.isFunction(result.constructor, 'OrderNotFound constructor wrong')
    })
    test('PolicyNotFound',function(){
        let result = new error.PolicyNotFound(objId)
        console.log(result.message)
        console.log(result.name)
        console.log(result.constructor)
        assert.equal(result.message, `${objId} Not Found`, 'PolicyNotFound msg wrong')
        assert.equal(result.name, 'PolicyNotFound', 'PolicyNotFound name wrong')
        assert.isFunction(result.constructor, 'PolicyNotFound constructor wrong')
    })
    test('ProductNotFound',function(){
        let result = new error.ProductNotFound(objId)
        console.log(result.message)
        console.log(result.name)
        console.log(result.constructor)
        assert.equal(result.message, `${objId} Not Found`, 'ProductNotFound msg wrong')
        assert.equal(result.name, 'ProductNotFound', 'ProductNotFound name wrong')
        assert.isFunction(result.constructor, 'ProductNotFound constructor wrong')
    })
    test('KnownError',function(){
        let result = new error.KnownError(msg)
        console.log(result.message)
        console.log(result.name)
        console.log(result.constructor)
        assert.equal(result.message, msg, 'KnownError msg wrong')
        assert.equal(result.name, 'KnownError', 'KnownError name wrong')
        assert.isFunction(result.constructor, 'KnownError constructor wrong')
    })
    test('HTTPError',function(){
        let result = new error.HTTPError(status_code, body)
        console.log(result.message)
        console.log(result.name)
        console.log(result.constructor)
        console.log(result.status_code)
        console.log(result.body)
        assert.equal(result.message, `[${status_code}]: ${body}`, 'HTTPError msg wrong')
        assert.equal(result.name, 'HTTPError', 'HTTPError name wrong')
        assert.isFunction(result.constructor, 'HTTPError constructor wrong')
        assert.equal(result.code, status_code, 'HTTPError code wrong')
        assert.equal(result.body, body, 'HTTPError body wrong')
    })
})