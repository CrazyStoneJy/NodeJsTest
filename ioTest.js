var fs = require('fs');

//同步读取文件
var data = fs.readFileSync('hello.txt');
console.log("sync data:"+data.toString());
console.log("同步读取hello.txt完毕！");

//异步读取文件
fs.readFile('hello.txt',function(err,data){
  if(err) return console.error(error);
  console.log("asyn data:"+data.toString());
});
console.log("异步读取文件");
