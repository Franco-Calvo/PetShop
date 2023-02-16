export function newCard (list, element) {
  element.innerTML = "";
  let fill = "";
  for (let object of list) {
    fill += fillCard (object);
  }
  element.innerTML += fill;
}
export function fillCard (object) {
  return ` <div class="card-J">
  <span class="img-cont">
    <img src="${object.image}" alt="${object.name}">
  </span>

  <h4>${object.name}</h4>
  <span>
    <label>$${object.price}</label>
    <button id="count-add">+</button>
  </span>
</div> `
}
