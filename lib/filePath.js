/**
 * Created by Anyi-tech on 2017/5/9.
 */
var path = require('path')
let  fs = require('fs');
var os = require('os');
let join = path.join
const readline = require('readline');
var m = {}
m.pathJoin = function(a, b){
    var pathRes = join(a,b)
    return pathRes
}
m.getDirFilePath = function(startPath){
    let result=[];
    function finder(path) {
        let files=fs.readdirSync(path);
        files.forEach((val,index) => {
            let fPath=join(path,val);
            let stats=fs.statSync(fPath);
            if(stats.isDirectory()) finder(fPath);
            if(stats.isFile()) result.push(fPath);
        });

    }
    finder(startPath);
    return result;
}
m.getDirNames = function(startPath){
    let result=[];
    let files=fs.readdirSync(startPath);
    files.forEach((val,index) => {
        //let fPath=join(startPath,val);
        //let stats=fs.statSync(fPath);
        //if(stats.isDirectory()) result.push(fPath);
        //console.log(index)
        result.push(val)
    });
    return result;
}

m.delFilesInDir = function(startPath){
    let result=[];
    let files=fs.readdirSync(startPath);
    files.forEach((val,index) => {
       if(val.indexOf('副本') !== -1){
           console.log(val)
           let fpath = join(startPath+val)
           fs.unlink(fpath,function(err){
               if(err){
                   return console.error(err)
               }
           })
       }
    });
    //return result;
}

m.updateFilesInDir = function(startPath,dirPath_1){

    let files=fs.readdirSync(startPath);
    let tmp = "'timestamps': false,"
    console.log('the inserted is ', tmp)
    files.forEach((val,index) => {
        console.log(val)
        //let fpath = join(startPath+val)
        let fpath = join(startPath+val)
        let fpath_1 =join(dirPath_1+val)
        let input = fs.createReadStream(fpath)
        var fWrite = fs.createWriteStream(fpath_1);
        const rl = readline.createInterface({
            input: input,
            output: fWrite,
            terminal: true
        });
        rl.on('line', (line) => {
            //console.log(`Line from file: ${line}`);
            //fWrite.write(line);
            //if(line == '}, {'){
            if(line.indexOf('tableName') !== -1){
                console.log('it comes to the tableName')
                fWrite.write(tmp + os.EOL); // 下一行
            }
        });
        rl.on('close', (line) => {
            console.log(`Line close file: ${line}`);
            console.log("读取完毕！");
        });
    });
}
//console.log(__dirname);
//console.log(__filename);
//console.log(process.cwd());
//console.log(path.resolve('./'));
let dirPath = m.pathJoin(__dirname, '/DBquery/cloud-promotion/')
let dirPath_1 = m.pathJoin(__dirname, '/DBquery/cloud-promotion_1/')
//m.updateFilesInDir(dirPath,dirPath_1)

//let result = m.getDirNames(dirPath)
//console.log(result)
//
//var resultJsonList = []
//result.forEach((val, index) =>{
//    let tmpJson = {}
//    tmpJson["value"] = val
//    tmpJson["label"] = val
//    resultJsonList.push(tmpJson)
//})
////console.log(resultJsonList)
//var data = fs.readFileSync(fpath);
//var key_index = data.toString().indexOf('tableName')
//console.log('the file key_index is ',key_index)
//console.log('the file buffer length is ', data.length)
//fs.open(fpath, 'a+', function(err, fd) {
//    if(err){
//        throw err
//    }
//    console.log('file open ok')
//    console.log(fd)
//    var buffer = new Buffer("tableName: 'place_user_info',")
//    console.log(buffer.length)
//    fs.write(fd, buffer, 0,buffer.length,22, function(err, bytesWritten, buffer){
//        if(err){
//            throw err
//        }
//        console.log('write ok')
//        console.log(bytesWritten, buffer.slice(0,bytesWritten).toString())
//        fs.close(fd)
//    })
//})

//var buffer = new Buffer("tableName: 'place_user_info',")
//fs.appendFile(fpath,buffer.toString() ,[{'flag':'tableName'}],function(err){
//    if (err)
//        throw err;
//
//})

module.exports = exports = m