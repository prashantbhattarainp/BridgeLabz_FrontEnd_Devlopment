let API = "http://localhost:3003/tasks";

function load(filter = "") {
    let url = API;

    if (filter === "completed") {
        url += "?completed=true";
    } else if (filter) {
        url += `?priority=${filter}`;
    }

    $.get(url, function (data) {
        $("#taskList").empty();

        data.forEach(t => {
            $("#taskList").append(`
                <div>
                    <input type="checkbox" ${t.completed ? "checked" : ""} 
                        onclick="toggle(${t.id}, ${t.completed})">
                    ${t.title} — <b>${t.priority}</b>
                </div>
            `);
        });
    });
}

function toggle(id, completed) {
    $.ajax({
        url: `${API}/${id}`,
        method: "PATCH",
        data: { completed: !completed }
    });
}

$("#filter").on("change", function () {
    load($(this).val());
});

load();