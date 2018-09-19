/**
 * Created by Anyi-tech on 2017/11/8.
 */
var isProduct = function () {
    //var node_env = process.env.NODE_ENV;
    //console.log(node_env)
    var node_env = 'local'
    var production = "production";
    if (node_env === production) {
        return true;
    }
    else {
        return false;
    }
};

console.log(isProduct())

module.exports.node_env = isProduct();