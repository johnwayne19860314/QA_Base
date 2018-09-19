/**
 * Created by Anyi-tech on 2017/4/6.
 */
require('date-utils')
var array = require('./array.js')
var string_ = require('./string.js')
var  xlsx = require("node-xlsx");
var assert = require("assert");
const util = require("util");
var IDCard = function (Num) {
    if (Num.length != 18) {
        return false;
    }
    var x = 0;
    for (var i = 18; i >= 2; i--) {
        x = x + (square(2, (i - 1)) % 11) * parseInt(Num.charAt(19 - i - 1));
    }
    x %= 11;
    var y = 12 - x;
    if (x == 0)
        y = '1';
    if (x == 1)
        y = '0';
    if (x == 2)
        y = 'X';
    return y;
};
var  m= {
    validate: {
        /**
         * 验证参数为空  为空：true 不为空：false
         * @param object 待验证的值
         * author:wlzhou
         * create time:2016-08-03
         */
        isEmpty: function (object) {
            if (null == object || "" == object || undefined == object || "undefined" == object || "null" == object) {
                return true;
            } else {
                return false;
            }
        },
        isCard: function(object){
            var iscard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            return iscard.test(object)

        },
        isIdCard: function(num){
            var valid_code = num.charAt(17);
            if (valid_code == IDCard(num)) {
                return true;
            } else {
                return false;
            }

        },
        isEmail: function(object){
            var reg = new RegExp("[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+$");
            return reg.test(object)

        },
        isNull: function(arr){
            var flag=true;
            arr.forEach(function(value,i){
                //console.log(value)
                if (value === null || value === undefined || value === '') {
                    flag=false;
                }
            })
            return !flag;
        }
    },
    fileParse:{
        /*
        xlsxParse:function(filePath){
            var promise = new Promise(function (resolve,reject) {
                var list = xlsx.parse(filePath);
                console.log('the file path is', filePath)
               // console.log(list)
                if(error){
                    reject(error)
                }else{
                    resolve(list)
                }
            })
            return promise
        }
        */
        xlsxParse:function(filePath){
            var list = xlsx.parse(filePath);
            return list
        }
    },
    sleep:{
        //阻塞
        sleepSync:function (numberMillis) {
            var now = new Date();
            var exitTime = now.getTime() + numberMillis;
            while (true) {
                now = new Date();
                if (now.getTime() > exitTime)
                    return;
            }
        },
        //非阻塞
        sleep:function (numberMillis) {
           return new Promise(resolve => setTimeout(resolve,numberMillis))
        }
    },
    generator:{
        'getID_old':function(name) {
            //console.log(name);
            var buf = new Buffer(12);
            var host = 1;//process.env.RISKEYS_HOST;
            var pid = process.pid;
            var time = Math.round((new Date).getTime() / 1000);
            var record = {}
            if (record[name] == null) record[name] = {time: 0, seq: 0};
            //console.log(record[name].time,time);
            if (record[name].time != time) {
                record[name].time = time;
                record[name].seq = 0;
            } else {
                record[name].seq++;
            }
            var seq = record[name].seq;
            var pname = name + "\0";
            buf.write(pname, 0, 2);
            // buf.writeUInt8(name.charCodeAt(0));
            //buf.writeUInt8(name.charCodeAt(1),1);
            buf.writeUInt16LE(host, 2);
            buf.writeUInt16LE(pid & 0xffff, 4);
            buf.writeUInt32LE(time, 6);
            buf.writeUInt16LE(seq, 10);
            var id = buf.toString("hex").toUpperCase();
            return id;
        },

    },
    orderRelated: {
        getEffectDate: function () {
            var index = arguments[0]?arguments[0]:0
            var index_1 = arguments[1]?arguments[1]:0
            var index_2 = arguments[2]?arguments[2]:0
            var index_3 = arguments[3]?arguments[3]:0
            var index_4 = arguments[4]?arguments[4]:0
            var index_5 = arguments[5]?arguments[5]:0
            var today = new Date();
            if(index instanceof String){
                index = parseInt(index)
            }
            var efect_date_1 = today.add({months: index})
            var efect_date = efect_date_1.add({days: index_1})
            var efect_date_2 = efect_date.add({weeks: index_2})
            var efect_date_3 = efect_date_2.add({hours: index_3})
            var efect_date_4 = efect_date_3.add({minutes: index_4})
            var efect_date_5 = efect_date_4.add({seconds: index_5})
            //var date_str = parseInt(efect_date_5.toFormat("YYYYMMDD")).toString()
            //console.log(index,index_1,date_str)
            //return date_str.slice(0, 4) + '-' + date_str.slice(4, 6) + '-' + date_str.slice(6, 8)
            return efect_date_5.clearTime().toFormat("YYYY-MM-DD HH24:MI:SS").toString()
        },
        getExpireDate: function () {
            var index = arguments[0]?arguments[0]:10
            var today = new Date();
            var expire_date = today.add({months: index})
            //var date_str = parseInt(efect_date.toFormat("YYYYMMDD")).toString()
            //console.log(date_str)
            //return date_str.slice(0, 4) + '-' + date_str.slice(4, 6) + '-' + date_str.slice(6, 8)
            return expire_date.clearTime().addDays(1).addSeconds(-1).toFormat("YYYY-MM-DD HH24:MI:SS").toString()
        },
        getEffectDate_1: function () {
            var index = arguments[0]?arguments[0]:1
            var today = new Date();
            var efect_date = today.add({days: index})
            var date_str = parseInt(efect_date.toFormat("YYYYMMDD")).toString()
            console.log(date_str)
            return date_str.slice(0, 4) + '-' + date_str.slice(4, 6) + '-' + date_str.slice(6, 8)
        },
        // * 18位身份证号最后一位校验
        getIDChar18: function (id) {
            var arr = id.split(''), sum = 0, vc = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            for (var i = 0; i < 17; i++) sum += vc[i] * parseInt(arr[i]);
            return ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'][sum % 11];
        },
        //the priceStage is  66-70
        getBirthday: function (range) {
            var diff = range.split('-')[0]
           // var month_ = ['01','02','03','04','05','06','07','08','09','10','11','12']
            if(/^\d+天$/g.test(diff)){
                var day = diff.replace(/^(\d+)天$/g, '$1');
//console.log()
                var today = new Date();
                var date_ = today.add({days: -day})
               // return year.getFullYear().toString() + '-04-05'
                return date_.toFormat('YYYY-MM-DD').toString()
            }else{
                var yearInt = diff * 1
//console.log()
                var today = new Date();
                var year = today.add({years: -yearInt})
                return year.getFullYear().toString() + today.toFormat('YYYY-MM-DD').toString().slice(4)
            }

        },
        getPlanDuration: function (planRan) {
           // var planRan = '5-8天'
            var duration
            if (/^\d+天$/g.test(planRan)) {
                duration = planRan
            }else if(/^全年保障$/g.test(planRan)){
                duration = '1年'
            }else{
                var aaa = planRan.split('-')[1]
                var day = aaa.replace(/^(\d+)天$/g, '$1') -1;
                duration = day.toString() + '天'
            }
            return duration
        },
        getCardIdByAgeRange:function(ageRang){
            //var range = '13-26'
            var birthday = m.orderRelated.getBirthday(ageRang)
            console.log(birthday)
            //beijing areaCode
            var areaCode = [110101,
                110102,
                110105,
                110106,
                110107,
                110108,
                110109,
                110111,
                110112,
                110113,
                110114,
                110115,
                110116,
                110117,
                110228,
                110229]
            var birthday_ = birthday.split('-')
            var cardId = '110101-1980-01-01-041-6'.split('-')
            cardId[0] = array.getOneElement(areaCode).toString()
            cardId[1] = birthday_[0]
            cardId[2] = birthday_[1]
            cardId[3] = birthday_[2]
            var sex = arguments[1]? arguments[1] : -1
            if(sex == 1){
                cardId[4] = string_.makeIdCard(3,1)
                    //array.getOneElement(['040','232','454','246','478','140','332','554','346','578'])
            }else if(sex == 2){//male
                cardId[4] = cardId[4] = string_.makeIdCard(3,2)
                    //array.getOneElement(['041','233','457','245','479'])
            }else{
                cardId[4] = cardId[4] = string_.makeIdCard(3)
                    //array.getOneElement(['041','233','457','245','479','040','232','454','246','478'])
            }
               //id duplicate
            var id_17 = cardId[0]+cardId[1]+cardId[2]+cardId[3]+cardId[4]
            var validCode = m.orderRelated.getIDChar18(id_17)
            console.log('the valid code is ', validCode)
//cardId[5] = validCode
            var cardId_ = id_17 + validCode
            return cardId_
        },
        randomSelect : function(Package){
            var  Types = []
            for (var key in Package) {
                Types.push(key)
            }
            console.log('the Types are', Types)
            var Type = array.getOneElement(Types)
            return Type
            //console.log('the product type is ', m.productType)
        },
        getDiffDay : function(date1,date2){
            var date1 = new Date(date1).clearTime();
            var date2 = new Date(date2).clearTime();

            var times = date2.getTime() - date1.getTime();
            return parseInt(times / (24 * 3600 * 1000));
        },
        parseBirth : function(idcard){
            let year, month, day;
            if (idcard.length == 18) {
                year = idcard.slice(6, 10);
                month = idcard.slice(10, 12);
                day = idcard.slice(12, 14);
            } else if (idcard.length == 15) {
                year = '19' + idcard.slice(6, 8);
                month = idcard.slice(8, 10);
                day = idcard.slice(10, 12);
            } else {
                throw new Error("invalid idcard");
            }
            return `${year}-${month}-${day}`;
        },
        parseSex : function(idcard){
            if (idcard.length == 18) {
                return parseInt(idcard.charAt(16)) % 2 == 0 ? "1" : "0";
            } else if (idcard.length == 15) {
                return parseInt(idcard.charAt(14)) % 2 == 0 ? "1" : "0";
            } else {
                return "2";
            }
        },
         //this method use recurse to compare. it only apply to JSON not including array. will add it later if case come up
         recurseComp: function(x,y){
            let keysList = []
            // tell whether it is number
            //if(typeof x != 'number'){
            if(typeof x == 'Object'){ //兼容其他类型
                keysList = Object.keys(x)
                if(keysList.length == 0){
                    console.log('level 1 is empty', x)
                }else{
                    //console.log('level 1 is ',keysList)
                }
                //console.log(keysList)
                for (var i in keysList){
                    //if(typeof x[keysList[i]] == 'number'){
                    if(typeof x[keysList[i]] != 'Object'){ //兼容其他类型
                        if(x[keysList[i]] != y[keysList[i]]){
                            // console.log('--false')
                            // console.log('the diff in x is', x[keysList[i]])
                            // console.log('the diff in y is', y[keysList[i]])
                            assert.equal(1,-1,util.format('the diff in x %s; the diff in y %s', x[keysList[i]]),y[keysList[i]])
                        }
                    }else{
                        recurseComp(x[keysList[i]],y[keysList[i]])
                    }
                }
            }else{
                if(x!=y){
                    // console.log('--false x--y')
                    console.log('the diff in x is', x)
                    console.log('the diff in y is', y)
                    assert.equal(1,-1,'x,y not object and not equal wrong')
                }
            }
        }
    }
}

//var aaaa = m.orderRelated.getEffectDate()
//console.log(aaaa)
module.exports = exports = m;