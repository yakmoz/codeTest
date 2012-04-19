var srcDir = 'node.js/';
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request,response) {
    var pathname = url.parse(request.url).pathname;
    
    if(request.method == 'GET') {
        console.log('method GET');
    } else {
        console.log('method POST');
    }
    
    if(pathname=='/') {
        // read index.htm file
        fs.readFile(srcDir+'index.htm',function (error,data) {
            response.writeHead(200,{'Content-Type':'text/html'});
            console.log('/');
            console.log(data);
            response.end(data);
        });
    } else if(pathname=='/OtherPage') {
        fs.readFile(srcDir+'OtherPage.htm',function(error,data) {
            response.writeHead(200,{'Content-Type':'text/html'});
            response.end(data);
            console.log('/OtherPage');
            console.log(data);
        });
    }
}).listen(process.env.C9_PORT,function () {
    console.log('Server running '+process.env.C9_PORT);
});
