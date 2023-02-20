export function newCard(list, element) {
  element.innerHTML = "";
  let fill = "";
  for (let object of list) {
    fill += fillCard(object);

  }
  element.innerHTML += fill;
}
export function fillCard(obj) {
  let unidades = obj.disponibles;
  let message = "";
  if (unidades <= 5) {
    message = '<span class="tag">Últimas unidades</span>';
  }
  return ` <div class="card-J">
  
  <span class="img-cont">
    <img src="${obj.imagen}" alt="${obj.producto}">
  </span>
  <h4>${obj.producto}</h4>
  ${message}
  <span>
    <label>$${obj.precio}</label>
    
    <button id="count-add">+</button>
  </span>
  <a href="../html/detalles.html?id=${obj._id}">
  <button>Ver detalles</button>
  </a>
</div> `;
}
export async function fetchData(categoria) {
  try {
    let api = "https://mindhub-xj03.onrender.com/api/petshop";
    const response = await fetch(api);
    const data = await response.json();

    const cardsPr = document.querySelector("#cards-container");

    const cardsCategories = data.map((object) => object);
    const categoryNoRepeat = [...new Set(cardsCategories)];
    const filterByCategory = categoryNoRepeat.filter(
      (e) => e.categoria === categoria
    );

    newCard(filterByCategory, cardsPr);
  } catch (error) {
    console.log(`The error is`, error);
  }
}
export async function setupSearch(category) {
  try {
    let api = "https://mindhub-xj03.onrender.com/api/petshop";
    const response = await fetch(api);
    const data = await response.json();

    const cardsPr = document.querySelector("#cards-container");
    
    const inputSearch = document.querySelector("#inputSearch");
    inputSearch.addEventListener("input", () => {
      let searchValue = inputSearch.value.toLowerCase();

      let filteredData = data.filter(
        (obj) =>
          obj.producto.toLowerCase().includes(searchValue) &&
          obj.categoria === category
      );

      if (filteredData.length === 0) {
        cardsPr.innerHTML = "<p>No se encontraron resultados. Ajusta tu búsqueda.</p>";
      } else {
        newCard(filteredData, cardsPr);
      }
    });
  } catch (error) {
    console.log(`The error is`, error);
  }
}

let cart = []

export function addToCart(product) {
  const existingProduct = cart.find((p) => p._id === product._id);

  if (existingProduct) {
    existingProduct.cantidad++;
  } else {
    cart.push({ ...product, cantidad: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
}

