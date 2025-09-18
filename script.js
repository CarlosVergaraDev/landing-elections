// Carrusell 
const cardsData = [
    { url: "https://i.ibb.co/PZwdmxTJ/image.png", titulo: "Programa de movilidad académica ", descripcion: "Despedimos a 21 estudiantes beneficiarios del Programa de Inmersión en Lenguas Extranjeras, quienes viajan a Canadá para fortalecer su formación. Por tercer año consecutivo, la Universidad del Atlántico impulsa la movilidad académica y la proyección internacional, consolidando avances con La Excelencia Continua." },


    { url: "https://i.ibb.co/xq54jgtB/image.png", titulo: "Firma de convenio en conjunto de rectores Madrid - España ", descripcion: "En la misión académica en Madrid, la Universidad del Atlántico suscribió una declaración conjunta con rectores y directivos internacionales para fortalecer la educación superior, la investigación y la digitalización. Un paso firme hacia la internacionalización de nuestros estudiantes y docentes, consolidando La Excelencia Continua." },
    
    { url: "https://i.ibb.co/tp2QqR2G/image.png", titulo: "Tres años de gestión la excelencia continua", descripcion: "Desde la rectoría, hemos avanzado en internacionalización, regionalización y modernización de la infraestructura educativa. Tres años de gestión que marcan un antes y un después para la Universidad del Atlántico." },

    
    { url: "https://i.ibb.co/j9GN1yDf/image.pngg", titulo: "Fortalecimiento de las sedes regionales ", descripcion: "El fortalecimiento de las sedes de Sabanalarga y Suan refleja el compromiso con la descentralización y el acceso a una educación superior de calidad. Con estas mejoras en infraestructura, la Universidad del Atlántico amplía su alcance y reafirma su liderazgo regional con La Excelencia Continua." },

    { url: "https://i.ibb.co/nqLpFX6x/image.png", titulo: "Lanzamiento de voluntariado Uniatlantico", descripcion: "Con el lanzamiento del Voluntariado Uniatlántico, la Universidad fortalece su compromiso solidario en alianza con instituciones locales y regionales. Un espacio que integra lo académico, social, artístico, cultural y ambiental, formando líderes que transforman la región." },

    { url: "https://i.ibb.co/qYNsPy8w/image.png", titulo: "Observatorio Mesoamericano de Educación Ambiental", descripcion: "Entrega de un espacio físico que lleva por nombre 'Laboratorio de ideas - Investigación', dotado de equipos de última generación, enlazados con la Red Mesoamericana de Educación Ambiental." },

    { url: "https://i.ibb.co/PGfSDsLC/image.png", titulo: "Nuevo sistema de alumbrado en la universidad del atlántico", descripcion: "La instalación del nuevo sistema de alumbrado en la Universidad del Atlántico transforma la seguridad del campus y responde a las necesidades de estudiantes y docentes. Un avance enmarcado en la estrategia #UATerritorioSeguro." },

    { url: "https://i.ibb.co/kV4Vd32N/image.png", titulo: "Entrega de pista atlética y cancha de futbol", descripcion: "Con la entrega de la cancha de fútbol y la pista atlética, la Universidad del Atlántico fortalece la formación integral de sus estudiantes y proyecta el deporte como motor de desarrollo en la región Caribe." },

    { url: "https://i.ibb.co/RGwwW8Wm/image.png", titulo: "Entrega de casa villa arte", descripcion: "Con la inauguración de la renovada Cafetería Central de la Sede Norte, la Universidad del Atlántico entrega un espacio inclusivo, accesible y con capacidad para más de 1.200 personas." },
    
    { url: "https://i.ibb.co/fdcW0N7h/image.png", titulo: "Aulas híbridas en la sede Norte de la UA", descripcion: "Con 16 aulas híbridas en la Sede Norte, la Universidad del Atlántico moderniza sus espacios académicos, integrando modalidades presenciales y remotas. Un avance que fortalece la calidad educativa." },

    { url: "https://i.ibb.co/nNCzzZTq/image.png", titulo: "Entrega de la cafetería central UA", descripcion: "La reapertura de la Cafetería Central ofrece nuevos servicios y fortalece el Programa de Almuerzos Subsidiados para los estudiantes. Un espacio moderno que promueve la integración y el bienestar de toda la comunidad universitaria." },

    { url: "https://i.ibb.co/B5PvGH9H/image.png", titulo: "Donación de lote construcción sede soledad ", descripcion: "Con el apoyo de la Alcaldía de Soledad y la Gobernación del Atlántico, se concreta la intención de donación de una sede para nuestra institución. Un espacio con aulas, laboratorios y servicios que fortalece la regionalización." },

    { url: "https://i.ibb.co/mkMxQNV/image.png", titulo: "Repotenciación de la planta de tratamiento de aguas residuales ", descripcion: "La repotenciación de la planta de tratamiento de aguas residuales demuestra el compromiso de la Universidad del Atlántico con la sostenibilidad. Una inversión en infraestructura y tecnología que garantiza buenas prácticas ambientales." },

    { url: "https://i.ibb.co/0jRxzYHX/image.png", titulo: "Apertura al sistema de medios UA", descripcion: "Con el lanzamiento del Sistema de Medios, la Universidad del Atlántico fortalece sus canales de comunicación y participación. Un logro que amplía la voz de la comunidad universitaria y consolida la innovación institucional, enmarcada en La Excelencia Continua." }
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
  { url: "https://i.ibb.co/gb0T9rhP/lv07.png", year: "2025", title: "Restauración de sede Bellas Artes" },
  { url: "https://i.ibb.co/PZwdmxTJ/image.png", year: "2024", title: "Ampliación de oferta academica en sede Suan" },
  { url: "https://i.ibb.co/TD1TtBWf/image.png", year: "2023", title: "Gratuidad universal para Matriculas de estratos 1,2 y 3" },
  { url: "https://i.ibb.co/chgmXRdT/lv10.png", year: "2022", title: "Se aumento a 23 el numero de programas acreditados en alta calida" },
  { url: "https://i.ibb.co/j9GN1yDf/image.png", year: "2021", title: "Apertura oficial de la sede Sabanalarga" }
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
setInterval(changeSlideWeb, 5000);




//Seccion Responsive
const slidesR = [
  { url: "https://i.ibb.co/gb0T9rhP/lv07.png", year: "2025", title: "Restauración de sede Bellas Artes" },
  { url: "https://i.ibb.co/PZwdmxTJ/image.png", year: "2024", title: "Ampliación de oferta academica en sede Suan" },
  { url: "https://i.ibb.co/TD1TtBWf/image.png", year: "2023", title: "Gratuidad universal para Matriculas de estratos 1,2 y 3" },
  { url: "https://i.ibb.co/chgmXRdT/lv10.png", year: "2022", title: "Se aumento a 23 el numero de programas acreditados en alta calida" },
  { url: "https://i.ibb.co/j9GN1yDf/image.png", year: "2021", title: "Apertura oficial de la sede Sabanalarga" }
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
setInterval(changeSlideResponsive, 5000);




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
