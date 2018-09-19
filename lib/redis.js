/**
 * Created by Anyi-tech on 2017/11/28.
 */
redisConnection = function() {
    var redis   = require('redis');
    console.log('going to connect the redis')
    // var client = redis.createClient('6379',"116.62.31.140");
    var client = redis.createClient('6379',"116.62.28.180");
    client.auth('Zut2nfneMU39PEDE')
    console.log('redis connected and authed')
    return client
    // return connection.connect();
}


/**
 * redis相关方法类
 * create time：2017-03-29
 * author：zack zou
 */
var dbconn ={
    redis:redisConnection()
}

var m = {};

/**
 * redis set方法
 * @param key
 */
m.get = function (key) {
    //获取缓存
    var promise = new Promise(function (resolve, reject) {

        dbconn.redis.get(key, function (err, response) {
            if (err) {
                reject(err);
            }
            else {
                resolve(response);
            }
        });
    });
    return promise;
}

/**
 * 缓存记录保存
 * @param key
 * @param value
 * @param expire 有效期，单位是秒
 * @returns {*}
 */
m.set = function (key, value, expire) {
    var promise = new Promise(function (resolve, reject) {
        //缓存记录保存
        try {
            dbconn.redis.set(key, value);
            if (expire) {
                dbconn.redis.expire(key, expire);
            }
            resolve("完成");
        }
        catch (e) {
            reject(e);
        }
    });
    return promise;
}

/**
 * 删除元素
 * @param key
 * @returns {Promise}
 */
m.del = function (key) {
    return new Promise(function (resolve, reject) {
        //缓存记录保存
        try {
            dbconn.redis.del(key);
            resolve("完成");
        }
        catch (e) {
            reject(e);
        }
    });
}


/**
 * Redis Hget 命令用于返回哈希表中指定字段的值。
 * @param key key名称
 * @param field 字段名称
 * @returns {Promise}
 */
m.hget = function (key, field) {
    //业务执行
    var promise = new Promise(function (resolve, reject) {
        dbconn.redis.hget(key, field, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
    return promise;
}

/**
 * Redis Hset 命令用于设置哈希表中指定字段的值。
 * @param key key名称
 * @param field 字段名称
 * @param value 值
 */
m.hset = function (key, field, value) {

    var promise = new Promise(function (resolve, reject) {

        dbconn.redis.hset(key, field, value, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
    return promise;
}

/**
 * Redis Hdel 命令用于删除哈希表指定的字段值
 * @param key
 * @param field
 */
m.hdel = function (key, field) {
    var promise = new Promise(function (resolve, reject) {
        //删除
        dbconn.redis.hdel(key, field, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
    return promise;
}

/**
 * Redis INCR命令用于将键的整数值递增1。如果键不存在，则在执行操作之前将其设置为0。
 * 如果键包含错误类型的值或包含无法表示为整数的字符串，则会返回错误。此操作限于64位有符号整数。
 * @param key incr的key
 */
m.incr = function (key) {
    return new Promise(function (resolve, reject) {
        //incr
        dbconn.redis.incr(key, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}


/**
 * Redis Llen 命令用于返回列表的长度。 如果列表 key 不存在，则 key 被解释为一个空列表，返回 0 。 如果 key 不是列表类型，返回一个错误。
 * @param key KEY_NAME
 */
m.llen = function (key) {
    return new Promise(function (resolve, reject) {
        //llen，返回具体的记录数长度
        dbconn.redis.llen(key, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}


/**
 * Redis Rpop 命令用于移除并返回列表的最后一个元素。
 * @param key KEY_NAME
 */
m.rpop = function (key) {
    return new Promise(function (resolve, reject) {
        //llen，返回具体的记录数长度
        dbconn.redis.rpop(key, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}


/**
 * Redis Lpush 命令将一个或多个值插入到列表头部。 如果 key 不存在，一个空列表会被创建并执行 LPUSH 操作。 当 key 存在但不是列表类型时，返回一个错误。
 * @param key KEY_NAME
 */
m.lpush = function (key, value) {
    return new Promise(function (resolve, reject) {
        //llen，返回具体的记录数长度
        dbconn.redis.lpush(key, value, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

/**
 * Redis Lindex 命令用于通过索引获取列表中的元素。你也可以使用负数下标，以 -1 表示列表的最后一个元素， -2 表示列表的倒数第二个元素，以此类推。
 * @param key KEY_NAME
 */
m.lindex = function (key, index) {
    return new Promise(function (resolve, reject) {
        //llen，返回具体的记录数长度
        dbconn.redis.lindex(key, index, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}


/**
 * Redis 发布订阅(pub/sub)是一种消息通信模式：发送者(pub)发送消息，订阅者(sub)接收消息。
 * @param key KEY_NAME
 */
m.publish = function (key, value) {
    return new Promise(function (resolve, reject) {
        //llen，返回具体的记录数长度
        dbconn.redis.publish(key, value, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}


/**
 * Redis 发布订阅(pub/sub)是一种消息通信模式：发送者(pub)发送消息，订阅者(sub)接收消息。
 * @param key KEY_NAME
 */
m.subscribe = function (key, value) {
    return new Promise(function (resolve, reject) {
        //llen，返回具体的记录数长度
        dbconn.redis.subscribe(key, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}


module.exports = m;
