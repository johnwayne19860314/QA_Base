const {assert} = require("chai");
var {suite, test} = require("mocha");
const {getMapping,getAge,getSex,getBirth,IDCardParser} = require("../toolkits/idcard.parser");
//const {ConnectError} = require("../toolkits/error");

suite("请求示例", () => {
    test("getMapping", () => {
        let index = 0
        let value
        let type
        switch (index){
            case 0 :
                type = 'sex_type'
                value = '0' //male
                break
            case 1 :
                type = 'insured_relation'
                value = '00'
                break
            case 2 :
                type = 'card_type'
                value = '01'
                break
                
        }
        let r = getMapping(type,value)
        console.log('--------',r)
        console.log('--------index',index)
        if(index == '0'){
            assert.equal(r, '0', 'sex_type male wrong')
        }else if(index == 1){
            assert.equal(r, '00','insured_realtion 00 wrong')
        }else if(index == 2){
            assert.equal(r, '01', 'card_type 01 wrong')
        }else{
            assert.isOk(false, 'out of choice')
        }
    });
    test("getBirth", () => {
        let card_type = '03'
        let user_info = {}
        if(card_type == '01'){
            user_info.card_type = card_type
            user_info.card_id = '429006198603143010'
        }else{
            user_info.card_type = card_type
            user_info.birthday = '1986-03-14'
        }
        let r = getBirth(user_info)
        console.log('--------',r)
        assert.equal(r, '1986-03-14', 'getBirth wrong')
    });
    test("getSex", () => {
        let card_type = '03'
        let user_info = {}
        if(card_type == '01'){
            user_info.card_type = card_type
            user_info.card_id = '429006198603143010'
        }else{
            user_info.card_type = card_type
            user_info.sex = '0'
        }
        let r = getSex(user_info)
        console.log('--------',r)
        assert.equal(r, '0', 'getSex wrong')
    });
    test("getAge", () => {
        let card_type = '03'
        let user_info = {}
        if(card_type == '01'){
            user_info.card_type = card_type
            user_info.card_id = '429006198603143010'
        }else{
            user_info.card_type = card_type
            user_info.birthday = '1986-03-14'
        }
        let r = getAge(user_info)
        console.log('--------',r)
        assert.equal(r, 32, 'getAge wrong')
    });
    test("IDCardParser.parseBirth", () => {
        let card_id = '429006198603143010'
        let r = IDCardParser.parseBirth(card_id)
        console.log('--------',r)
        assert.equal(r, '1986-03-14', 'IDCardParser.parseBirth wrong')
    });
    test("IDCardParser.parseSex", () => {
        let card_id = '429006198603143010'
        let r = IDCardParser.parseSex(card_id)
        console.log('--------',r)
        assert.equal(r, '0', 'IDCardParser.parseSex wrong')
    });
});
