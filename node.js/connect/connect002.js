
/* no... not working
var connect = require('connect');

connect().use(connect.static('node.js/public'))
    .use(function(request,response,next){
    console.log('1st');
    next();
    },function(request,response,next) {
    console.log('2nd');
    next();
    },function(request,response,next) {
    console.log('3rd');
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>Hello Connect...</h1>');
    })
    .listen(process.env.PORT,function(){
    console.log('Server port:'+process.env.PORT);
});

*/


//yes.. but twice? no... just wait.. you will see 1st, 2nd, 3rd without connect this website
var connect = require('connect');

connect().use(connect.static('node.js/public'))
    .use(connect.logger('dev'))
    .use(function(request,response,next){
    console.log('1st');
    next();
    })
    .use(function(request,response,next) {
    console.log('2nd');
    next();
    })
    .use(function(request,response,next) {
    console.log('3rd');
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>Hello Connect...</h1>');
    })
    .listen(process.env.PORT,function(){
    console.log('Server port:'+process.env.PORT);
});

/*
var connect = require('connect');

connect().use(connect.logger('dev'))
        .use(connect.static('node.js/public'))  // root 를 정해두고 그 안에 index.html이 없으면 아래의 res.end 한게 표시된다.
      .use(function(req,res) {
         res.end('hello ~~');    
      })
     .listen(process.env.PORT);
     */