function mostrarProjeto() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("projeto").classList.remove("hidden");
  
    window.scrollTo(0, 0);
  }
  
  function voltarHome() {
    document.getElementById("projeto").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
  
    window.scrollTo(0, 0);
  }