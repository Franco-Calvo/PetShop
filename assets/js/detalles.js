const api = (`https://mindhub-xj03.onrender.com/api/petshop`)
fetch(api)
.then(response => response.json())
.then(object => {
const eventosD = object
const queryString = location.search
const params = new URLSearchParams(queryString)
const id = params.get("id")
const cardD = eventosD.find(object => object._id == id)
const verTarjeta = document.getElementById("cardDescription")
verTarjeta.innerHTML = 
`<div class="card" style="max-width: 20rem;">
<div class="card-descrip">
  <h5 class="mb-2">${cardD.producto}</h5>
  <p class="card-text">Categoria: ${cardD.categoria}</p>
  <p class="card-text">Disponibles: ${cardD.disponibles}</p>
  <p class="card-text">${cardD.descripcion}</p>
  <p class="card-text">Precio: $${cardD.precio}</p>
</div>
</div>
<div class="card" style="max-width: 35rem;" >
<img src="${cardD.imagen}" class="card-img-top" alt="special-events" style="width: 100%; height: 100%;">
</div>`
})