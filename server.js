var http = require('http');

http.createServer(function (req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(url.pathname === '/test'){
        console.log('Hello World!');
        
        res.end('Hello World!');
    }
}).listen(6969);