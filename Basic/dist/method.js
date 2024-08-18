"use strict";
// function functionname(): return type 
function ab(a, b) {
    console.log("Hey");
}
// Named Function && Explicit return type
function abcd() {
}
//Anonymous Function
const ano = function () {
};
//Arrow function
const abcd1 = () => {
};
//Implict return type Function
function abcd2() {
    return "hey";
}
//optional parameters
function user(name, age, gender) {
    //optional prameters it depend upon user it will give or not 
    // so for making it optional we use  ?
}
user("Harey", 22);
//default parameters
function user1(name = "Harey") {
    //If any one not provide parameters it will use default value.
}
//Rest parameters 
function name3(...names) {
    console.log(names);
}
name3("Hare", "Krishn", "Krishn", "Krishn");
