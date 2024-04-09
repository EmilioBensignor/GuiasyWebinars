const sliderWebinars = document.getElementById('sliderWebinars');
const selectRegion = document.getElementById('selectRegion');
const selectPais = document.getElementById('selectPais');
const contenedorGuias = document.getElementById('contenedorGuias');
const sliderBanner = document.getElementById('sliderBanner');
const sliderBannerDesktop = document.getElementById('sliderBannerDesktop');

const webinars = [
  {
    fondo: '../content/img/fondo.png',
    texto: '¡Acompañanos a descubrir Costa Rica!',
    link: 'www.youtube.com'
  },
  {
    fondo: '../content/img/fondo.png',
    texto: '¡Acompañanos a descubrir Costa Rica!',
    link: 'www.youtube.com'
  },
  {
    fondo: '../content/img/fondo.png',
    texto: '¡Acompañanos a descubrir Costa Rica!',
    link: 'www.youtube.com'
  },
  {
    fondo: '../content/img/fondo.png',
    texto: '¡Acompañanos a descubrir Costa Rica!',
    link: 'www.youtube.com'
  },
  {
    fondo: '../content/img/fondo.png',
    texto: '¡Acompañanos a descubrir Costa Rica!',
    link: 'www.youtube.com'
  },
  {
    fondo: '../content/img/fondo.png',
    texto: '¡Acompañanos a descubrir Costa Rica!',
    link: 'www.youtube.com'
  },
  {
    fondo: '../content/img/fondo.png',
    texto: '¡Acompañanos a descubrir Costa Rica!',
    link: 'www.youtube.com'
  },
  {
    fondo: '../content/img/fondo.png',
    texto: '¡Acompañanos a descubrir Costa Rica!',
    link: 'www.youtube.com'
  },
];
const optionsRegion = [
  "Todos",
  "America",
  "Europa",
  "Lejano Oriente",
  "Rusia y Países Bálticos",
];
const optionsPais = [
  "Todos",
  "Estados Unidos",
  "Alemania",
  "China"
];
const guias = [
  {
    fondo: "../content/img/guiaFondo.png",
    nombre: "Las Vegas",
  },
  {
    fondo: "../content/img/guiaFondo.png",
    nombre: "Las Vegas",
  },
  {
    fondo: "../content/img/guiaFondo.png",
    nombre: "Las Vegas",
  },
  {
    fondo: "../content/img/guiaFondo.png",
    nombre: "Las Vegas",
  },
  {
    fondo: "../content/img/guiaFondo.png",
    nombre: "Las Vegas",
  },
  {
    fondo: "../content/img/guiaFondo.png",
    nombre: "Las Vegas",
  },
];
const banners = [
  "../content/img/banner.png",
  "../content/img/banner.png",
  "../content/img/banner.png",
  "../content/img/banner.png",
];
const bannersDekstop = [
  "../content/img/bannerDesktop.png",
  "../content/img/bannerDesktop.png",
  "../content/img/bannerDesktop.png",
  "../content/img/bannerDesktop.png",
];

for (let region = 0; region < optionsRegion.length; region++) {
  const option = document.createElement('option');
  option.value = optionsRegion[region];
  option.textContent = optionsRegion[region];
  selectRegion.appendChild(option);
};
for (let pais = 0; pais < optionsPais.length; pais++) {
  const option = document.createElement('option');
  option.value = optionsPais[pais];
  option.textContent = optionsPais[pais];
  selectPais.appendChild(option);
};
for (let guia = 0; guia < guias.length; guia++) {
  contenedorGuias.innerHTML += `
    <button id="abrirModalGuia" class="guia">
      <div class="imagenGuia" style="background-image:url('${guias[guia]['fondo']}')">
        <p>${guias[guia]['nombre']}</p>
      </div>
      <div class="verGuia">
        <p>Ver guía</p>
      </div>
    </button>
  `;
}
for (let webinar = 0; webinar < webinars.length; webinar++) {
  sliderWebinars.innerHTML += `
    <div class="slide slideWebinar">
      <a href="#" class="contenedorCardWebinar">
        <div class="cardWebinar">
          <div class="cardWebinarImg" style="background-image: url(${webinars[webinar].fondo})">
            <div class="iconoPlayWebinar"></div>
          </div>
          <div class="contenidoCardWebinar">
            <p>${webinars[webinar].texto}</p>
          </div>
        </div>
      </a>
    </div>
  `;
}
for (let banner = 0; banner < banners.length; banner++) {
  sliderBanner.innerHTML += `
    <div class="slide">
      <div class="banner" style="background-image: url('${banners[banner]}')"></div>
    </div>
  `;
}
for (let bannerDesktop = 0; bannerDesktop < bannersDekstop.length; bannerDesktop++) {
  sliderBannerDesktop.innerHTML += `
    <div class="slide slideBannerDesktop">
      <div class="bannerDesktop" style="background-image: url('${bannersDekstop[bannerDesktop]}')"></div>
    </div>
  `;
}

$(document).ready(function () {
  $('.sliderWebinars').slick({
    infinite: !1,
    arrows: true,
    mobileFirst: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: "<img class='prev-webinar arrows-webinar slick-prev' src='../content/img/home/prev-arrow-oferta.svg'>",
    nextArrow: "<img class='next-webinar arrows-webinar slick-next' src='../content/img/home/next-arrow-webinar.svg'>",
    responsive: [
      { breakpoint: 1080, settings: { slidesToShow: 4, centerMode: !1, slidesToScroll: 1, variableWidth: !1 } },
      { breakpoint: 320, settings: { slidesToShow: 1.25, centerMode: !1, slidesToScroll: 1, variableWidth: !1 } },
    ],
  });
});
$(document).ready(function () {
  $('.sliderBanner').slick({
    infinite: true,
    dots: true,
    speed: 600,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
$(document).ready(function () {
  $('.sliderBannerDesktop').slick({
    infinite: true,
    dots: true,
    speed: 600,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
$(document).ready(function () {
  $('.js-example-basic-single').select2();
});

document.addEventListener('DOMContentLoaded', function () {
  const modalGuia = document.getElementById('modalGuia');
  const abrirModalGuia = document.getElementById('abrirModalGuia');
  const cerrarModalBtn = document.querySelector("#modalGuia .cerrar");

  function abrirModal() {
    console.log("Abrir");
    modalGuia.style.display = "flex";
  }

  function cerrarModal() {
    modalGuia.style.display = "none";
  }

  if (abrirModalGuia && cerrarModalBtn && modalGuia) {
    abrirModalGuia.addEventListener('click', abrirModal);
    cerrarModalBtn.addEventListener('click', cerrarModal);

    window.addEventListener('click', function (event) {
      if (event.target == modalGuia) {
        cerrarModal();
      }
    });
  } else {
    console.error("No se pudo encontrar uno o más elementos necesarios para el modal.");
  }
});
