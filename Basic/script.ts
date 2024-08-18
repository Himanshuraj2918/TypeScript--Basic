// let arr:[]; This is an array 

// *********Tuples********** 
// let arr2: [boolean,number,string]

// arr2 = [true,23,"hey"]

// arr2.push(4)

// *****************************any and undefined type variable****************************

// let a:any;
// a=22;
// a= "hey";


// ------------END--------------------

// let a:unknown;
// a= 36;
// a="Hello"

// ----------END---------------------

// *************Never type*************

// function abc():never{
//     while(true){
//         console.log("Run infinite");
        
//     }
// }

// Never define that the never return anything ever so it run infinite

// ---------------End-------------- 

// function abcd(){
//     console.log("HHHH");
    
// }

// abcd()

// ---------------End-------------- 

// Enum variable

// enum Human{
//     name="Harsh",
//     age = "25"
// }

// console.log(Human.name);

// ---------------End-------------- 

// Type inferences : means setting the type by seeing the value it is automatically set by typescript

// let a=12;
// let x= true;
// let m = "asswd";

// ---------------End-------------- 

// Union and intersection

//intersection 

type State = {
    name: string,
    population: number
}

type City = {
    name: string,
    cities: number
}

type stateData = State & City;

let a: stateData = {
     name:"Silvassa",
     population: 460000,
     cities: 12
}