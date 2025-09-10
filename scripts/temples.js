const hamburger = document.querySelector("#hamburger");
const list = document.querySelector(".nav-list");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("open");
    list.classList.toggle("open");
});