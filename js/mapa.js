// Ajusta las coordenadas del image map cuando la imagen cambia de tamaño (diseño responsive)
(function () {
  var img = document.getElementById('mapa-img');
  var areas = document.querySelectorAll('#mapa-puno area');
  if (!img || !areas.length) return;
  var base = [];
  areas.forEach(function (a) { base.push(a.coords.split(',').map(Number)); });
  var ANCHO_ORIGINAL = img.getAttribute('width');
  function ajustar() {
    var f = img.clientWidth / ANCHO_ORIGINAL;
    areas.forEach(function (a, i) {
      a.coords = base[i].map(function (n) { return Math.round(n * f); }).join(',');
    });
  }
  window.addEventListener('resize', ajustar);
  img.addEventListener('load', ajustar);
  ajustar();
})();
