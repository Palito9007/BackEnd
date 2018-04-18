const ENCODING = require('crypto')
const bodyParser = require('body-parser');

const express = require('express')
const app = express()
const fs = require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

function readFile(fileName){
    var file = fs.readFileSync(fileName, 'utf-8');
    return file;
}
app.get('/listPerson', function(request, response) { 
    response.send(readFile('./persons.json'));
}),
app.post('/addPerson', function(request, response){
    var file = readFile('./persons.json');
    var jsonData = JSON.parse(file);
    var size = Object.keys(jsonData).length;
    var id = size++;
    var p = request.body;
    p.id = id;
    jsonData["person"+id] = JSON.stringify(p);
    response.send(jsonData);
    
    
} )

app.listen(3000, () => console.log(' O servidor está online. '))