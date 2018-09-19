module.exports = exports = function (sequelize, DataTypes) {
    const APIConfig = sequelize.define("APIConfig", {
        // id: { type: DataTypes.INTEGER, primaryKey: true,  },
        prioity: { type: DataTypes.INTEGER, allowNull: false },
        url_pattern: { type: DataTypes.STRING(200), allowNull: false },
        method: { type: DataTypes.STRING(20), defaultValue: "get" },
        request_list: { type: DataTypes.JSON, allowNull: false }
    }, { timestamps: true, tableName: "apis_configs" });
    
    APIConfig.requestValidate = function (request) {
        return "request_type" in request && "host_list" in request && "args" in request;
    }

    return APIConfig;
}

// this._config_list = [
//     {
//         url_pattern: "users/:name([a-zA-Z]+)",
//         request_list: [
//             {
//                 request_type: "http", 
//                 host_list: [
//                     {host: "http://localhost:8000", weight: 2, is_down: 0},
//                     {host: "192.168.1.200", weight: 1, is_down: 0},
//                     {host: "192.168.1.201:8000", weight: 1, is_down: 1}
//                 ],
//                 args: {
//                     url: "/",
//                     method: "get",
//                 }
//             }
//         ]
//     },
//     {
//         url_pattern: "users/:id(\\d+)",
//         request_list: [
//             {
//                 request_type: "http", 
//                 host_list: [
//                     {host: "http://localhost:8000", weight: 2, is_down: 0},
//                     {host: "192.168.1.200", weight: 1, is_down: 0},
//                     {host: "192.168.1.201:8000", weight: 1, is_down: 1}
//                 ],
//                 args: {
//                     url: "/",
//                     method: "get",
//                 }
//             }
//         ]
//     }
// ]
// return Promise.resolve(this._config_list); 


// request_list: [
//     {
//         request_type: "http",
//         host_list: [
//             { host: "http://localhost:8000", weight: 2, is_down: 0 },
//             { host: "http://192.168.1.200", weight: 1, is_down: 0 },
//             { host: "http://192.168.1.201:8000", weight: 1, is_down: 1 }
//         ],
//         args: {
//             // 麻烦一点的需要处理之前的req的逻辑，这里作一些动态的参数配置，比如$req.cookies拿到原来的cookie
//             url: "/users/self/",
//             method: "get",
//             headers: {
//                 "content-type": "application/json"
//             },
//             body: {}
//         }
//     }
// ]