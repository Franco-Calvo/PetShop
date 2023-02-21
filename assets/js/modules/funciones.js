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
    <a href="../html/detalles.html?id=${obj._id}" > <img src="${obj.imagen}" alt="${obj.producto}">  </a>
  </span>
  <h4>${obj.producto}</h4>
  ${message}
  <span class="container-price">
  <span class="text-white">Precio: $${obj.precio}</span>
    </span>
    <label>Cantidad: ${obj.disponibles}</label>
    <label class="id-c" style="display:none"> ${obj._id} </label>
  <button class="agregar-carrito">Agregar al carrito</button>
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
        cardsPr.innerHTML =
          "<p>No se encontraron resultados. Ajusta tu búsqueda.</p>";
      } else {
        newCard(filteredData, cardsPr);
      }
    });
  } catch (error) {
    console.log(`The error is`, error);
  }
}

const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#cards-container");
let articulosCarrito = [];

cargarEventListeners();

export function cargarEventListeners() {
  document.addEventListener("DOMContentLoaded", () => {
    articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carritoHTML();
  });

  listaCursos.addEventListener("click", agregarCurso);
  carrito.addEventListener("click", eliminarCurso);
  vaciarCarritoBtn.addEventListener("click", () => {
    articulosCarrito = [];
    limpiarHTML();
  });
}
export function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement;

    leerDatosCurso(cursoSeleccionado);
  }
}
export function eliminarCurso(e) {
  if (e.target.classList.contains("borrar-curso")) {
    const cursoID = e.target.getAttribute("data-id");

    articulosCarrito = articulosCarrito.filter(
      (curso) => curso._id !== cursoID
    );

    carritoHTML();
  }
}
export function leerDatosCurso(curso) {
  console.log(curso);

  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    _id: curso.querySelector(".id-c").textContent,
    precio: curso.querySelector(".container-price span").textContent,
    cantidad: 1,
  };

  const existe = articulosCarrito.some((curso) => curso._id === infoCurso._id);
  if (existe) {
    const cursos = articulosCarrito.map((curso) => {
      if (curso._id === infoCurso._id) {
        curso.cantidad++;
        return curso;
      } else {
        return curso;
      }
    });
    articulosCarrito = [...cursos];
  } else {
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  console.log(articulosCarrito);

  carritoHTML();
}
export function carritoHTML() {
  limpiarHTML();

  articulosCarrito.forEach((curso) => {
    const row = document.createElement("tr");
    row.classList.add("row-modal");
    row.innerHTML = ` <tbody class="tbody-product">
    <td>
      <img class="img-card" src="${curso.imagen}">
     </td> 
      
        <td class="text-white">${curso.titulo}</td>
        <td class="text-white">${curso.precio}</td>
        <td class="text-white">${curso.cantidad}</td> 
        <td><a href="#" class="borrar-curso" data-id="${curso._id}"><span class="material-symbols-outlined">
        close
        </span></a></td>
        </tbody>
     `;

    contenedorCarrito.appendChild(row);
  });

  localStorage.setItem("carrito", JSON.stringify(articulosCarrito));
}
export function limpiarHTML() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
