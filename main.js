/* Navbar */
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("change");
  menu.classList.toggle("change");
});

/* Cierra Navbar */

/* Video */
// Seleccionar el elemento de video, el botón de reproducción/pausa y la barra de progreso
const video = document.querySelector(".video");
const btn = document.querySelector(".buttons button i");
const bar = document.querySelector(".video-bar");

// Función para reproducir o pausar el video y cambiar el ícono y la opacidad
const playPause = () => {
  if (video.paused) {
    video.play();
    btn.className = "far fa-pause-circle"; // Cambiar el ícono a pausa
    video.style.opacity = "0.7"; // Cambiar la opacidad del video
  } else {
    video.pause();
    btn.className = "far fa-play-circle"; // Cambiar el ícono a pausa
    video.style.opacity = "0.3"; // Cambiar la opacidad del video
  }
};

// Agregar un event listener al botón para activar la función playPause
btn.addEventListener("click", () => {
  playPause();
});

// Agregar un event listener al video para actualizar la barra de progreso y realizar acciones al finalizar
video.addEventListener("timeupdate", () => {
  console.log(video.currentTime, video.duration); // Mostrar en la consola el tiempo actual y la duración total del video
  const barWidth = video.currentTime / video.duration; // Calcular el ancho de la barra de progreso
  bar.style.width = `${barWidth * 100}%`; // Establecer el ancho de la barra de progreso en porcentaje

  // Verificar si el video ha finalizado y realizar acciones correspondientes
  if (video.ended) {
    btn.className = "far fa-play-circle"; // Cambiar el ícono a reproducción al finalizar
    video.style.opacity = "0.3"; // Cambiar la opacidad del video
  }
});

/* Cierra Video */
