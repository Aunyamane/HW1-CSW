var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
var client = new net.Socket();
var i=0;

client.connect(PORT, HOST, function() 
{
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    client.write('khim');
});

client.on('data', function(data) {
  let answer = Math.floor(Math.random() * 21);
  console.log('DATA: ' + data);
  
  if(data='OK')
  {
      client.write(''+answer);
  }
  else if(data = 'wrong')
  {
    
    client.write(''+answer);
  }
  else if(data = 'BINGO')
  {
        client.destroy();
  }
  else if(i==4)
  {
      client.destroy();
      client.connect();
  }
console.log(i)
  i++;

 });

client.on('close', function() 
{
    console.log('Connection closed');
});