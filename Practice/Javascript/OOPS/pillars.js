//Inheritance

class Person{
    constructor(name,age){
        this.name=name,
        this.age=age;
    }
    showInfo(){
        console.log(`Name: ${this.name} \n Age: ${this.age}`);
    }

}

class Student extends Person{
    constructor(name,age){
        super(name,age)
    }
    showInfo(){
        console.log(`I am a child`)
    }
}

const stud3= new Student ("Pacific", 23);
stud3.showInfo();



//Encapsulation


// Abstraction
class Demo{
    display(){
        //logic
    }
}

class DemoTwo extends Demo{
    display(){
        //logic
    }
}
