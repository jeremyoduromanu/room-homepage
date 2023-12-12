let menu = document.getElementById("nav-toggle");
console.log(menu)
let navmenu = document.getElementById("mob-nav");
console.log(navmenu)
const navmenuClose = document.getElementById("mob-nav-close").addEventListener("click", closeMenu)

menu.addEventListener("click", toggleMenu)

function toggleMenu() {
    navmenu.style.transform = "translateY(0%)";
}

function closeMenu() {
    navmenu.style.transform = "translateY(-100%)";
}