document.addEventListener('DOMContentLoaded', function() {
    // Flip card functionality
    const flipCards = document.querySelectorAll('.square-flip');
    
    flipCards.forEach(card => {
        const readMoreBtn = card.querySelector('.read-more-btn');
        const flipBackBtn = card.querySelector('.flip-back-btn');
        
        readMoreBtn.addEventListener('click', () => {
            card.classList.add('flipped');
        });
        
        flipBackBtn.addEventListener('click', () => {
            card.classList.remove('flipped');
        });
    });

    // Reaction system
    document.querySelectorAll('.reaction').forEach(reaction => {
        reaction.addEventListener('click', function() {
            if(!this.dataset.clicked) {
                const count = parseInt(this.textContent.match(/\d+/)[0]);
                this.textContent = this.textContent.replace(/\d+/, count + 1);
                this.dataset.clicked = true;
                this.style.color = '#ff6b00';
                this.style.textShadow = '0 0 10px rgba(255, 107, 0, 0.8)';
            }
        });
    });

    // Sticky navigation
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});

// Enhanced parallax effect
document.addEventListener('DOMContentLoaded', function() {
    const bgTiles = document.querySelector('.news-bg-tiles');
    const newsGrid = document.querySelector('.news-grid');
    
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        // Subtle parallax effect (adjust 0.01 for stronger/weaker effect)
        bgTiles.style.transform = `translateY(${-scrollY * 0.01}px)`;
        // Content lift effect
        newsGrid.style.transform = `translateZ(20px)`;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const img1 = new Image();
    const img2 = new Image();
    
    img1.src = '../src/images/news_background_mobile.jpeg';
    img2.src = '../src/images/news_background_mobile_flip.jpeg';
    
    img1.onload = img2.onload = function() {
        console.log('Images loaded. Heights:', img1.height, img2.height);
        // If heights differ, adjust background-position in CSS
    };
});