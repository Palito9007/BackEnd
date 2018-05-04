const express = require('express');

const app = express();

const fs = require('fs');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

const uuidv1 = require('uuid/v1');

function readFile(fileName){
    var file = fs.readFileSync(fileName, 'utf-8');
    return file;
}

app.get ('/videos', function(req, res){
    var file = readFile('./videos.json');    
    return res.send(file);
});


app.get ('/videos/:id', function(req, res){
    var file = readFile('./videos.json'); 
   var jsonData = JSON.parse(file);
   var id = req.params.id;
   var video = jsonData["video "+ id];
   if (Error){
       res.writeHead(404);
       res.end();
   }
   else{
       return(video);
   }return
});
app.get ('/videos/:Uploader', function(req, res){
    var file = readFile('./videos.json');    
    return res.send(file);
});

app.post('./videos', function(req, res){
    var addComentario = JSON.stringify('./videos.json');
    addComentario = addComentario+comentario;
    addComentario = JSON.parse('./videos.json');
    return res.send(addComentario);
});

app.post('/add', function(req, res){
    var file = readFile('./videos.json');
    var jsonData = JSON.parse(file);
    var uniqueID = uuidv1(); 
    var addVideo = req.body;
    addVideo.Id = uniqueID;
    jsonData["Video"+uniqueID] = JSON.stringify(addVideo);
    res.send(jsonData);
} ),

app.delete('/del', function(req,res){
    var file = readFile('./videos.json');
    var jsonData = JSON.parse(file);
    var id = req.params.id;
    delete jsonData["video "+id];
    fs.writeFile('./videos.json', JSON.stringify(jsonData));
    //var IDtoDelete = request.body;
    //var deletedItem = toDelete.video[IDtoDelete].splice((IDtoDelete-1),1);
    res.send(jsonData);
});

app.get('/visvideos', function (request, response) {
    var vis = readFile('./videos.json');
    var jsonData = JSON.parse(vis);
    var recebe = request.params.Views;
    var array = [];

    for (var asd in jsonData) {
        if (jsonData.hasOwnProperty(asd)){
            if(jsonData.asd == recebe){
                array.push(jsonData[asd]);
            }
        }
    }
    array.sort(function(a, b) {
        return a.Views - b.Views;
      });
    response.send(array);
});


app.listen(3000, function() {
    console.log(' O servidor está online. ');
});

// codigo novo.....


// app.get('./', function (req, res) {

//     bodyParser =  JSON.parse('./videos.json');
//     return res.send(bodyParser)
// })