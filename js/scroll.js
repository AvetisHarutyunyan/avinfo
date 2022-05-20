window.addEventListener("scroll", () => {
    const topNav = document.querySelector(".header__section");
    topNav.classList.toggle("active-navbar", scrollY > 100);

    const toUpBtn = document.querySelector(".toUpBtn");
    toUpBtn.classList.toggle("show-toUpBtn", scrollY > 800);
});