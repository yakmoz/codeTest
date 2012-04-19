var connect = require('connect');

connect()
    .use(connect.logger())
    .use(connect.query())
    .use(function (req,res) {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>'+JSON.stringify(req.query)+'</h1>');
    })
    .listen(process.env.PORT,function() {
        console.log('server port:'+process.env.PORT);
    })
;