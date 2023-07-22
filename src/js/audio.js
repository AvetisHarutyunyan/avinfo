"use strict";

function playStopBtn() {
    const playStopToggle = document.querySelector(".play_and_stop__btn");
    const playStopText = document.querySelector(".play_and_stop__text");
    const music = document.querySelector(".music_mp3");

    playStopToggle.addEventListener("click", () => {
        if (!playStopToggle.classList.contains("songPlay")) {
            playStopToggle.classList.add("songPlay");
            playStopText.textContent = "Stop";
            music.play();
        } else {
            playStopToggle.classList.remove("songPlay");
            playStopText.textContent = "Play";
            music.pause();
        }
    });
}
playStopBtn();