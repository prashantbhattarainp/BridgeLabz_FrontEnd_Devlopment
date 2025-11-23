const form = document.getElementById("myForm");

const nameInp = document.getElementById("name");
const emailInp = document.getElementById("email");
const passInp = document.getElementById("pass");

const nameErr = document.getElementById("nameErr");
const emailErr = document.getElementById("emailErr");
const passErr = document.getElementById("passErr");

const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
    let valid = true;

    if (nameInp.value.trim() === "") {
        nameErr.textContent = "Name is required";
        valid = false;
    }

    if (!emailInp.value.includes("@")) {
        emailErr.textContent = "Invalid email";
        valid = false;
    }

    if (passInp.value.length < 6) {
        passErr.textContent = "Password must be 6+ characters";
        valid = false;
    }

    if (!valid) {
        e.preventDefault();
        msg.textContent = "";
    } else {
        msg.textContent = "Form Submitted Successfully!";
    }
});

[nameInp, emailInp, passInp].forEach(input => {
    input.addEventListener("input", () => {
        if (input === nameInp) nameErr.textContent = "";
        if (input === emailInp) emailErr.textContent = "";
        if (input === passInp) passErr.textContent = "";
    });
});