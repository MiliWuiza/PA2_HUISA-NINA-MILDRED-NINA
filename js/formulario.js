// Formulario funcional: valida con el navegador y muestra una confirmación sin recargar la página
(function () {
  var form = document.getElementById('form-contacto');
  var resultado = document.getElementById('resultado');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nombre = form.elements['nombre'].value.trim();
    resultado.textContent = '¡Gracias, ' + nombre + '! Recibí tu mensaje y te responderé pronto.';
    form.reset();
  });
})();
