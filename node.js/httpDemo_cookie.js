var http = require('http');
http.createServer(function (request,response) { 
    var cookie = request.headers.cookie;
    console.log('cookie:%s',cookie); // like this 'cookie:WRUID=1055421709.697487647; name=ezs; region=seoul'
    cookie = cookie.split(';').map(function (element) {
        var ele = element.split('=');
        return {
            key: ele[0],
            value: ele[1]
        };
    });
    
    response.writeHead(200, {
        'Content-Type':'text/html',
        'Set-Cookie':['name=ezs','region=seoul']
    });
    
    response.end('<h1>'+JSON.stringify(cookie)+'</h1>');
}).listen(process.env.PORT,function() {
    console.log('Server:'+process.env.PORT);
});