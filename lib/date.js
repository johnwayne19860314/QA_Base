/**
 * Created by Anyi-tech on 2017/3/31.
 */
require('date-utils')
var assert = require('assert')

var m = {}
m.assertSecondsDiff = function(dateStr1, dateStr2){
    var index = arguments[2]?arguments[2]:1
    console.log('tolerant range is', index)
    var date_1 = new Date(dateStr1)
    var date_2 = new Date(dateStr2)
    var secondsDiff = date_1.getSecondsBetween(date_2)
    console.log('the seconds diff is ', secondsDiff)
    var tolerangeRange = []
    var i = -index
    while(i <= index){
        tolerangeRange.push(i)
        i++
    }
    if (tolerangeRange.indexOf(secondsDiff) != -1){
   // if (secondsDiff.indexOf(tolerangeRange) ){
            //assert(0,'thseconds diff is within the tolerant range')
            return
    }
    console.log('the actual date is', date_1)
    console.log('the expect date is ',date_2)
    assert(0,'the seconds diff is not within the tolerant range')
    //return minsDiff

}


m.assertSecondsDiff_date = function(date_1, date_2){
    var index = arguments[2]?arguments[2]:1
    console.log('tolerant range is', index)
    var secondsDiff = date_1.getSecondsBetween(date_2)
    console.log('the seconds diff is ', secondsDiff)
    var tolerangeRange = []
    var i = -index
    while(i <= index){
        tolerangeRange.push(i)
        i++
    }
    if (tolerangeRange.indexOf(secondsDiff) != -1){
   // if (secondsDiff.indexOf(tolerangeRange) ){
            //assert(0,'thseconds diff is within the tolerant range')
            return
    }
    console.log('the actual date is', date_1)
    console.log('the expect date is ',date_2)
    assert(0,'the seconds diff is not within the tolerant range')
    //return minsDiff

}
m.assertSecondsDiff_date(new Date(), new Date(), 5)
m.getWorldTimeNow = function(){
    var t1 = Date.now();
    var d = new Date(t1);
//var t2 = new Date().getTime();

   // console.log(t1);
  //  console.log(d)
    return d
}
module.exports = exports = m
/*
var date = new Date()
date = date.toFormat('YYYY-MM-DD HH24:MI:SS')
console.log(date)
var date_1 = new Date(date)
date_1.addMinutes(3)
console.log(date_1)
*/
//
//console.log(minsDiff)