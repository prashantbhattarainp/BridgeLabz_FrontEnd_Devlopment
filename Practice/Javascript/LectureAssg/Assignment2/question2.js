//Question => Define one function and access that variable inside and outside of function.

//Function Scope
function myFunction2(){
    let fun = "I am Function Scope";
    console.log(fun);
}
myFunction2();
console.log(fun); // It's give Error