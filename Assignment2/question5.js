// Q5. Boolean Logic Access System

let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;


if (isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

isOwnerInside = false;
console.log("After Change:", isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside ? "Secure" : "Unsafe");