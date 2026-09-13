const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");

const currentTimeText = document.getElementById("currentTime");
const durationText = document.getElementById("duration");


// ================================
// PLAY / PAUSE
// ================================

playBtn.addEventListener("click", () => {

    if (audio.paused) {

        audio.play();

        playBtn.textContent = "❚❚";

    } else {

        audio.pause();

        playBtn.textContent = "▶";
    }

});


// ================================
// AUDIO TIME
// ================================

audio.addEventListener("loadedmetadata", () => {

    durationText.textContent = formatTime(audio.duration);

});


// ================================
// PROGRESS
// ================================

audio.addEventListener("timeupdate", () => {

    if (!audio.duration) return;

    const percent =
        (audio.currentTime / audio.duration) * 100;

    progress.style.width = percent + "%";

    currentTimeText.textContent =
        formatTime(audio.currentTime);
});


// ================================
// CLICK PROGRESS BAR
// ================================

document
    .querySelector(".progress-bar")
    .addEventListener("click", (event) => {

        if (!audio.duration) return;

        const rect =
            event.currentTarget.getBoundingClientRect();

        const clickPosition =
            event.clientX - rect.left;

        const percent =
            clickPosition / rect.width;

        audio.currentTime =
            percent * audio.duration;
    });


// ================================
// SONG ENDED
// ================================

audio.addEventListener("ended", () => {

    playBtn.textContent = "▶";

    progress.style.width = "0%";

    currentTimeText.textContent = "0:00";
});


// ================================
// FORMAT TIME
// ================================

function formatTime(seconds) {

    if (isNaN(seconds)) {
        return "0:00";
    }

    const minutes =
        Math.floor(seconds / 60);

    const remainingSeconds =
        Math.floor(seconds % 60);

    return (
        minutes +
        ":" +
        String(remainingSeconds).padStart(2, "0")
    );
}
