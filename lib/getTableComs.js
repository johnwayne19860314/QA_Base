var mysql = require('promise-mysql');
var connection;
var tableName = ''
var data = {}
var dataArr=[]


var table = 'employer_liability_applicant'
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
            data[rows[i].column_name] = {type:rows[i].DATA_TYPE, primaryKey: false,defaultValue: rows[i].COLUMN_DEFAULT,comment: rows[i].column_comment }
           // dataArr.push(rows[i].id)
        }

    }
   // console.log(dataArr)
    console.log(data)

})