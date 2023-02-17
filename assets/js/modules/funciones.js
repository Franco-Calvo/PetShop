export function newCard(list, element) {
  element.innerHTML = "";
  let fill = "";
  for (let object of list) {
    fill += fillCard(object);
    // console.log(object);
  }
  element.innerHTML += fill;
}
export function fillCard(obj) {
  return ` <div class="card-J">
  <span class="img-cont">
    <img src="${obj.imagen}" alt="${obj.producto}">
  </span>

  <h4>${obj.producto}</h4>
  <span>
    <label>$${obj.precio}</label>
    <button id="count-add">+</button>
  </span>
  <a href="../html/detalles.html">
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

      newCard(filteredData, cardsPr);
    });
  } catch (error) {
    console.log(`The error is`, error);
  }
}
