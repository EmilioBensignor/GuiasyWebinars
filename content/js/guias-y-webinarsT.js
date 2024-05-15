$(document).ready(function () {
  $('.sliderWebinars').slick({
    infinite: !1,
    arrows: true,
    mobileFirst: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: "<img/guiasywebinars class='prev-webinar arrows-webinar slick-prev' src='../content/img/home/prev-arrow-oferta.svg'>",
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
  $('.selectRegion').select2();
});
$(document).ready(function () {
  $('.selectPais').select2();
});

function verGuia(pdf) {
  let url = "/files/guias/" + pdf;
  const modalGuia = document.getElementById("modalGuia");
  const cerrarModal = document.getElementById("cerrarModal");
  if (screen.width < 1080) {
    $('#modalGuia').show()
    modalGuia.style.background = "none";
    cerrarModal.style.display = "none";
    setTimeout(() => $('#modalGuia').hide(), 500);
    window.location.href = url;
  } else {
    $('#embedPDF')[0].src = url;
    $('#modalGuia').show();
  }
}

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
