// Q6. Event-Based Counter Simulation

let count = 0;

function increment() {
    count++;
    console.log("Count:", count);

    function showUpdate() {
        console.log("Nested Function Count:", count);
    }
    showUpdate();
}


function decrement() {
    count--;
    console.log("Count:", count);

    function showUpdate() {
        console.log("Nested Function Count:", count);
    }
    showUpdate();
}

increment();
increment();
decrement();