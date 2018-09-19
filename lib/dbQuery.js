var mysql = require('mysql');
var async = require('async')
dbConnection = function() {
    var connection = mysql.createConnection({
        "connectionLimit": 5,
        // "host": "116.62.31.140",
        "host": "116.62.28.180",
        "user": "cbs",
        "password": "jBS+FSt7pvvKv6Y=",
        "database": "cbs_db"
    });
    return connection
    // return connection.connect();
}
var returnSelectSql = function (params) {
    var sql = "select * from " + params.table + " ";
    var wheres = "where 1=1 ";
    var values = [];

    for (var i in params.field) {
        if (params.field[i]) {
            wheres += "and " + i + " = ? ";
            values.push(params.field[i]);
        }
    }
    sql += wheres;
    return {sql: sql, values: values};
};
var query = function (params) {
    return Promise.resolve()
        .then(function () {
            return new Promise(function (resolve, reject) {
                if (!params.sql) {
                    reject("至少有一条sql语句")
                }
                else {
                    resolve({sql: params.sql, values: params.values ? params.values : []})
                }
            })
        })
        .then(function (data) {
            return new Promise(function (resolve, reject) {
                var connection = dbConnection()
                connection.connect()
                connection.query(data.sql, data.values, function (err, result) {
                    if (err) {
                        console.log("sql执行失败", data);
                        reject("sql执行失败")
                    }
                    else {
                        connection.end()
                        resolve(result);
                    }
                });
            });
        })
};
var m = {}
m.QueryWithId_invalid = function(cb) {
    var connection = dbConnection()
    connection.connect()
    var tableName = 'core_product_info'
    var id = 'HTIC20170607001'
    var dbResult = new Array();
    //var orderReckon = testData.orderReckon
    async.waterfall([
            function(callback){
                var sql = "select *  from '"+ tableName + " where id = '"+ id + "' and valid = '1'  ORDER BY created_time desc "
                console.log(sql)
                connection.query(sql, function (err, result) {
                    if (err || result.length != 1) {throw new Error('db query wronf');}
                    dbResult[0] = result[0]
                    callback(err,dbResult)
                })
            }
        ],
        function(err,dbResult){
            connection.end()
            console.log('connection has ended')
            cb(dbResult)
        })
}
m.QueryWithId = function (params) {

    return Promise.resolve()
        .then(function () {
            return new Promise(function (resolve, reject) {
                if (!params.conditon && !params.tableName) {
                    reject("至少有检索条件")
                }
                else {
                    resolve(returnSelectSql({table: params.tableName, field: params.conditon}));
                }
            });
        })
        .then(function (data) {
            console.log("【core_product_info】select sql执行", data);
            return query(data);
          //  resolve(query(data));
        });
};
m.getProductId = function(cb) {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
        "connectionLimit": 5,
        // "host": "116.62.31.140",
        "host": "116.62.28.180",
        "user": "cbs",
        "password": "jBS+FSt7pvvKv6Y=",
        "database": "cbs_db"
    });
    var insCom = 'pingan'
    var code = 'jinsexiyang'
    connection.connect()
    var dbResult = new Array();
    async.waterfall([
            function(callback){
                var sql = "select id  from core_product_info where code = '"+ code + "' and passageway_code = '"+ insCom+" '  ORDER BY created_time desc "
                console.log(sql)
                connection.query(sql, function (err, result) {
                    if (err) {throw err;}
                    if (result.length !=1){throw new Error('查询 core_product_info')}
                    // if (['verify','toorder'].indexOf(result[0].status) != -1 ){throw new Error('订单状态不符合回录条件')}
                    dbResult[0] = result[0]
                    callback(err,dbResult)
                })
            },

        ],
        function(err,dbResult){
            connection.end()
            console.log('connection has ended')
            cb(dbResult)
        })
}

var getZhongAnCode = function(cb) {
    var mysql = require('mysql')
    var connection = dbConnection()
    connection.connect()
    var dbResult = new Array();
    async.waterfall([
            function(callback){
                var sql = "select *  from com_area where zhongan is NOT NULL "
                console.log(sql)
                connection.query(sql, function (err, result) {
                    if (err) {throw err;}
                    //if (result.length !=1){throw new Error('查询 com_area')}
                    // if (['verify','toorder'].indexOf(result[0].status) != -1 ){throw new Error('订单状态不符合回录条件')}
                    for (var i in result){
                        dbResult.push(result[i].code)
                    }
                    //dbResult[0] = result[0]
                    callback(err,dbResult)
                })
            },

        ],
        function(err,dbResult){
            connection.end()
            console.log('connection has ended')
            cb(dbResult)
        })
}
//getZhongAnCode(function (dbResult) {
//    console.log(dbResult)
//})
module.exports = exports = m;