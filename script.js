document.addEventListener('DOMContentLoaded', function() {
    const videoBg = document.querySelector('.video-background');
    const gradient = document.querySelector('.gradient-overlay');
    const contentHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;

    // Вычисляем, насколько гифка может сдвинуться вниз (разница её высоты и высоты окна)
    const maxScroll = contentHeight - windowHeight;
    const bgScrollableHeight = videoBg.offsetHeight - windowHeight;

    // Коэффициент скорости: насколько медленнее двигается фон
    // (если 1 — двигается 1:1 со скроллом, если 0.5 — в 2 раза медленнее)
    const bgSpeed = bgScrollableHeight / maxScroll;

    document.addEventListener('scroll', function() {
        const scrollPos = window.scrollY;

        // Ограничиваем движение фона, чтобы не уходил за границы
        const bgOffset = Math.min(scrollPos * bgSpeed, bgScrollableHeight);
        videoBg.style.transform = `translateY(${bgOffset}px)`;

        // Градиент можно двигать с другой скоростью (например, медленнее)
        gradient.style.transform = `translateY(${scrollPos * 0.5}px)`;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const textBlocks = document.querySelectorAll('.text-block');
    const windowHeight = window.innerHeight;
    const triggerZone = 0.6; // Активация эффекта на 60% высоты экрана

    function updateParallax() {
        textBlocks.forEach(block => {
            const blockRect = block.getBoundingClientRect();
            const blockCenter = blockRect.top + blockRect.height / 2;
            const screenTriggerPoint = windowHeight * triggerZone; // Точка срабатывания (60%)
            
            // Насколько блок близок к триггерной зоне (0 = далеко, 1 = прямо на точке)
            const proximity = 1 - Math.abs(screenTriggerPoint - blockCenter) / (windowHeight * 0.3);
            const clampedProximity = Math.max(0, Math.min(1, proximity)); // Ограничиваем от 0 до 1

            // Смещение влево (макс. 10% ширины экрана)
            const offset = -clampedProximity * window.innerWidth * 0.1;
            
            // Яркость свечения (начальное значение 0.8, максимальное 1.2)
            const glowIntensity = 0.8 + clampedProximity * 0.4;

            // Применяем эффекты
            block.style.transform = `translateX(${offset}px)`;
            block.style.filter = `brightness(${glowIntensity}) drop-shadow(0 0 ${clampedProximity * 15}px rgba(0, 200, 255, 0.7))`;
        });
    }

    window.addEventListener('scroll', updateParallax);
    window.addEventListener('resize', updateParallax);
    updateParallax();
});

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');
    const leftBtn = document.querySelector('.carousel-arrow.left');
    const rightBtn = document.querySelector('.carousel-arrow.right');
    
    let currentIndex = 0;
    const cardWidth = 280; // Ширина карточки + gap
    
    function updateCarousel() {
        // Смещение карусели
        carousel.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
        
        // 3D-эффект для карточек
        cards.forEach((card, index) => {
            const distance = Math.abs(index - currentIndex);
            const scale = 1 - distance * 0.1;
            const opacity = 1 - distance * 0.3;
            
            card.style.transform = `scale(${scale})`;
            card.style.opacity = opacity;
            card.style.zIndex = 10 - distance;
        });
    }
    
    leftBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    rightBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Инициализация
    updateCarousel();
});

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');
    const leftBtn = document.querySelector('.carousel-arrow.left');
    const rightBtn = document.querySelector('.carousel-arrow.right');
    const modal = document.querySelector('.modal-overlay');
    const closeBtn = document.querySelector('.close-modal');
    
    let currentIndex = Math.floor(cards.length / 2); // Старт с центра
    
    function updateCarousel() {
        cards.forEach((card, index) => {
            const distance = Math.abs(index - currentIndex);
            const scale = 1 - distance * 0.1;
            const opacity = 0.7 + (1 - distance) * 0.3;
            
            card.style.transform = `scale(${scale})`;
            card.style.opacity = opacity;
            card.classList.toggle('active', distance === 0);
        });
    }
    
    // Клик по карточке
    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (card.classList.contains('active')) {
                document.querySelector('.modal-image').src = card.querySelector('img').src;
                document.querySelector('.modal-title').textContent = card.querySelector('h3').textContent;
                document.querySelector('.modal-description').textContent = card.dataset.details;
                modal.style.display = 'flex';
            }
        });
    });
    
    // Закрытие модалки
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Навигация
    leftBtn.addEventListener('click', () => {
        if (currentIndex > 0) currentIndex--;
        updateCarousel();
    });
    
    rightBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) currentIndex++;
        updateCarousel();
    });
    
    // Инициализация
    updateCarousel();
});