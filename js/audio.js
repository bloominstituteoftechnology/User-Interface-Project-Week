"use strict";
let audio = document.getElementById("audio");

function setupSeek() {
    let seek = document.getElementById("audioSeek");
    seek.min = 0;
    seek.max = Math.round(audio.duration);
    seek.value = 0;
    let duration = document.getElementById("duration");
    duration.innerHTML = "0/" + Math.round(audio.duration);
}

function togglePlay() {
    if (audio.paused || audio.ended) {
        audio.play();
    }
    else {
        audio.pause();
    }
}

function updatePlayPause() {
    let play = document.getElementById("play");
    if (audio.paused || audio.ended) {
        play.value = "Play";
    }
    else {
        play.value = "Pause";
    }
}

function endAudio() {
    document.getElementById("play").value = "Play";
    document.getElementById("audioSeek").value = 0;
    document.getElementById("duration").innerHTML = "0/" + Math.round
        (audio.duration);
}

audio.addEventListener("durationchange", setupSeek, false);
document.getElementById("play").addEventListener("click", togglePlay, false);
audio.addEventListener("play", updatePlayPause, false);
audio.addEventListener("pause", updatePlayPause, false);
audio.addEventListener("ended", endAudio, false);

function seekAudio() {
    let seek = document.getElementById("audioSeek");
    audio.currentTime = seek.value;
}

function updateSeek() {
    let seek = document.getElementById("audioSeek");
    seek.value = Math.round(audio.currentTime);
    let duration = document.getElementById("duration");
    duration.innerHTML = Math.round(audio.currentTime) + "/" +
        Math.round(audio.duration);
}

document.getElementById("audioSeek").addEventListener("change", seekAudio, false);
audio.addEventListener("timeupdate", updateSeek, false);

function toggleMute() {
    audio.muted = !audio.muted;
}

function updateMute() {
    let mute = document.getElementById("mute");
    if (audio.muted) {
        mute.value = "Unmute";
    }
    else {
        mute.value = "Mute";
    }
}

function setVolume() {
    let volume = document.getElementById("volume");
    audio.volume = volume.value;
}






















