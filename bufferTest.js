var buff = new Buffer(26);
var str = "";
for(var i=0;i<26;i++){
  buff[i] = i + 97;
}
console.log(buff.toString("utf-8"));
var jsonString = buff.toJSON(buff);
console.log("jsonString:"+JSON.stringify(jsonString));
