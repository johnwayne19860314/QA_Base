
"use strict";
var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var _mysql = {
    "user": "riskeys-back",
    "password": "md+DsS3MTUTesI",
    "database": "riskeys-back",
    "host": "116.62.28.180",
    "dialect": "mysql",
    "pool": {
        "max": 5,
        "min": 0,
        "idle": 10000
    }
}

const sequelize = new Sequelize(_mysql.database, _mysql.user, _mysql.password, {
    host: _mysql.host,
    dialect: _mysql.dialect,
    timezone: "+08:00",   //时间格式设置为东八区
    pool: _mysql.pool
});

var db = {};

fs.readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".model.js") !== -1);
    })
    .forEach(function (file) {
        var model = sequelize.import(path.join(__dirname, file));
        if (model.name == "questions") {
            console.dir(model);
        }

        db[model.name] = model;
    });

Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }

    // db[modelName].sync({force: true}).then(() => {
    //     console.log("sync %s OK", modelName);
    // }).catch((err) => {
    //     console.log("sync %s error: %s", modelName, err);
    // });
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
