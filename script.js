/* ============================
   Page Redirect (Home Page)
============================ */
function goToMessage() {
  window.location.href = "message.html";
}

/* ============================
   Floating Hearts Animation
============================ */
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
  if (!heartsContainer) return;

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 14 + 16 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 400);

/* ============================
   Soft Fade-In Background Music
   (Only on message.html)
============================ */
window.addEventListener("load", () => {
  const music = document.getElementById("bgMusic");
  if (!music) return; // Run only on message page

  music.volume = 0;
  music.loop = true;

  let fadeInterval;

  function fadeInMusic() {
    if (!music.paused) return;

    music.play().catch(() => {});
    let volume = 0;

    fadeInterval = setInterval(() => {
      if (volume < 0.5) {
        volume += 0.02;
        music.volume = volume;
      } else {
        music.volume = 0.5;
        clearInterval(fadeInterval);
      }
    }, 200);
  }

  // Try autoplay on load
  fadeInMusic();

  // Mobile fallback: play on first user interaction
  document.body.addEventListener(
    "click",
    () => {
      if (music.paused) fadeInMusic();
    },
    { once: true }
  );
});
