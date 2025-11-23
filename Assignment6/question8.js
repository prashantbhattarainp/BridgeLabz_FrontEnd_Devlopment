const toggleBtn = document.getElementById("toggleBtn");
const options = document.getElementById("options");

toggleBtn.addEventListener("click", () => {
    options.style.display = options.style.display === "block" ? "none" : "block";
});

document.querySelectorAll(".opt").forEach(opt => {
    opt.addEventListener("click", (e) => {
        toggleBtn.textContent = e.target.textContent;
        options.style.display = "none";
    });
});

document.addEventListener("click", (e) => {
    if (!toggleBtn.contains(e.target) && !options.contains(e.target)) {
        options.style.display = "none";
    }
}, true);