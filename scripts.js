// Initialize carousel functionality
function initializeCarousel() {
  const cards = document.querySelectorAll(".card");
  let currentIndex = 0;

  function updateCarousel() {
    const transformValue = `translateX(${-currentIndex * 320}px)`;
    document.getElementById("carousel").style.transform = transformValue;

    cards.forEach((card, index) => {
      const iframe = card.querySelector("iframe");
      iframe.src = iframe.src.replace(/autoplay=\d/, `autoplay=${index === currentIndex ? 1 : 0}`);
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" && currentIndex < cards.length - 1) {
      currentIndex++;
      updateCarousel();
    } else if (e.key === "ArrowLeft" && currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  updateCarousel();
}

// Theme toggle
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const isLightMode = document.body.classList.contains("light-mode");
  document.getElementById("toggle-theme").textContent = isLightMode ? "🌞" : "🌑";
});

// Initialize everything
initializeCarousel();
