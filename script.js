document.addEventListener("DOMContentLoaded", function() {
    console.log("Blog de Sistemas Distribuidos listo para leer.");
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    console.log("Blog de Sistemas Distribuidos listo para leer.");

    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // Desplazarse al inicio al hacer clic en el botón
    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
