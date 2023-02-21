

let modal = document.getElementById("carrito");
let boton = document.getElementById("openModal");
let span = document.getElementById("close");

boton.addEventListener("click", () => {
  modal.style.display = "block";
});

span.addEventListener("click",function() {
  modal.style.display = "none";
});

modal.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

