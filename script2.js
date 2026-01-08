const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

const songs = [
    { name: "Song One", artist: "Artist A", src: "songs/song1.mp3" },
    { name: "Song Two", artist: "Artist B", src: "songs/song2.mp3" },
    { name: "Song Three", artist: "Artist C", src: "songs/song3.mp3" }
];

let songIndex = 0;

function loadSong(index) {
    title.textContent = songs[index].name;
    artist.textContent = songs[index].artist;
    audio.src = songs[index].src;
}

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function nextSong() {
    songIndex++;
    if (songIndex >= songs.length) {
        songIndex = 0;
    }
    loadSong(songIndex);
    audio.play();
}

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songIndex);
    audio.play();
}

audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100 || 0;
});

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value * audio.duration) / 100;
});

volume.addEventListener("input", () => {
    audio.volume = volume.value;
});

loadSong(songIndex);