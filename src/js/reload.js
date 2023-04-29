"use strict";

function anime() {
    const bodyAnime = document.body;

    window.addEventListener("load", () => {
        bodyAnime.classList.add("bodyShow");
    });
}
anime();