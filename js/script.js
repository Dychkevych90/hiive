const video = document.getElementById('season-video');
const seasonTitle = document.getElementById('season-title');
const seasonCard = document.getElementById('season-card');

let currentSeason = '';
let timeoutId = null;

video.addEventListener('timeupdate', () => {
  const time = video.currentTime;

  if (time < 5) {
    updateSeason('Winter');
  } else if (time < 10) {
    updateSeason('Spring');
  } else if (time < 15) {
    updateSeason('Summer');
  } else if (time < 20) {
    updateSeason('Autumn');
  }
});

function updateSeason(season) {
  if (season !== currentSeason) {
    currentSeason = season;
    seasonTitle.textContent = season;

    // Slide in the card
    seasonCard.classList.add('show');

    // Clear previous timeout if still active
    if (timeoutId) clearTimeout(timeoutId);

    // Auto-hide after 3 seconds
    timeoutId = setTimeout(() => {
      seasonCard.classList.remove('show');
    }, 3000);
  }
}
