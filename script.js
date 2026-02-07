// Redirect to message page
function goToMessage() {
  window.location.href = "message.html";
}

// Floating hearts animation
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
