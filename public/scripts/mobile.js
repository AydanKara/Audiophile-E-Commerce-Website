const mobileMenuBtnElement = document.getElementById("mobile-menu-btn");
const mobileMenuElement = document.querySelector("#header-wrapper nav");
const userMenuBtnElement = document.querySelector("#user-nav-wrapper i");
const userMenuElement = document.querySelector("#header-wrapper #user-nav");

function toggleMobileMenu() {
  mobileMenuElement.classList.toggle("open");
}
function toggleUserMenu() {
  userMenuElement.classList.toggle("open");
}

mobileMenuBtnElement.addEventListener("click", toggleMobileMenu);
userMenuBtnElement.addEventListener("click", toggleUserMenu);
