class Abcd {
      constructor(public username:string){
        this.username = username;
      }
      get name(){
        return this.username;
      }

      set name(value:string)
      {
        this.username = value;
      }
}

// let user = new Abcd("Himanshu");

// console.log(user.name);
//   //return the get name value

//   user.name = "Harshit"; //set name wa used here
// console.log(user.name);
   //set name 


class Animals{
    name:string;
    constructor(name: string) {
        this.name = name;
    }

    get animalName(){
       return this.name
    }

    set animalName(value:string){
        this.name = value
    }
}
let animal = new Animals("Horse");
console.log(animal.name);
