// const x:number =101;
// console.log(x);

// Q1. write a function to greate user 
 function greet(name:string):void{
        console.log("Hello"+name);
 }
 
// greet("Solution");

// Q2. Sum of two number
function sum(num1:number, num2:number):number{
    return num1+num2;
}

// console.log(sum(3,7));

// Q3. Return true or false based on if a user is 18+  
function isLegal(age:number):boolean{
    if(age>=18)
        return true;
    else
       return false;
}
// console.log((isLegal(3)));

// Q4. Create a function that takes another function as input and run after it 1 second 

function greetFunction(fun:()=>void){
    setTimeout(fun,1000)
}

greetFunction(function dance(){
    console.log("dance start....");
    
})


