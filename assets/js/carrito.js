let modal = document.getElementById("modal");

let boton = document.getElementById("openModal");

let span = document.getElementById("close");

// Cuando el usuario hace click en el botón, se abre la ventana
boton.addEventListener("click", () => {
  modal.style.display = "block";
});

// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click",function() {
  modal.style.display = "none";
});

// Si el usuario hace click fuera de la ventana, se cierra.
modal.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});