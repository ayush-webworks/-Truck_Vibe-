
/* =========================================
   DESI TRUCK VIBES
   MUSIC + INTERACTIONS
========================================= */

const audio = document.getElementById("audio");

const playButton = document.getElementById("playButton");
const playerButton = document.getElementById("playerButton");

const playIcon = document.getElementById("playIcon");
const playText = document.getElementById("playText");

const musicBars = document.getElementById("musicBars");

const navMusic = document.getElementById("navMusic");


/* =========================================
   PLAY / PAUSE
========================================= */

function toggleMusic() {

    if (audio.paused) {

        audio.play()
            .then(() => {

                setPlayingState(true);

            })
            .catch(() => {

                alert(
                    "Bhai, pehle GitHub mein song.mp3 upload karo 🎵"
                );

            });

    } else {

        audio.pause();

        setPlayingState(false);

    }

}


/* =========================================
   UI STATE
========================================= */

function setPlayingState(isPlaying) {

    if (isPlaying) {

        playIcon.textContent = "Ⅱ";
        playText.textContent = "Pause Music";

        playerButton.textContent = "Ⅱ";

        musicBars.classList.add("playing");

        navMusic.textContent = "⏸ Playing";

    } else {

        playIcon.textContent = "▶";
        playText.textContent = "Play Music";

        playerButton.textContent = "▶";

        musicBars.classList.remove("playing");

        navMusic.textContent = "🎵 Music";

    }

}


/* =========================================
   BUTTON EVENTS
========================================= */

playButton.addEventListener(
    "click",
    toggleMusic
);

playerButton.addEventListener(
    "click",
    toggleMusic
);

navMusic.addEventListener(
    "click",
    toggleMusic
);


/* =========================================
   WHEN SONG ENDS
========================================= */

audio.addEventListener(
    "ended",
    () => {

        setPlayingState(false);

    }
);


/* =========================================
   KEYBOARD SHORTCUT
   SPACE = PLAY / PAUSE
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.code === "Space" &&
            event.target.tagName !== "INPUT" &&
            event.target.tagName !== "TEXTAREA"
        ) {

            event.preventDefault();

            toggleMusic();

        }

    }
);


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".vibe-card, .about-left, .about-right"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(
            (entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            }
        );

    },
    {
        threshold: .15
    }
);


revealElements.forEach(
    (element) => {

        element.style.opacity = "0";
        element.style.transform =
            "translateY(30px)";
        element.style.transition =
            "opacity .8s ease, transform .8s ease";

        observer.observe(element);

    }
);
