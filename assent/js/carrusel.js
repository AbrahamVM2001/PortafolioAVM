document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector(".carrusel");
    const items = document.querySelectorAll(".item");
    let index = 0;
  
    function actualizarCarrusel() {
      carrusel.style.transform = `translateX(${-index * 100}%)`;
    }
  
    function siguiente() {
      index = (index + 1) % items.length;
      actualizarCarrusel();
    }
  
    function anterior() {
      index = (index - 1 + items.length) % items.length;
      actualizarCarrusel();
    }
  
    // Agregar listeners para los botones de siguiente y anterior
    document.getElementById("btn-siguiente").addEventListener("click", siguiente);
    document.getElementById("btn-anterior").addEventListener("click", anterior);
  });
  