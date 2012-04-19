var connect = require('connect');

connect.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'});    
    response.end('<h1>connect...</h1>');
}).listen(process.env.PORT,function(){
    console.log('Server port:'+process.env.PORT);
});