var fs = require("fs");
var zlib = require("zlib");

// >>>test read stream
// var data = "";
// var reader = fs.createReadStream("hello.txt");
// console.log("read file start");
// reader.on("data",function(d){
//   console.log("reading");
//   data += d;
// });
// reader.on("end",function(){
//   console.log("data:"+data);
//   console.log("read file finish");
// });
// reader.on("error",function(){
//    console.log("read file error");
// });
// console.log(">>>>>>>>>>>test>>>>>>>>>");

// >>>test pipe copy stream
// var reader = fs.createReadStream("hello.txt");
// var writer = fs.createWriteStream("world.txt");
// reader.pipe(writer);
// console.log("复制完成");

// >>>test 压缩
// fs.createReadStream("hello.txt")
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream("hello.gz"));
// console.log("压缩完成");

// >>> 解压缩
fs.createReadStream("hehe.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("hehe.txt"));
