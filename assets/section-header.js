const mobileMenu = document.querySelector("header .mobile-links");
const mobileMenuList = document.querySelector("header .mobile-link-list");

document.getElementById("hamburger-btn").addEventListener("click", () => {
    mobileMenu.style.left = 0;
});

document
    .getElementById("mobile-nav-close-btn")
    .addEventListener("click", (e) => {
        e.stopPropagation();
        mobileMenu.style.left = "-100%";
    });

mobileMenuList.addEventListener("click", (e) => e.stopPropagation());

mobileMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.style.left = "-100%";
});
