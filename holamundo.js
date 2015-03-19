var http = require('http');
        
        http.createServer(function (req, res) {
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end('Hola Mundo\n');
        }).listen(8080, '0.0.0.0');
        
        console.log('Server running at http://179.43.126.244:8080/')
#lo subi desde la compu
