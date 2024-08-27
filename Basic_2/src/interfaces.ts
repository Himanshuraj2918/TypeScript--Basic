interface User{
    firstName:string;
    lastName:string;
    age:number;
    email?:string;
}


function isLegal(user:User):boolean{
    if(user.age>=18)
        return true;
    else
       return false;
}

function greet(user:User){
   console.log("hello"+ user.firstName);
   
}

isLegal({
    firstName:"himanshu",
    lastName:"Tiwari",
    age:22,
    email:"jdj@gmail.com",
})


