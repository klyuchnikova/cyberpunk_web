document.querySelectorAll('.location-marker').forEach(marker => {
    marker.addEventListener('mouseenter', function() {
      this.querySelector('.neon-sign').style.transform = 'scale(1.1)';
    });
    
    marker.addEventListener('mouseleave', function() {
      this.querySelector('.neon-sign').style.transform = 'scale(1)';
    });
    
    marker.addEventListener('click', function() {
      // Здесь можно добавить открытие модального окна с информацией о месте
      alert('Информация о локации: ' + this.querySelector('.neon-sign').textContent);
    });
});