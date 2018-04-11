function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.greet = function() {
    console.log("Hello " + this.firstName + " " + this.lastName + " Tem " + this.age + " de idade");
    Person.prototype.age = undefined;
}


var john = new Person("John", "Doe");
john.age = 19;
john.greet();

var maria = new Person("Maria", "das couves");
maria.age = 20;
maria.greet();

console.log(john.__proto__);
console.log(john.__proto__ == maria.__proto__);