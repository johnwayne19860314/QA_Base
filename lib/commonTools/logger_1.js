/**
 * Created by Anyi-tech on 2017/12/1.
 */
/**
 * Created by yanghao on 2015/10/9.
 */
var log4js = require('log4js');

log4js.configure({
    "appenders": [
        {"type": "console", "category": "console"},
        {"type": "console", "category": "normal"},
        {"type": "console", "category": "core"},
        {"type": "console", "category": "mq"},
        {
            "type": "dateFile",                 // 日志文件类型，可以使用日期作为文件名的占位符.
            "filename": "./logs/",     // 日志文件名，可以设置相对路径或绝对路径.
            "pattern": "yyyyMMdd.log",  // 占位符，紧跟在filename后面
            "absolute": false,                   // filename是否绝对路径
            "alwaysIncludePattern": true,       // 文件名是否始终包含占位符
            "category": "console"               // 记录器名
        },
        // 定义一个日志记录器
        {
            "type": "dateFile",                 // 日志文件类型，可以使用日期作为文件名的占位符.
            "filename": "./logs/",     // 日志文件名，可以设置相对路径或绝对路径.
            "pattern": "yyyyMMdd.log",  // 占位符，紧跟在filename后面
            "absolute": false,                   // filename是否绝对路径
            "alwaysIncludePattern": true,       // 文件名是否始终包含占位符
            "category": "normal"               // 记录器名
        },
        {
            "type": "dateFile",
            "filename": "./logs/core/",
            "pattern": "yyyyMMdd.log",
            "absolute": false,
            "alwaysIncludePattern": true,
            "category": "core"
        },
        {
            "type": "dateFile",
            "filename": "./logs/mq/",
            "pattern": "yyyyMMdd.log",
            "absolute": false,
            "alwaysIncludePattern": true,
            "category": "mq"
        }
    ],
    "levels": {
        "console": "TRACE",
        "normal": "TRACE",
        "connect": "TRACE",
        "visit": "TRACE"
    },
    // 设置记录器的默认显示级别，低于这个级别的日志，不会输出
    replaceConsole: true
});

var m = {};
m.normal = log4js.getLogger('normal');
m.core = log4js.getLogger('core');
m.mq = log4js.getLogger("mq");
m.connect = log4js.connectLogger(m.normal, {level: 'debug', format: ':method :url'});

module.exports = exports = m;