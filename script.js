// Carrusell 
const cardsData = [
    { url: "https://i.ibb.co/MyXV5d8w/image.png", titulo: "Montañas", descripcion: "Un paisaje sereno en la cima de las montañas nevadas." },
    { url: "https://picsum.photos/id/1025/600/400", titulo: "Águila", descripcion: "La fuerza y libertad representada en un majestuoso vuelo." },
    { url: "https://i.ibb.co/TD1TtBWf/image.png", titulo: "Bosque", descripcion: "La tranquilidad de los árboles y el aire fresco." },
    { url: "https://picsum.photos/id/1045/600/400", titulo: "Río", descripcion: "Un cauce cristalino que refleja la pureza de la naturaleza." },
    { url: "https://i.ibb.co/MyXV5d8w/image.png", titulo: "Carretera", descripcion: "Un viaje sin fin hacia lo desconocido." },
    { url: "https://picsum.photos/id/1065/600/400", titulo: "Ciudad", descripcion: "La vida urbana llena de luces y energía." },
    { url: "https://picsum.photos/id/1075/600/400", titulo: "Mar", descripcion: "La inmensidad azul que nos invita a soñar." },
    { url: "https://picsum.photos/id/1085/600/400", titulo: "Desierto", descripcion: "La calma y la dureza de las arenas eternas." },
    { url: "https://picsum.photos/id/1095/600/400", titulo: "Campo", descripcion: "La sencillez y frescura de la vida rural." },
    { url: "https://picsum.photos/id/1105/600/400", titulo: "Aurora", descripcion: "Luces danzantes que iluminan el cielo nocturno." },
    { url: "https://picsum.photos/id/1115/600/400", titulo: "Isla", descripcion: "Un refugio perdido entre aguas turquesa." },
    { url: "https://picsum.photos/id/1125/600/400", titulo: "Cascada", descripcion: "El rugido del agua que cae con fuerza imponente." },
    { url: "https://picsum.photos/id/1135/600/400", titulo: "Lago", descripcion: "Espejo natural donde se refleja la vida." },
    { url: "https://picsum.photos/id/1145/600/400", titulo: "Noche", descripcion: "Un cielo estrellado que invita a contemplar." },
    { url: "https://picsum.photos/id/1155/600/400", titulo: "Camino", descripcion: "La ruta hacia nuevas oportunidades." },
];

function renderCarrusel(data) {
  const container = document.querySelector(".carrusell-images");

  // duplicamos los datos para efecto infinito
  const doubled = [...data, ...data];

  doubled.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundImage = `url(${item.url})`;

    card.innerHTML = `
      <div class="overlay-carrusell"></div>
      <div class="card-content">
        <h3>${item.titulo}</h3>
        <p>${item.descripcion}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

renderCarrusel(cardsData);







// Logros y avances 


//Seccion Web
const slides = [
  { url: "https://i.ibb.co/chgmXRdT/lv10.png", year: "2020", title: "Montañas al amanecer" },
  { url: "https://picsum.photos/id/1025/1200/800", year: "2021", title: "Naturaleza salvaje" },
  { url: "https://picsum.photos/id/1035/1200/800", year: "2022", title: "Paisaje urbano" }
];

const slideshow = document.getElementById("slideshow");
const overlayYear = slideshow.querySelector(".year");
const overlayTitle = slideshow.querySelector(".title");

let currentIndex = 0;

// Crear imágenes en el DOM
slides.forEach((slide, index) => {
  const img = document.createElement("img");
  img.src = slide.url;
  if (index === 0) img.classList.add("active");
  slideshow.appendChild(img);
});

const images = slideshow.querySelectorAll("img");

// Función para cambiar de imagen
function changeSlideWeb() {
  images[currentIndex].classList.remove("active");

  currentIndex = (currentIndex + 1) % slides.length;

  images[currentIndex].classList.add("active");

  overlayYear.textContent = slides[currentIndex].year;
  overlayTitle.textContent = slides[currentIndex].title;
}

// Inicializar con la primera
overlayYear.textContent = slides[0].year;
overlayTitle.textContent = slides[0].title;

// Cada 6 segundos cambiar
setInterval(changeSlideWeb, 6000);




//Seccion Responsive
const slidesR = [
  { url: "https://i.ibb.co/chgmXRdT/lv10.png", year: "2020", title: "Montañas al amanecer" },
  { url: "https://picsum.photos/id/1025/1200/800", year: "2021", title: "Naturaleza salvaje" },
  { url: "https://picsum.photos/id/1035/1200/800", year: "2022", title: "Paisaje urbano" }
];

const slideshowR = document.getElementById("slideshow-2");
const overlayYearR = slideshowR.querySelector(".year");
const overlayTitleR = slideshowR.querySelector(".title");

let currentIndexR = 0;

// Crear imágenes en el DOM
slidesR.forEach((slide, index) => {
  const img = document.createElement("img");
  img.src = slide.url;
  if (index === 0) img.classList.add("active");
  slideshowR.appendChild(img);
});

const imagesR = slideshowR.querySelectorAll("img");

// Función para cambiar de imagen
function changeSlideResponsive() {
  imagesR[currentIndexR].classList.remove("active");

  currentIndexR = (currentIndexR + 1) % slidesR.length;

  imagesR[currentIndexR].classList.add("active");

  overlayYearR.textContent = slidesR[currentIndexR].year;
  overlayTitleR.textContent = slidesR[currentIndexR].title;
}

// Inicializar con la primera
overlayYearR.textContent = slidesR[0].year;
overlayTitleR.textContent = slidesR[0].title;

// Cada 6 segundos cambiar
setInterval(changeSlideResponsive, 6000);




// Acordion logros y avances
const accordions = document.querySelectorAll(".accordion-item");

accordions.forEach(item => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    // Cerrar todos
    accordions.forEach(i => i.classList.remove("active"));
    // Abrir solo el actual
    item.classList.add("active");
  });
});





// Modal Videos FB
const modal = document.getElementById("videoModal");
const videoContainer = document.getElementById("videoContainer");
const closeBtn = document.querySelector(".close");

// Abrir modal al hacer click en la imagen
document.querySelectorAll(".video-thumb").forEach(img => {
  img.addEventListener("click", () => {
    const videoUrl = img.getAttribute("data-video");
    // Cargar iframe de Facebook dentro del modal
    videoContainer.innerHTML = `
      <iframe src="https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&autoplay=1"
      width="100%" height="450" 
      style="border:none;overflow:hidden" 
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen></iframe>`;
    modal.style.display = "flex";
  });
});

// Cerrar modal 
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  videoContainer.innerHTML = ""; // Limpiar iframe para detener video
});

// Cerrar modal si se hace click fuera del contenido
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    videoContainer.innerHTML = ""; // Detener video
  }
});


// Modal Videos FB Responsive

const modalR = document.getElementById("videoModalR");
const videoContainerR = document.getElementById("videoContainerR");
const closeBtnR = document.querySelector(".closeR");

// Abrir modal al hacer click en la imagen
document.querySelectorAll(".video-thumb").forEach(img => {
  img.addEventListener("click", () => {
    const videoUrl = img.getAttribute("data-video");
    // Cargar iframe de Facebook dentro del modal
    videoContainerR.innerHTML = `
      <iframe src="https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&autoplay=1"
      width="100%" height="450" 
      style="border:none;overflow:hidden" 
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen></iframe>`;
    modalR.style.display = "flex";
  });
});

// Cerrar modal 
closeBtnR.addEventListener("click", () => {
  modalR.style.display = "none";
  videoContainerR.innerHTML = ""; // Limpiar iframe para detener video
});

// Cerrar modal si se hace click fuera del contenido
modalR.addEventListener("click", (e) => {
  if (e.target === modalR) {
    modalR.style.display = "none";
    videoContainerR.innerHTML = ""; // Detener video
  }
});







// Boton Menu Hamburguesa Nav
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("main-nav-lateral");
const closeMenu = document.getElementById("closeMenu");
const navOverlay = document.getElementById("navOverlay");

// Abrir menú
menuToggle.addEventListener("click", () => {
  mainNav.classList.add("active");
  navOverlay.classList.add("active");
});

// Cerrar menú con botón X
closeMenu.addEventListener("click", () => {
  mainNav.classList.remove("active");
  navOverlay.classList.remove("active");
});

// Cerrar menú al hacer click en overlay
navOverlay.addEventListener("click", () => {
  mainNav.classList.remove("active");
  navOverlay.classList.remove("active");
});

// Cerrar al hacer click en un link del menú
document.querySelectorAll(".main-nav-lateral a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
    navOverlay.classList.remove("active");
  });
});



// Acordion Ejes de gobierno (6)
const blocks = document.querySelectorAll(".block-list");

blocks.forEach(block => {
  block.addEventListener("click", () => {
    block.classList.toggle("active");
  });
});
