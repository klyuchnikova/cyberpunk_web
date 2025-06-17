document.addEventListener('DOMContentLoaded', function() {
    // Параллакс-эффект для фона
    const videoBg = document.querySelector('.video-background');
    const gradient = document.querySelector('.gradient-overlay');
    const contentHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const maxScroll = contentHeight - windowHeight;
    const bgScrollableHeight = videoBg.offsetHeight - windowHeight;
    const bgSpeed = bgScrollableHeight / maxScroll;

    document.addEventListener('scroll', function() {
        const scrollPos = window.scrollY;
        const bgOffset = Math.min(scrollPos * bgSpeed, bgScrollableHeight);
        videoBg.style.transform = `translateY(${bgOffset}px)`;
        gradient.style.transform = `translateY(${scrollPos * 0.5}px)`;
    });

    // Параллакс-эффект для текстовых блоков
    const textBlocks = document.querySelectorAll('.text-block');
    const triggerZone = 0.6;

    function updateParallax() {
        textBlocks.forEach(block => {
            const blockRect = block.getBoundingClientRect();
            const blockCenter = blockRect.top + blockRect.height / 2;
            const screenTriggerPoint = windowHeight * triggerZone;
            const proximity = 1 - Math.abs(screenTriggerPoint - blockCenter) / (windowHeight * 0.3);
            const clampedProximity = Math.max(0, Math.min(1, proximity));
            const offset = -clampedProximity * window.innerWidth * 0.1;
            const glowIntensity = 0.8 + clampedProximity * 0.4;

            block.style.transform = `translateX(${offset}px)`;
            block.style.filter = `brightness(${glowIntensity}) drop-shadow(0 0 ${clampedProximity * 15}px rgba(0, 200, 255, 0.7))`;
        });
    }

    window.addEventListener('scroll', updateParallax);
    window.addEventListener('resize', updateParallax);
    updateParallax();
});

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  const leftBtn = document.querySelector('.carousel-arrow.left');
  const rightBtn = document.querySelector('.carousel-arrow.right');
  let currentIndex = 0;

  // Initialize carousel
  function updateCarousel() {
    cards.forEach((card, index) => {
      card.classList.remove('active', 'prev', 'next');

      if (index === currentIndex) {
        card.classList.add('active');
      } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
        card.classList.add('prev');
      } else if (index === (currentIndex + 1) % cards.length) {
        card.classList.add('next');
      }
    });
  }

  // Left arrow: Move to previous card
  leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
  });

  // Right arrow: Move to next card
  rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  });

  // Initialize
  updateCarousel();
});