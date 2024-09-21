onload = () => {
  document.body.classList.remove("container");
};
var video = document.getElementById("myVideo");

function openFullscreen() {
    video.style.display = "block"; // Mostrar el video si estaba oculto

    if (video.requestFullscreen) {
        video.requestFullscreen(); // Para navegadores más modernos
    } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari y Opera
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // Internet Explorer/Edge
        video.msRequestFullscreen();
    }

    video.play(); // Reproducir el video en pantalla completa
}

// Detectar cuando se sale del modo de pantalla completa
document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);

function exitHandler() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && 
        !document.mozFullScreenElement && !document.msFullscreenElement) {
        video.style.display = "none"; // Ocultar el video cuando salimos del modo de pantalla completa
    }
}