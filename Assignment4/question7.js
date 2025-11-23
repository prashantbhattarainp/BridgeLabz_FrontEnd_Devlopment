document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    const userReg = /^.{5,}$/;
    const passReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!#]).{8,}$/;

    if (!userReg.test(user)) {
        document.getElementById("userErr").textContent = "Username must be 5+ characters";
    } else {
        document.getElementById("userErr").textContent = "";
    }

    if (!passReg.test(pass)) {
        document.getElementById("passErr").textContent = "Password must include upper, lower, number & special char";
    } else {
        document.getElementById("passErr").textContent = "";
    }

    if (userReg.test(user) && passReg.test(pass)) {
        alert("Login Successful!");
    }
});