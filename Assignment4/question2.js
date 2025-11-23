document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    validate("name", /^[A-Za-z ]+$/, "Name must contain only alphabets");
    validate("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter valid email");
    validate("phone", /^[0-9]{10}$/, "Phone must be 10 digits");
    validate("password",
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!#])[A-Za-z\d@$!#]{8,}$/,
        "Password must contain uppercase, number & special char"
    );
});

function validate(id, regex, msg) {
    let input = document.getElementById(id);
    let error = document.getElementById(id + "Error");

    if (regex.test(input.value)) {
        input.style.border = "2px solid green";
        error.textContent = "";
    } else {
        input.style.border = "2px solid red";
        error.textContent = msg;
    }
}