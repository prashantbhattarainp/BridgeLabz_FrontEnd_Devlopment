let API = "http://localhost:3002/employees";

// Load all employees
function loadEmployees() {
    let req = new XMLHttpRequest();
    req.open("GET", API);

    req.onload = function () {
        let data = JSON.parse(req.responseText);
        render(data);
    };

    req.send();
}

// Render the UI
function render(data) {
    let box = document.getElementById("list");
    box.innerHTML = "";

    data.forEach(emp => {
        box.innerHTML += `
            <div class="row">
                <span>${emp.name} — <b>${emp.status}</b></span>
                <button onclick="toggleStatus(${emp.id}, '${emp.status}')">
                    ${emp.status === "active" ? "Deactivate" : "Activate"}
                </button>
            </div>
        `;
    });
}

// Toggle employee status
function toggleStatus(id, status) {
    let newStatus = status === "active" ? "inactive" : "active";

    let req = new XMLHttpRequest();
    req.open("PATCH", `${API}/${id}`);
    req.setRequestHeader("Content-Type", "application/json");

    req.onload = function () {
        if (req.status >= 200 && req.status < 300) {
            loadEmployees(); // Refresh UI
        } else {
            alert("Error updating status!");
        }
    };

    req.send(JSON.stringify({ status: newStatus }));
}

// Initial load
loadEmployees();