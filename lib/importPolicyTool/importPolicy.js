//used to import in batch
var testData = require("./testData.js")
var excelNames = testData.excelNames
var com_prod_map = testData.com_prod_map

var baseUrl = testData.baseUrl
//var baseUrl = 'http://operation2.anyitech.ltd'

var urls = testData.urls
var request = require('request');
var fs = require('fs');
var assert = require("assert")
const  async = require("async");

var excelCount = 12
/*var excelNames_new = []
for (var k = 8; k < excelNames.length;k++){
    excelNames_new.push(excelNames[k])
}*/
async.whilst(
    ()=>{
        return excelCount < excelNames.length
    },
    (callback)=>{
        var excelName = excelNames[excelCount]
        var bzName = excelName.split('-')[0]
        var compName = excelName.split('-')[1]
        var prodName = excelName.split('-')[2]
        excelCount++
        console.log(compName, prodName)
        var prodId = com_prod_map[compName][prodName]
        console.log('----the product id ---- is', prodId)
        var inputData = {
            getChannelByName:{
                name :bzName,
            },
            getProductListByAppId:{
                appid:''
            },
            uploadExcelFile:{

            },
            importOffLineData:{

            },
            getPolicyList:{
                "start": 0,
                "length": 10,
                "keyword": {
                    "appid": "",
                    "productName": "",
                },
                draw:'10'
            },
            getAllOrderListNew:{
                "start": 0,
                "length": 10,
                "keyword": {
                    "appid": "",
                    "productName": "", //it do not use it in the interface
                    //  "start_time": "",
                    //   "end_time": "",
                    // "policy_no": "",
                },
                draw:'10'
            },
        }
        var prodName_db = ''  //it might not be the same between db and excel
        var appId_channel
        var prodInfo = []
        var excelInfo = []
        var policyNumber = ''
        var uploadExcelFile = function () {
            return new Promise(function (resolve, reject) {
//请求参数
                var formData = {
                    // Pass data via Streams
                    file: fs.createReadStream('d://Testing//Automation//API_JS//'+excelName+'.xlsx')
                };
                //console.log('<<<', formData)
//模拟请求
                request.post({
                    //url: 'http://operation2.anyitech.ltd/ws_opplatform/policy/importOfflinePolicy',
                    url: baseUrl +  '/ws_opplatform/policy/importOfflinePolicy',
                    formData: formData
                }, function (err, res, body) {
                    if (err) {
                        console.log('upload failed:', err);
                    }
                    // res.send(body);
                    excelInfo = JSON.parse(body).result
                    assert.equal(JSON.parse(body).code, '0', 'response status wrog')
                    if(err){
                        reject(err)
                    }else{
                        resolve('ok')
                    }
                });
            })
        }
        var requestURL = function(testId){
            return new Promise(function (resolve, reject) {
                var method = 'POST'
                var formData
                var headers = {
                    // "Content-Type":'application/x-www-form-urlencoded',
                    "Content-Type": 'application/json; charset=UTF-8',
                    //"Content-Type":'multipart/form-data',
                    //   'Host':'127.0.0.1:8080',
                    //'User-Agent': 'request'
                    // 'Content-Length': 37
                }
                var url = baseUrl + urls[testId]
                var body = inputData[testId]
                if(testId == 'getProductListByAppId'){
                    body.appid = appId_channel
                }else if(testId == 'uploadExcelFile'){
                    formData = {
                        // Pass data via Streams
                        file: fs.createReadStream('d://Testing//Automation//API_JS//'+excelName+'.xlsx')
                    };
                    headers = {
                        // "Content-Type":'application/x-www-form-urlencoded',
                        // "Content-Type": 'application/json; charset=UTF-8',
                        // "Content-Type":'multipart/form-data',
                    }
                }else if(testId == 'importOffLineData'){
                    body.result = excelInfo
                }
                else if(testId == 'getPolicyList'){
                    body.keyword.appid = appId_channel
                    body.keyword.productName = prodName_db
                }
                else if(testId == 'getAllOrderListNew'){
                    body.keyword.appid = appId_channel
                    body.keyword.productName = prodName_db
                }
                request({
                    //url: 'http://operation2.anyitech.ltd/ws_opplatform/policy/importOfflinePolicy',
                    url: url,
                    body: JSON.stringify(body),
                    method:method,
                    headers: headers,
                    formData:formData
                }, function (err, res, body) {
                    //prodInfo = JSON.parse(body).result
                    if(testId == 'getChannelByName'){
                        appId_channel = JSON.parse(body).result.id
                        console.log('the appid_channel is', appId_channel)
                    }else if(testId == 'getProductListByAppId'){
                        prodInfo = JSON.parse(body).result
                    }
                    else if(testId == 'uploadExcelFile'){
                        excelInfo = JSON.parse(body).result
                    }
                    assert.equal(JSON.parse(body).code, '0', 'response status wrog')

                    if(err){
                        reject(err)
                    }else{
                        resolve(body)
                    }
                });
            })
        }
        requestURL('getChannelByName')
            .then(function (data) {
                return requestURL('getProductListByAppId')
                // done()
            })
            .then(function (data_) {
                console.log(data_)
                console.log(prodInfo)
                return uploadExcelFile()
            })
            .then(function (data_2) {
                // console.log(data_2)
                console.log(excelInfo)
                policyNumber = excelInfo[0].policy_no
                for (var i in excelInfo){
                    var product = {}
                    product.id = prodId
                    //product.name = prodName
                    for (var j in prodInfo){
                        if(prodInfo[j].product_id == prodId){
                            product.name = prodInfo[j].product_name
                            prodName_db = prodInfo[j].product_name
                            break
                        }
                    }
                    excelInfo[i].appid = appId_channel;
                    excelInfo[i].request.product = product;
                }
                return requestURL('importOffLineData')
            })
            .then(function (data_3) {
                console.log(data_3)
                return requestURL('getAllOrderListNew')
            })
            .then(function (data_4) {
                console.log(data_4)
                return requestURL('getPolicyList')
            })
            .then(function (data_5) {
                console.log(data_5)
                callback(null)
            })
            .catch(function (err) {
                console.log("错误信息" + err)
                callback(err)
            })
    },
    (err) =>{
        console.log("import policy data err:"+err)
    }
)

