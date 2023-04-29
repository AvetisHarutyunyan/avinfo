"use strict";

function playStopBtn() {
    const playStopToggle = document.querySelector(".play_and_stop__btn");
    const playStopText = document.querySelector(".play_and_stop__text");
    const music = document.querySelector(".music_mp3");

    playStopToggle.addEventListener("click", () => {
        if (!playStopToggle.classList.contains("songStop")) {
            playStopToggle.classList.add("songStop");
            playStopText.textContent = "Play";
            music.pause();
        } else {
            playStopToggle.classList.remove("songStop");
            playStopText.textContent = "Stop";
            music.play();
        }
    });
}
playStopBtn();