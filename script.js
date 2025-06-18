document.addEventListener('DOMContentLoaded', function() {
    // Параллакс-эффект для фона
    const videoBg = document.querySelector('.video-background');
    const gradient = document.querySelector('.gradient-overlay');
    const contentHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const maxScroll = contentHeight - windowHeight;
    const bgScrollableHeight = videoBg.offsetHeight - windowHeight;
    const bgSpeed = bgScrollableHeight / maxScroll;

    const maxDarkness = 0.9; // Максимальная непрозрачность (0-1)
    const maxBlur = 15; // Максимальное размытие в пикселях
    const effectEndPoint = 500; // Пиксель скролла, где эффект достигает максимума

    document.addEventListener('scroll', function() {
        const scrollPos = window.scrollY;

        // 1. Движение фона (параллакс)
        const bgOffset = Math.min(scrollPos * bgSpeed, bgScrollableHeight);
        videoBg.style.transform = `translateY(${bgOffset}px)`;

        // 2. Затемнение и размытие градиента (без движения)
        const progress = Math.min(scrollPos / effectEndPoint, 1); // 0-1
        const darkness = progress * maxDarkness;
        const blur = progress * maxBlur;

        gradient.style.opacity = darkness;
        gradient.style.backdropFilter = `blur(${blur}px)`;
        gradient.style.transform = 'none';
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

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const headline = document.querySelector('.headline');
    const inner = document.querySelector('.inner');
    const gifBackground = document.querySelector('.gif-background');
    
    // Sticky nav on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const headlineHeight = headline.offsetHeight;
        
        // Nav background change
        if (scrollPosition > headlineHeight * 0.7) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Parallax effect for GIF background
        const gifOffset = scrollPosition * 0.5;
        gifBackground.style.transform = `translateY(${gifOffset}px)`;
        
        // Fade out header content
        const opacity = 1 - scrollPosition / (headlineHeight * 0.8);
        inner.style.opacity = Math.max(0, opacity).toString();
    });
    
    // Mobile menu toggle (optional)
    const menuToggle = document.createElement('div');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '☰';
    nav.appendChild(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        const ul = nav.querySelector('ul');
        ul.style.display = ul.style.display === 'flex' ? 'none' : 'flex';
    });
});