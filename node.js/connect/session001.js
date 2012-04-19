var connect = require('connect');

var server = connect();

server.use(connect.cookieParser('secret'));
server.use(connect.session());
server.use(function(req,res){
    var output='';
    output +='<p>cookie:'+JSON.stringify(req.cookies)+'</p>';
    output +='<p>session:'+JSON.stringify(req.session)+'</p>';
    
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(output);
    
   // res.session.now = (new Date()).toUTCString();   --> .now 가 없다더라; 이거뭐... 너무 많이 바뀌는거 아냐? ㅎㅎㅎ 
});

server.listen(process.env.PORT, function() {
    console.log('server port:%d',process.env.PORT);
});