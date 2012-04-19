var http    = require('http');
var fs      = require('fs');
var ejs     = require('ejs');

http.createServer(function(request,response) {
    fs.readFile('node.js/EJSPage.ejs','utf8', function (error,data) {
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(ejs.render(data,{
            name:'ezs',
            desc:'Hello EJS~'
        }));
    });
}).listen(process.env.PORT,function() {
    console.log('Server run..:',process.env.PORT);
});