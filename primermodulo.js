var http = require("http");

function iniciar(){
	function onRequest(request, response){
	  console.log("Peticion Recibida.");
	  response.writeHead(200, {"Content-Type": "text/html"});
	  response.write("hola mundo");
	  response.end();
	}

	http.createServer(onRequest).listen(8080);
	console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;


