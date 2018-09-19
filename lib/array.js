/**
 * Created by Anyi-tech on 2017/5/11.
 */
var m = {}
m.getRandomArrayElements = function(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}
m.getOneElement = function(arr){
    var item = arr[Math.floor(Math.random()*arr.length)];
    return item
}
m.get_all_appids = function (appid) {
    var _appid_array = [];
    _appid_array.push(appid);
    while (appid.lastIndexOf("_") > 0) {
        appid = appid.substr(0, appid.lastIndexOf("_"));
        _appid_array.push(appid);
    }
    return _appid_array.sort();
};
m.get_all_str = function (array_appid) {
    var appid_str = "";
    for (var i in array_appid) {
        appid_str += "'" + array_appid[i] + "',";
    }
    return appid_str.substr(0, appid_str.length - 1);
};
m.randomSelect = function(Package){
    var  Types = []
    for (var key in Package) {
        Types.push(key)
    }
    //console.log('the Types are', Types)
    var Type = m.getOneElement(Types)
    return Type
    //console.log('the product type is ', m.productType)
}
m.removeOneElement = function(arr,value){
    var  arr1 = []
    for (var i in arr) {
        if(arr[i]!= value){
            arr1.push(arr[i])
        }
    }
    return arr1
}

//var arr = [1,2,3,4,5]
//console.log(m.removeOneElement(arr, 1))
module.exports = exports = m