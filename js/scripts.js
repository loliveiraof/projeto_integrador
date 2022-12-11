const menuHamburguer = document.querySelector(".menu-hamburguer");
const mainMenu = document.querySelector(".main-menu");
menuHamburguer.addEventListener("click", () => {
    menuHamburguer.classList.toggle('active');
    mainMenu.classList.toggle('active');
});