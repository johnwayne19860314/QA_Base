
"use strict";
var fs = require("fs");
var path = require("path");
var config = require("config");
var Sequelize = require("sequelize");
var dbconfig = {
    "username": "gateway",
    "password": "9TlYiS5aUJp2+KZc",
    "database": "api_gateway",
    "host": "116.62.28.180",
    "dialect": "mysql",
    "timezone":"+08:00",
    "logging": true
};
const sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, dbconfig);

var db = {};

fs.readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".model.js") !== -1);
    })
    .forEach(function (file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
