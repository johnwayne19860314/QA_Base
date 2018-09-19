const path = require("path");
const config = require("config");

const config_path = path.join(__dirname, '../config');
const project_configs = config.util.loadFileConfigs(config_path);

/**
 * 注意，内嵌的项目，需要通过这种机制来加载，否则会造成config传递过来了，这里返回是一个标准的Object，没有get方法
 */
module.exports = project_configs;
