const express = require('express')
const app = express()
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
/*
app.get('/', function(req, res) {
    res.send("root");
    })
*/



/*app.get('/', function(req, res) { 
    
    const body = 'Hello World';

    res.writeHead(200, {
        'Content-Length' : Buffer.byteLength(body),
        'Content-Type' : 'text/plain'
    });
    // Utilizar o HTML ocupa menos espaço no app, no entanto, não podemos ajustar tão facilemente as definições
   })
*/
/*
app.get('/', function(req, res) {
    const body = 'Adeus';
    res.writeHead(200, {
        'Content-Length' : Buffer.byteLength(body),
        'Content-Type' : 'text/plain'
    });
    res.end(body);
})
*/
/*
app.get('/', function(req, res) {
    var data = new Date();
    var html = fs.readFileSync("./hello.html", 'utf-8');
    var htmlAlt = html.replace("{Template}", data);
    const body = htmlAlt;
    res.writeHead(200, {
        'Content-Length' : Buffer.byteLength(body),
        'Content-Type' : 'text/plain'
    });
    res.end(body);
})
*/
app.get('/user:name', function(req, res) {
    res.end(body);
})

app.listen(3000, function() {
    console.log(' O servidor está online. ');
    fs.writeFileSync('./log.txt');
});