/* var greetMe = function () {
    console.log("Hello");
}
var greetWorld = function(){
    console.log ("World");
    return "World";
}
function log(fn1,fn2) {
    fn1();
    fn2();
}
log(greetMe,greetWorld);

var msg = require('./Log.js');
msg.log1.info("Alo");
msg.log2.print("Ola");
msg.log2.info("Hello");
*/
//Ex 3 begin
var started = function started(){
    console.log("Download Iniciado");
    return start=true;
}
var update = function update(percentagem){
    for (percentagem = 0; percentagem != 100; percentagem++) {
        console.log(percentagem+"% of download");
    }
    
}
var completed = function completed(){
    console.log("Download Completo")
}
function performDownload(started, update, completed) {
    started();
    update();
    completed();
}

//performDownload(started,update,completed);
//Ex 3 End


//Ex 4 Begin

//Variaveis necessárias
var arrayUtils = require("./ArrayUtils");
var a = [1,2,3,6,5,6,7,8,9,10];
var a1 = [1,2,3,6,5,6,7,92,25];
var valor = 3; 
var indexStart = 2;
var indexEnd = 4;
//Variaveis de funções
var vazio = arrayUtils.isEmpty(a); //       OK!
var max = arrayUtils.numberMax(a); //       100%!
var min = arrayUtils.numberMin(a); //       FUNCIONA!
var media = arrayUtils.numberAverage(a);//  GOOD!
var indexOf = arrayUtils.indexOf(a,valor);//TOP!
var subArray = arrayUtils.subArray(a,indexStart,indexEnd); //FUNCIONA TAMBEM
var sameLength = arrayUtils.sameLength(a,a1);
// !!!!!!!!    

console.log(sameLength);

//Ex 4 End
