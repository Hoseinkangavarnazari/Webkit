var server = require('ws').Server;

var wss = new server({ port: 5001 });

wss.on('connection', function (ws) {
    ws.send('welcome to the cyber chat');
    setInterval(() => {
        ws.send('Series received ' + Date.now());
    }, 100);


    ws.on('message', (message) => {
        console.log(message)
    })

})