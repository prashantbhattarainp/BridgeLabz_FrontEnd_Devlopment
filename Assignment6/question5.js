const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalContent = document.getElementById("modalContent");

document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src.replace("200", "600");
  });
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});

modalContent.addEventListener("click", e => {
  e.stopPropagation();
});