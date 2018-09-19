/**
 * Created by Anyi-tech on 2017/3/30.
 */

var m = {}
m.makeId = function(L)
{
    var text = "";
    var possible = "0123456789";

    for( var i=0; i < L; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
m.makeIdCard = function(L)
{
    var text = "";
    // 1--male; -1 -- female
    var sex = arguments[1]? arguments[1] : -1
    var possible = "0123456789";
    var top = L -1
    for( var i=0; i < L; i++ )
        if (i == top){
            if(sex == 1){
                possible = "02468";
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }else if(sex == 2){ //male
                possible = "13579";
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }else{
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }

        }else{
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }


    return text;
}
m.makeId_1 = function(L)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstu";

    for( var i=0; i < L; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
m.randomString = function(L){
    var s= '';
    var randomchar=function(){
        var n= Math.floor(Math.random()*62);
        if(n<10) return n; //1-10
        if(n<36) return String.fromCharCode(n+55); //A-Z
        return String.fromCharCode(n+61); //a-z
    }
    while(s.length< L) s+= randomchar();
    return s;
}

m.randomString_1 = function(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz,randomPoz+1).toUpperCase();
    }
    return randomString;
}
m.listToString = function(listToConvert){
    var stringTobe = ''
    for (var i in listToConvert){
        stringTobe ? stringTobe += ",'"+listToConvert[i]+" '" : stringTobe = "'"+listToConvert[i]+"'"
    }
    return stringTobe
}
m.JSONtoString = function(JSONtoConvert){
    //var a = { carOwnerName: '金阳', 'contactName':'2345' }
    var b = Object.keys(JSONtoConvert)
    console.log(b)
    var c = ''
    for (var i in b){
        var d = b[i]
        if(i==0){
            c+= '?'
        }else{
            c+= '&'
        }

        c+= b[i]
        c += '='
        c += JSONtoConvert[d]
    }
    console.log(c)
    return c
}
m.JSONToSqlConditon = function(entity){
    var whereStr = 'where '
    for (var key in entity){
        var conditionStr = ''
        var value = entity[key]
        conditionStr =" "+key+"  = '"+value+"' and "
        whereStr += conditionStr
    }
    whereStr = whereStr.slice(0,-4).trim()
    console.log(whereStr)
    return whereStr
}
m.stringToByte = function(str) {
    var bytes = new Array();
    var len, c;
    len = str.length;
    for(var i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if(c >= 0x010000 && c <= 0x10FFFF) {
            bytes.push(((c >> 18) & 0x07) | 0xF0);
            bytes.push(((c >> 12) & 0x3F) | 0x80);
            bytes.push(((c >> 6) & 0x3F) | 0x80);
            bytes.push((c & 0x3F) | 0x80);
        } else if(c >= 0x000800 && c <= 0x00FFFF) {
            bytes.push(((c >> 12) & 0x0F) | 0xE0);
            bytes.push(((c >> 6) & 0x3F) | 0x80);
            bytes.push((c & 0x3F) | 0x80);
        } else if(c >= 0x000080 && c <= 0x0007FF) {
            bytes.push(((c >> 6) & 0x1F) | 0xC0);
            bytes.push((c & 0x3F) | 0x80);
        } else {
            bytes.push(c & 0xFF);
        }
    }
    return bytes;
}
m.generateSecret = function() {
    const SAMPLE_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // 不直接存储secret;返回的是rawData；生成后的是加密后的
    let result = "";
    let size = 24;
    for (let i = 0; i < size; i++) {
        result += SAMPLE_STRING[parseInt(Math.random() * 62)];
    }
    return result;
}

module.exports = exports = m