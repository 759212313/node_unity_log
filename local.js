var http = require('http');
var url = require('url');
var util = require('util');
var fs = require('fs');
 
var path='F:/testFile/';
var str=""
var saveStr=""
var arr=new Array();
var fileIdx=0;
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
 
    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    res.write(params.idx);
    res.end();
	
	str=params.idx+"  "+params.name+"  "+params.url
	
	console.log(str);
 
}).listen(3000);
 
	
console.log('http服务器启动');
