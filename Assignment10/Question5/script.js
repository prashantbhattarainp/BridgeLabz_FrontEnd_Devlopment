function load(day) {
    fetch(`http://localhost:3007/timetable?day=${day}`)
        .then(r => r.json())
        .then(data => {
            let box = document.getElementById("result");
            box.innerHTML = "";

            if (data.length === 0) {
                box.innerHTML = "No classes today.";
            } else {
                data.forEach(c => {
                    box.innerHTML += `
                        <p>${c.subject} — ${c.faculty} — ${c.time}</p>
                    `;
                });
            }
        });
}

document.getElementById("day").onchange = function () {
    load(this.value);
};

load("Monday");