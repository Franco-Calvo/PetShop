
const $submitBtn = document.getElementById("submitbtn");
const $formContainer = document.getElementsByClassName("mainContact");
const form = document.getElementsByTagName("form")[0];

console.log(form)
$submitBtn.addEventListener("click", function () {
mostrarMensaje();
form.reset();
});

function mostrarMensaje() {
$formContainer[0].innerHTML = `
<div class="mensaje">
<h2>¡Gracias por contactarte!</h2>
<p>Sus datos fueron recibidos con exito! Nos mantendremos en contacto para que no te pierdas nuestras novedades.</p>
</div>
`;
}