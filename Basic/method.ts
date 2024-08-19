// function functionname(): return type 

function ab(a: string , b: number): void{
       console.log("Hey");
       
}

// Named Function && Explicit return type
function abcd(): void{
}

//Anonymous Function
const ano= function(): void{
}

//Arrow function
const abcd1 = ():void=>{
}

//Implict return type Function
function abcd2(){
return "hey"
}

//optional parameters
function user(name:string, age:number, gender?:string){
       //optional prameters it depend upon user it will give or not 
       // so for making it optional we use  ?
}
user("Harey",22)

//default parameters

function user1(name:string = "Harey"){
       //If any one not provide parameters it will use default value.
       console.log(name);
       
}

//Rest parameters 

function name3(...names: string[]){
    console.log(names);
    
}
name3("Hare","Krishn","Krishn","Krishn")

