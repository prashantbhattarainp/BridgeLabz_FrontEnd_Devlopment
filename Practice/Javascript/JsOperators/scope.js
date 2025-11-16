var global; //declaration
global = 20; //Assigning;
var global1 =  10; //Initializing

//Global Scope
function myFunction1(){
    console.log("I am Global Scope");
    console.log(global);
}
myFunction1();
console.log(global1);


//Function Scope
function myFunction2(){
    let fun = "I am Function Scope";
    console.log(fun);
}
myFunction2();
// console.log(fun); // It's give Error


//Block Scope
if(true){
    let bl = "I am in Block Scope";
    console.log(bl);
}
// console.log(bl); // It's Give Error

//Lexical Scope
function outerFunction(){
    let func = "I am in Outer Function and in Lexical Scope";
    function innerFunction(){
        console.log(func);
    }
    innerFunction();
}
outerFunction();

//Work on 12/11/25 10:00 AM to 02:00 PM Lecture - 2