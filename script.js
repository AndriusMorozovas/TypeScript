"use strict";
const play1 = document.querySelector(".play-1");
const play2 = document.querySelector(".play-2");
const play3 = document.querySelector(".play-3");
const play4 = document.querySelector(".play-4");
const play5 = document.querySelector(".play-5");
const play6 = document.querySelector(".play-6");
const video1 = document.querySelector(".video-1");
const video2 = document.querySelector(".video-2");
const video3 = document.querySelector(".video-3");
play1.onclick = () => {
    const catAudio = new Audio("./audio/hungry-cat.mp3");
    if (catAudio.paused) {
        catAudio.play();
    }
    else {
        catAudio.pause();
    }
};
play2.onclick = () => {
    const cowAudio = new Audio("./audio/cow-sound.mp3");
    if (cowAudio.paused) {
        cowAudio.play();
    }
    else {
        cowAudio.pause();
    }
};
play3.onclick = () => {
    const goatAudio = new Audio("./audio/goat-sound.mp3");
    if (goatAudio.paused) {
        goatAudio.play();
    }
    else {
        goatAudio.pause();
    }
};
play4.onclick = () => {
    if (video1.paused) {
        video1.play();
    }
    else {
        video1.pause();
    }
};
play5.onclick = () => {
    if (video2.paused) {
        video2.play();
    }
    else {
        video2.pause();
    }
};
play6.onclick = () => {
    if (video3.paused) {
        video3.play();
    }
    else {
        video3.pause();
    }
};
