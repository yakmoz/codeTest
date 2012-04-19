var jade = require('jade');
var http = require('http');
var fs  = require('fs');

http.createServer(function (request,response){
    fs.readFile('node.js/jadePage.jade','utf8',function (error,data) {
        var fn = jade.compile(data);
        
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(fn());
    });
}).listen(process.env.PORT,function() {
    console.log('Server run...'+process.env.PORT);
});