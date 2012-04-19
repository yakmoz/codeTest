var connect = require('connect');
//connect router deprecated
connect()
    .use(connect.logger())
    
    .listen(process.env.PORT,function() {
        console.log('server port:%d',process.env.PORT);    
    })
    ;