class student{
    constructor(name,age){
        this.age=age;
        this.name=name;
    }

    show(){
        console.log(`Name: ${this.name} \n Age : ${this.age}`);
    }
}

const s2 = new student("Pacific",23);
s2.show()

const student = {
    "Name": "Prashant",
    "Age" : 23
}

const student2 = new Object()
student2.name="Prashant Bhattarai"
student2.age=23

//Constructor Function
function bike (name,price){
    this.name= name
    this.price=price
    this.greet=function(){ // Anonymous Function
        return `Hi, My name is ${this.name}and price is ${this.price}`
    }
}

const bike1 = new bike ("KIA-SELTOS", 100000)

//Using create

const child={
    greet()
    {
        console.log("Hiiii")
    }
}

const child1 = Object.create(child)
child1.age= 23;

//Using JSON 
const person = '{"Name" : "Prashant" , "Age" : 23}'
const jsonObj =JSON.parse(person)
console.log(jsonObj.name)
const stringObj = JSON.stringify(jsonObj)


//Arrow Function
const add = (a,b) => a+b

//Anonymous Function
setTimeout(function(){
    console.log("2 sec",2000)
})


//IIFE
(function(){
    console.log("IIFE")
})()//to call immediately;

//HOF Higher Order Function
function greetUser(greetFn, name){
return greetFn(name)
}
//Function calling another function to provide chaining

function greet(name){
    return "Hello" + name;
}

function prime(){
    
}
console.log(greetUser(greet,prime,"Pacific"))

//Prototypes

Object.prototype.print = function(){
    console.log("Common Method")
}
let b={
    name:"Pacific",
    age: 23
}
b.print();

//CallBack Function
function a( fun){
    console.log("First")
    fun()
}

function b(fun){
    console.log("Second")
    fun()
}

function c(fun){
    console.log("Third")
    fun()
}

function d(){
    console.log("Fourth")
}

//Callback hell
a (function(){
    b( function(){
        c(d)
    })
});



//Usinf Promises

function a(){
    return new Promise((resolve)=>{
        console.log("First")
        resolve()
    })
}

function b(){
    return new Promise((resolve)=>{
        console.log("Second")
        resolve()
    })
}

function c(){
    return new Promise((resolve)=>{
        console.log("Third")
        resolve()
    })
}

a()
.then(b)
.then(c)
.catch((err)=> console.log("Not Eecuted"))

async function run() {
    await a()
    await b()
    await c()
}
