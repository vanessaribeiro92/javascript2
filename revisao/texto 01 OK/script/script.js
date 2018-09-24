const btnAumentar = document.getElementById("btnAumentar")
const btnDiminuir = document.getElementById("btnDiminuir")
const texto = document.querySelector(".article")

let fonte = 16

btnAumentar.addEventListener("click", function(e){
 e.preventDefault()
 fonte ++
 texto.style.fontSize = `${fonte}px`
})

btnDiminuir.addEventListener("click",function(e){
  e.preventDefault()
  fonte --
  texto.style.fontSize = `${fonte}px`
})