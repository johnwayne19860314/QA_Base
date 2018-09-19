var mysql = require('promise-mysql');
var connection;
var tableName = ''
var data = {}
var dataArr=[]

var cbsConn = {
    "connectionLimit": 5,
    // "host": "116.62.31.140",
    "host": "116.62.28.180",
    "user": "cbs",
    "password": "jBS+FSt7pvvKv6Y=",
    "database": "cbs_db"
}

var ybConn = {
    "connectionLimit": 5,
    // "host": "116.62.31.140",
    "host": "116.62.28.180",
    "user": "riskeys_yb",
    "password": "Ja5pe+hYjBc=",
    "database": "riskeys_yb"
}
var coupon = {
    "connectionLimit": 5,
    // "host": "116.62.31.140",
    "host": "116.62.28.180",
    "user": "coupon",
    "password": "Kdfeh+FswyAdyawfL5",
    "database": "coupon_db"
}
var CPS = {
    "connectionLimit": 5,
    "host": "116.62.28.180",
    "user": "payment",
    "password": "+ryLmhG66BZHbtc=",
    "database": "payment_db",
}
var SSO = {
    "connectionLimit": 5,
    "host": "116.62.28.180",
    "user": "riskeys",
    "password": "Zut2nfneMU39PEDD!",
    "database": "riskeys",
}
var prePay = {
    "connectionLimit": 5,
    "host": "116.62.28.180",
    "user": "riskeys",
    "password": "Zut2nfneMU39PEDD!",
    "database": "riskeys",
}
var riskeyBack = {
    "connectionLimit": 5,
    "user": "riskeys-back",
    "password": "md+DsS3MTUTesI",
    "database": "riskeys-back",
    "host": "116.62.28.180",
}
var GBG = {
    "connectionLimit": 5,
    "user": "gbg",
    "password": "8NHl9jqNP/2wGiQ=",
    "database": "gbg",
    "host": "116.62.28.180",
}
var cloud_promotion = {
    "connectionLimit": 5,
    "user": "promotion",
    "password": "I3Q1kNhQ+v",
    "database": "cloud_promotion",
    "host": "116.62.28.180",
}
var table = 'i_pingan_public_insured'
mysql.createConnection(cbsConn).then(function(conn){
    connection = conn;
    var sql = "select DATA_TYPE,COLUMN_DEFAULT,column_name, column_comment  from Information_schema.columns  where table_Name = '"+ table +"'"
   // var sql = "select id  from questionsets"
    console.log(sql)
    return connection.query(sql);
}).then(function(rows){
    connection.end();
    for (var i in rows){
      //  dataArr[i] = rows[i]
        if (rows[i].column_name == 'id'){
            data.id = {type:rows[i].DATA_TYPE, primaryKey: true,defaultValue: rows[i].COLUMN_DEFAULT,comment: rows[i].column_comment }
        }else{
            data[rows[i].column_name] = {type:rows[i].DATA_TYPE, primaryKey: true,defaultValue: rows[i].COLUMN_DEFAULT,comment: rows[i].column_comment }
           // dataArr.push(rows[i].id)
        }

    }
   // console.log(dataArr)
    console.log(data)

})