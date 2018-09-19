
var fs        = require("fs");
var path = require('path');
//var config = require("config");
var _sequelize = require("sequelize");
//var _log = require("../common/logger").normal;
var _mysql = {
    "host": "116.62.28.180",
    "user": "promotion",
    "password": "I3Q1kNhQ+v",
    "database": "cloud_promotion",
    "dialect": "mysql",
    "pool": {
        "max": 5,
        "min": 0,
        "idle": 10000
    }
}

const sequelize = new _sequelize(_mysql.database, _mysql.user, _mysql.password, {
    host: _mysql.host,
    dialect: _mysql.dialect,
    timezone: "+08:00",   //时间格式设置为东八区
    pool: _mysql.pool
});

var db  = {};
console.log("初始化数据源 sequelize ")
fs.readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        console.log(model.name+"加载成功 sequelize");
        db[model.name] = model;
    });

console.log("初始化数据源完成 sequelize");
Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

var m={};
m.db = db;
m.sequelize = sequelize;
m._sequelize = _sequelize;
module.exports = m;