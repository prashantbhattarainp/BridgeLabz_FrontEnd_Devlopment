//Clicked
function myFun(){
    console.log("Clicked");
}

//Double Clicked
function dbFun(){
    console.log("Double Clicked");
}

//Select the html element
const btnEl = document.getElementById("btn");
console.log(btnEl)
let count=0;
btnEl.addEventListener("click", ()=>{
    count++;
    console.log(`Submit btn clicked ${count}`);
})