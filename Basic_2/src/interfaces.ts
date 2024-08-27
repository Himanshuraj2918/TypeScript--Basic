interface User{
    firstName:string;
    lastName:string;
    age:number;
    email?:string;
}


function checkAge(user:User):boolean{
    if(user.age>=18)
        return true;
    else
       return false;
}

function helloMessage(user:User){
   console.log("hello"+ user.firstName);
   
}

checkAge({
    firstName:"himanshu",
    lastName:"Tiwari",
    age:22,
    email:"jdj@gmail.com",
})


