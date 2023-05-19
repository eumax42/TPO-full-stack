let slideIndex = 0;
let dots = document.getElementsByClassName("dot");
let slider = document.getElementsByClassName("slideshow-container")[0];
let slides = document.getElementsByClassName("mySlides");
let slideInterval;
// Llama a la función para mostrar las diapositivas
showSlides();
// Declaracion de la funcion ShowSlides
function showSlides() {
    // Ocultar todas las diapositivas y quitar la clase "active" de todos los puntos
    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  // Mostrar la diapositiva actual y añadir la clase "active" al punto correspondiente
  slides[slideIndex - 1].style.display = "block";   
  dots[slideIndex - 1].classList.add("active");
  // Intervalo de tiempo para cambiar las diapositivas
  slideInterval = setTimeout(showSlides, 4000);
}
// Función para avanzar o retroceder en las diapositivas
function plusSlides(n) {
  slideIndex += n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  showSlides();
}
// Función para ir a una diapositiva específica
function currentSlide(n) {
  slideIndex = n;
  showSlides();
}
// Funciones para detener o iniciar el carrusel al pasar el mouse por encima
function stopSlideshow() {
  clearInterval(slideInterval);
}

function startSlideshow() {
  slideInterval = setInterval(showSlides, 4000);
}
// Detener o iniciar el carrusel
slider.addEventListener("mouseover", stopSlideshow);
slider.addEventListener("mouseout", startSlideshow);
