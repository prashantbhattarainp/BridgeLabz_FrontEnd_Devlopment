//Question => Define one function and access global variable inside and outside of function.

//Global Scope
function myFunction1(){
    console.log("I am Global Scope");
    console.log(global);
}
myFunction1();
console.log(global1);