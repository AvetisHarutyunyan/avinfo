window.addEventListener("scroll", () => {
    const topNav = document.querySelector(".header__section");
    topNav.classList.toggle("active-navbar", scrollY > 100);
});