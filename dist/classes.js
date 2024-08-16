"use strict";
class AirConditioner {
    constructor() {
        this.color = "White";
        this.tonnes = 1;
        this.company = "Voltas";
        this.temperature = 22;
    }
    turnOn(name) {
        console.log(`Turning On ${name}.........`);
        console.log(`Turned On ${name}.........`);
    }
    turnOff(name) {
        console.log(`Turning off ${name}.........`);
        console.log(`Turned off ${name}.........`);
    }
    raisedTemperature() {
        console.log(++this.temperature);
    }
    decreaseTemperature() {
        console.log(--this.temperature);
    }
}
let ac1 = new AirConditioner(); //Instance of class
let ac2 = new AirConditioner();
class Penndrive {
    constructor(name) {
        this.company = name;
    }
}
// let p1 = new Penndrive("Sandisk")
// console.log(p1);
// let p2 = new Penndrive("HP")
// console.log(p2);
// ------------------------************************************------------------
// New Class - Earphone 
class Earphones {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
// let e1 = new  Earphones("Ptron", 2500);
// console.log(e1);
// let e2 = new  Earphones("Ptron", 25000);
// console.log(e2);
// ___________________________************************_____________________________
class Bottle {
    constructor(shape) {
        this.shape = shape;
        this.shape = "Rectangle";
    }
}
// ********************* Access Modifier ****************************
class Pendrive2 {
    constructor() {
        this.name = "Pendrive"; //by default method and variables are public
    }
    getName() {
        console.log(this.name);
    }
}
// let p1 = new Pendrive2();
//  console.log(p1.getName());
//  p1.name = "Super Pendrive";
//  console.log((p1));
class User {
    constructor() {
        this.name = "Suresh"; //you can not acccess this value outside the class.
        this.balance = 1200;
    }
    getBalance() {
        console.log(this.name);
    }
}
let u1 = new User();
//  u1.balance = 12000 **** this will  throw error because you try to access private member
// u1.getBalance()  
//By using inside public method we acces the value this concept is also unkown as:
// getter method()
// setter method()
// Public mtlb puri class ma use karo or bahar bhi use kr skta hoi via instanceof.
// Private ma app puri class ma use kr skata ho par bahar nhi use kr skta ho.
// Protected
class BankUser {
    constructor() {
        this.balance = 1200;
    }
}
class Admin extends BankUser {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    getBalance() {
        console.log(this.balance);
    }
}
let a1 = new Admin();
console.log(a1);
