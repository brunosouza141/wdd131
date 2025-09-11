const hamburger = document.querySelector("#hamburger");
const list = document.querySelector(".nav-list");
const templeh1 = document.querySelector("h1");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("open");
    list.classList.toggle("open");
    templeh1.style.alignSelf = "flex-start";
    templeh1.style.paddingTop = "10px";  
});