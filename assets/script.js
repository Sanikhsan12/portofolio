// side bar
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// contact form
window.onload = function () {
  document.getElementById("contactForm").reset();
};
