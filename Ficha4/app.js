var obj = {
    name: "Pedro",
    age: 20,
    gender: "M"
};

function pessoa(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
var pedro = new pessoa("EU", 12, "Male");
var str = JSON.stringify(pedro);   
var jaoao = JSON.parse('{"name": "Joao", "age": 20, "gender": "Male"}');
console.log(jaoao)


var Emitter = require('./emitter');
var eventConstants = require('./config');
var emtr = new Emitter();


emtr.on("greet1", function(){
    console.log('Bem vindo.');
});
emtr.on(eventConstants.GREET, function(){
    console.log('Bem vindo outravez.');
});
emtr.emit(eventConstants.GREET);
console.log(eventConstants.events.GREET);