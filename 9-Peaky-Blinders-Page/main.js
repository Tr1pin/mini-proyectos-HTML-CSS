const modal = document.getElementById('trailerModal');
const openModal = document.getElementById('openModal');
const closeBtn = document.querySelector('.close');
const trailerVideo = document.getElementById('trailerVideo');

openModal.onclick = function() {
  modal.style.display = 'flex';
  trailerVideo.src = "https://www.youtube.com/embed/Ruyl8_PT_y8?autoplay=1&mute=1";
}

// Función para cerrar el modal
closeBtn.onclick = function() {
  modal.style.display = 'none';
  trailerVideo.src = ""; 
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    trailerVideo.src = ""; 
  }
}