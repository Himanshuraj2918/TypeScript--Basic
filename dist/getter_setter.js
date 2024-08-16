"use strict";
class Abcd {
    constructor(username) {
        this.username = username;
        this.username = username;
    }
    get name() {
        return this.username;
    }
    set name(value) {
        this.username = value;
    }
}
// let user = new Abcd("Himanshu");
// console.log(user.name);
//   //return the get name value
//   user.name = "Harshit"; //set name wa used here
// console.log(user.name);
//set name 
class Animals {
    constructor(name) {
        this.name = name;
    }
    get animalName() {
        return this.name;
    }
    set animalName(value) {
        this.name = value;
    }
}
let animal = new Animals("Horse");
console.log(animal.name);
