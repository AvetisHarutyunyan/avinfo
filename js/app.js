"use strict";

function sectionActive() {
    const navLists = document.querySelector("#nav_list");
    const navLinks = document.querySelectorAll("#nav_link");

    navLinks.forEach((item) => {
        item.addEventListener("click", () => {
            navLists.querySelector(".link-active").classList.remove("link-active");

            item.classList.add("link-active");
        });  
    });
}
sectionActive();

function navside() {
    const burger = document.getElementById("burger");
    const nav = document.getElementById("navside");
    const closeBtn = document.querySelector(".close__btn");

    burger.addEventListener("click", () => {
        nav.classList.add("nav-active");
    });
    closeBtn.addEventListener("click", () => {
        nav.classList.remove("nav-active");
    });

    document.addEventListener("mouseup", (e) => {
        if(e.target !== closeBtn && e.target !== nav) {
            nav.classList.remove("nav-active");
        }
    });
}
navside();