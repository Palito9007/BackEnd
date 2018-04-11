var arrayVazio = [];

arrayVazio.push(
    function(){ console.log("Hello World 1") },
    function(){ console.log("Hello World 2") },
    function(){ console.log("Hello World 3") }
);

for (index = 0; index < arrayVazio.length; index++) {
    var percorreArray = arrayVazio[index];
   percorreArray();
}



arrayVazio.forEach(function(percorreArray){
    percorreArray();
});
