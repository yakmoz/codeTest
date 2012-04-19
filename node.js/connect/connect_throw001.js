var connect = require('connect');

connect().use(connect.logger())
        .use(function (req,res) {
            throw new Error('Page Not Found');
        })
        .use(connect.errorHandler({
            stack:true,
            message:true,
            dump:true
        }))
        .listen(process.env.PORT,function() {
            console.log('server port:%d',process.env.PORT);
        });