var fs = require('fs');
var connect = require('connect');
var url = require('url');

var id = 'jhyang';
var password='jh';

connect()
        .use(connect.logger())
        .use(connect.static('node.js/connect'))
        
        .use(connect.cookieParser())
        .use(connect.bodyParser())
        .use(function(req,res){        // connect router 대신... 가장 기본적인 형태로 우선 작성함
            var pathname = url.parse(req.url).pathname;
            console.log('pathname:%s, method:%s',pathname,req.method);
            if(pathname == '/Login') {            
                if(req.method == 'GET') {
                    if(req.cookies.auth == true) {
                        res.writeHead(200,{'Content-Type':'text/html'});
                        res.end('<h1>login success</h1>');
                    } else {
                        fs.readFile('node.js/connect/login.html',function(error,data){
                            res.writeHead(200,{'Content-Type':'text/html'});
                            res.end(data);
                        });
                    }
                } else if(req.method=='POST') {
                    if(req.body.id==id && req.body.password == password) {
                        res.writeHead(302,{
                            'Location':'/Login',
                            'Set-Cookie':['auth=true']
                        });    
                        res.end();
                    } else {
                        res.writeHead(200,{'Content-Type':'text/html'});
                        res.end('<h1>login fail</h1>');
                    }
                }
            }
        })
        .listen(process.env.PORT,function() {
            console.log('server port:%s',process.env.PORT);
        });