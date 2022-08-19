/************menu**************/
((d) => {
  const $btnMenu = d.querySelector(".menu-btn");
  $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);
/************funciones**************/
function encriptar() {
  var texto = document.querySelector("#input-texto").value;
  console.log(texto);
  var textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  document.querySelector(".text-input-salida").value = textoCifrado;
  document.querySelector("#input-texto").value;
  document.getElementById("img").style.visibility = "hidden";
  document.getElementById("texto_ocultar").style.visibility = "hidden";
  document.getElementById("texto_ocultar2").style.visibility = "hidden";
  document.querySelector("#input-texto").value = "";
}

function desencriptar() {
  var texto = document.querySelector("#input-texto").value;
  var textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  document.querySelector(".text-input-salida").value = textoCifrado;
  document.querySelector("#input-texto").value;
  document.getElementById("img").style.visibility = "hidden";
  document.getElementById("texto_ocultar").style.visibility = "hidden";
  document.getElementById("texto_ocultar2").style.visibility = "hidden";
  document.querySelector("#input-texto").value = "";
}

var btn1 = document.querySelector("#btn-encriptar");
btn1.onclick = encriptar;

var btn2 = document.querySelector("#btn-desencriptar");
btn2.onclick = desencriptar;
