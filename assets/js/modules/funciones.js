export function newCard(list, element) {
  element.innerHTML = "";
  console.log(list);
  let fill = "";
  for (let object of list) {
    fill += fillCard(object);
  }
  element.innerHTML += fill;
}

export function fillCard (object) {
  console.log(object);
  return ` <div class="card-J">
  <span class="img-cont">
    <img src="${object.jugueteria.imagen}" alt="${object.nombre}">
  </span>

  <h4>${object.nombre}</h4>
  <span>
    <label>$${object.precio}</label>
    <button id="count-add">+</button>
  </span>
</div> `
}
export function createCategory (catego) {
  let category = document.createlElement(`div`);
  category.className = "checks";
  category.innerTML = `<input type="checkbox" name="checkbox" value="${catego}" class="checkbox">
  <label>${catego.name}</label>`
}