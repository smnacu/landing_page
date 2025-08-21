// Simple carousel: moves the track left/right by card width
document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.carousel-track');
  const prev = document.getElementById('carousel-prev');
  const next = document.getElementById('carousel-next');
  if (!track) return;

  const cards = Array.from(track.children);
  let index = 0;

  function update() {
    const card = cards[index];
    if (!card) return;
    const left = card.offsetLeft;
    track.scrollTo({ left, behavior: 'smooth' });
  }

  prev && prev.addEventListener('click', function () {
    index = Math.max(0, index - 1);
    update();
  });

  next && next.addEventListener('click', function () {
    index = Math.min(cards.length - 1, index + 1);
    update();
  });

  // optional: keyboard support
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prev && prev.click();
    if (e.key === 'ArrowRight') next && next.click();
  });

  // make sure track snaps to first card on resize
  window.addEventListener('resize', function () { update(); });
});
