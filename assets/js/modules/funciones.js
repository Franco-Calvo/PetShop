export function newCard(list, element) {
  element.innerHTML = "";
  let fill = "";
  for (let object of list) {
    fill += fillCard(object);
    console.log(object);
  }
  element.innerHTML += fill;
}
export function fillCard (obj) {
  return ` <div class="card-J">
  <span class="img-cont">
    <img src="${obj.imagen}" alt="${obj.producto}">
  </span>

  <h4>${obj.producto}</h4>
  <span>
    <label>$${obj.precio}</label>
    <button id="count-add">+</button>
  </span>
  <a href="../html/detalles.html?id=${obj._id}">
  <button>Ver detalles</button>
  </a>
</div> `
}

export async function fetchData(categoria) {
  try { 

    let api = "https://mindhub-xj03.onrender.com/api/petshop"
    const response = await fetch(api)
    const data = await response.json()

    const cardsPr = document.querySelector("#cards-container")
    const checkCategory = document.querySelector("#checks")

    const cardsCategories = data.map(object => object);
    const categoryNoRepeat = [...new Set(cardsCategories)]
    const filterByCategory = categoryNoRepeat.filter(e => e.categoria === categoria)

    newCard(filterByCategory, cardsPr)
    addCategory(filterByCategory, checkCategory)
  }
  catch(error) {
    console.log(`The error is`, error);
  }
}
