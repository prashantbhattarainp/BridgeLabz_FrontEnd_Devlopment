const counter = document.getElementById("counterValue")
const inc = document.getElementById("increment")
const dec = document.getElementById("decrement")
const double = document.getElementById("double")
let count = 0

inc.addEventListener('click' , () => {
    
    count++
    counter.textContent = `${count}`
    
})
dec.addEventListener('click' , () => {
    if(count > 0){
        count--
        counter.textContent = `${count}`
    }
 
})
double.addEventListener('click' , () => {

    count+=2
    counter.textContent = `${count}`
})