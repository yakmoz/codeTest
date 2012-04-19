var http = require('http');
var fs  = require('fs');

http.createServer(function(request,response) {
    if(request.method=='GET') {
        fs.readFile('node.js/httpDemo_post.html',function(error,data) {
            console.log('http GET');
            response.writeHead(200,{'Contest-Type':'text/html'});
            console.log('data:%s',data);
            console.log('data:',data);
            response.end(data);
        });
    } else if(request.method=='POST') 
    {
        request.on('data',function(data) {
            response.writeHead(200,{'Content-Type':'text/html'});
            console.log('POST:%s',data);
            response.end('<h1>'+data+'</h1>');
        });
    }
}).listen(process.env.PORT, function() {
    console.log('Server run:',process.env.PORT);
});