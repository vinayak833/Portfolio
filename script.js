function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function handleSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById("formMsg");
  msg.style.display = "block";
  e.target.reset();
  setTimeout(() => { msg.style.display = "none"; }, 4000);
}

