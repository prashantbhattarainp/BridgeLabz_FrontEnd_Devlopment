const boxEle= document.querySelector(".Box");
//console.log(boxEle);
boxEle.style.backgroundcolor="red";


let paraEle = document.querySelector("#para")
paraEle.textContent="This is the updated paragraph"

const btnEle= document.querySelector("#btn");
//console.log(btnEle);

btnEle.addEventListener("click",()=>{
    alert("clicked")
})

const containerEle = document.querySelector(".container");
let pEle= document.createElement("p");
pEle.textContent = "Hello, I am Prashant.";
// pEle.style.color= "blue";
pEle.classList.add(bg-green)
containerEle.appendChild(pEle);


