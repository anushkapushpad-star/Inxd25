const quote = document.querySelector('.quote-copy');
const lead = document.querySelector('.lead-copy');
const note = document.querySelector('.note-copy');
const tvStage = document.querySelector('.tv-stage');
const tvNote = document.querySelector('.tv-note');

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateScrollState() {
  const vh = window.innerHeight;
  const qScene = document.querySelector('.scene-quote');
  const tScene = document.querySelector('.scene-text');
  const tvScene = document.querySelector('.scene-tv');

  const qRect = qScene.getBoundingClientRect();
  const tRect = tScene.getBoundingClientRect();
  const tvRect = tvScene.getBoundingClientRect();

  const qProgress = clamp((vh - qRect.top) / (vh * 1.25), 0, 1);
  const qScale = 1 + qProgress * 0.18;
  const qOpacity = 1 - qProgress * 0.96;
  quote.style.transform = `translateY(${qProgress * 28}px) scale(${qScale})`;
  quote.style.opacity = qOpacity;

  const tProgress = clamp((vh - tRect.top) / (vh * 1.35), 0, 1);
  const tOpacity = clamp((tProgress - 0.12) / 0.8, 0, 1);
  lead.style.opacity = tOpacity;
  lead.style.transform = `translateY(${(1 - tOpacity) * 28}px)`;

  const noteProgress = clamp((vh - tRect.top) / (vh * 1.55), 0, 1);
  const noteOpacity = clamp((noteProgress - 0.25) / 0.7, 0, 1);
  note.style.opacity = noteOpacity;
  note.style.transform = `translateX(-50%) translateY(${(1 - noteOpacity) * 24}px)`;

  const tvProgress = clamp((vh - tvRect.top) / (vh * 1.4), 0, 1);
  const tvScale = 0.58 + tvProgress * 0.72;
  const tvOpacity = clamp(tvProgress * 1.25, 0, 1);
  const tvLift = (1 - tvProgress) * 120;
  tvStage.style.transform = `translateY(${tvLift}px) scale(${tvScale})`;
  tvStage.style.opacity = tvOpacity;

  const tvNoteOpacity = clamp((tvProgress - 0.18) / 0.7, 0, 1);
  tvNote.style.opacity = tvNoteOpacity;
  tvNote.style.transform = `translateX(-50%) translateY(${(1 - tvNoteOpacity) * 18}px)`;
}

window.addEventListener('scroll', updateScrollState, { passive: true });
window.addEventListener('resize', updateScrollState);
window.addEventListener('load', updateScrollState);

updateScrollState();
