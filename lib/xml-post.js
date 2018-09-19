

var http = require('http');
var xml2js = require('xml2js');
var json = {
    MsgType:'text',
Version:'1.0.0',
AppId:'rs00004001'
}

var b = new xml2js.Builder();
var xml = b.buildObject(json);
console.log(xml);

const path = require('path')
const fs = require('fs')
console.log(path.join(__dirname, 'string.txt') )

var xmlStr = fs.readFileSync(path.join(__dirname, 'inputXml.tmp'), 'utf-8')
console.log(xmlStr)
console.log(JSON.stringify(xmlStr))
/*
var opurl = {
    host:'test.com',
    port:8089,
    path:"/trust",
    method:"POST",
    data:xml,
    headers:{
        "Connection":"Keep-Alive",
        "Content-Type":'application/xml;charset=utf-8',
        "Content-length":xml.length
    }

}

http.get(opurl,function(res){
    //console.log('a');
    //res.send(xml)
    res.setEncoding('utf-8')
    res.on('data',function(d){
        console.log(d);
    })
})*/
