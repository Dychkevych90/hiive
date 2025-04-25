const video = document.getElementById('season-video');
const seasonCard = document.querySelector('.season-card');
const seasonTitle = seasonCard.querySelector('.title');
const seasonText = seasonCard.querySelector('.bottom');
const seasonImg = seasonCard.querySelector('img');

const SEASON_DATA = {
  Winter: {
    title: "THE WINTER CLUSTER",
    text: `In the tree cavity-like
      geometry, a narrow
      cylinder, the bee colony can
      position itself in the center
      during winter, separating
      the cold air at the bottom
      from the warmer air above.
      This allows air exchange to
      occur slowly and controlled,
      helping the bees save a lot
      of energy during the winter`,
    icon: './images/icons/snowflake.svg'
  },
  Spring: {
    title: "EARLY BROOD",
    text: `In spring, when the first
      bulb flowers bloom, the
      bees enter brood and
      require 30°C in the brood
      nest. They position their
      mass in a way that seals the
      entire cylinder, allowing
      them to effectively retain
      warm air despite nighttime
      freezing temperatures and
      cool days.`,
    icon: './images/icons/sping.svg'
  },
  Summer: {
    title: "COOLING",
    text: `The constant insulation performance of
thermo-hemp allows for the replication of a tree cavity in an approximately
220-500-year-old oak tree.`,
    icon: './images/icons/summer.svg'
  },
  // Autumn: {
  //   title: "PREPARING FOR WINTER",
  //   text: `Bees reduce activity and start storing food for winter...`,
  //   icon: './images/icons/snowflake.svg'
  // }
};

let currentSeason = '';
let hideTimeout = null;

function showSeason(season) {
  if (season !== currentSeason) {
    currentSeason = season;

    const {title, text, icon} = SEASON_DATA[season];
    seasonTitle.textContent = title;
    seasonText.textContent = text;
    seasonImg.src = icon;

    // Show card
    seasonCard.classList.add('show');

    // Hide after 4s
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      seasonCard.classList.remove('show');
    }, 4000);
  }
}

video.addEventListener('timeupdate', () => {
  const time = video.currentTime;

  const section = document.querySelector('.seasons-wrapper');
  const rect = section.getBoundingClientRect();
  const inView = rect.top < window.innerHeight && rect.bottom > 0;

  if (!inView) return;

  if (time < 5) showSeason('Winter');
  else if (time < 10) showSeason('Spring');
  else if (time < 15) showSeason('Summer');
  //else if (time < 20) showSeason('Autumn');
});
