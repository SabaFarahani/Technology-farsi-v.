const mobileMenu = document.querySelector(".navbar-toggle");
const menuList = document.querySelector(".navbar-menu");

mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("is-active");
    menuList.classList.toggle("active");
});


const xmark = document.querySelector(".fa-xmark");
const bar = document.querySelector(".fa-bars");

bar.addEventListener("click", () => {
    if (xmark.classList.contains("fa-solid")) {
        bar.classList.toggle("active")
        xmark.classList.toggle("active");
    }
});

xmark.addEventListener("click", () => {
    if (bar.classList.contains("fa-solid")){
        xmark.classList.toggle("active")
        bar.classList.toggle("active");
    }
});
