document.getElementById("regForm").onsubmit = async function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;

    let check = await axios.get(`http://localhost:3008/users?email=${email}`);

    if (check.data.length > 0) {
        document.getElementById("msg").innerText = "Email already registered.";
        return;
    }

    await axios.post("http://localhost:3008/users", { name, email });

    document.getElementById("msg").innerText = "Registration Successful!";
};