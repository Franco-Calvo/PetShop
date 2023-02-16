import { newCard, fillCard, createCategory } from "./modules/funciones.js";


// const button = document.getElementById("count-add")

// // Cambia el estado del agregar al carrito a agregado

// button.addEventListener('click', function () {
//   if (button.innerHTML === "+"){
//     button.innerHTML = "✓";
//     button.style.color = "#4a7707"
//   } else { 
//     button.innerHTML = "+"
//   }
// })


let api = "https://mindhub-xj03.onrender.com/api/petshop"

async function fetchData() {
  try { 
    const response = await fetch(api)
    const data = await response.json()

    const cardsPr = document.querySelector("#cards-container")
    const cardsCategories = data.map(object => object);
    const categoryNoRepeat = [...new Set(cardsCategories)]
    
    newCard(categoryNoRepeat, cardsPr)
    // Guardar objetos de cada categoría y enviarlos

  }
  catch(error) {
    console.log(`The error is`, error);
  }
}

fetchData()