const button = document.getElementById("count-add")

// Cambia el estado del agregar al carrito a agregado

button.addEventListener('click', function () {
  if (button.innerHTML === "+"){
    button.innerHTML = "✓";
    button.style.color = "#4a7707"
  } else { 
    button.innerHTML = "+"
  }
})


let api = "https://mindhub-xj03.onrender.com/api/petshop"

