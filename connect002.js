var connect = require('connect');

connect.createServer(function(request,response,next){
    console.log('1st');
    next();
},function(request,response,next) {
    console.log('2nd');
    next();
},function(request,response,next) {
    console.log('3rd');
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>Hello Connect...</h1>');
}).listen(process.env.C9_PORT,function(){
    console.log('Server port:'+process.env.PORT);
});