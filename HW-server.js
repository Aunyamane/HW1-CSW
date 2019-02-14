var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;
var number = 15;
net.createServer(function(sock) {
   console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
   var i = 0;
   sock.on('data', function(data) {
   	console.log(data)
   	sock.write('OK');
   	
   		if(number == data){
   		    sock.write('BINGO');
   	    }
   	    else{
   	    	sock.write('wrong')
   	    }
   	i++;
   	
       // console.log('DATA ' + sock.remoteAddress + ': ' + data);
       // sock.write('You said "' + data + '"');
   });

   sock.on('close', function(data) {
       console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
   });
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);