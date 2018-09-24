const link = document.getElementById("externo");
const artigo = document.querySelector(".article");
const button = document.querySelector("button");

button.addEventListener("click", function(event){
  event.preventDefault();


  for (let i = 0; i < 6; i++){
    let prop = document.createElement("p")
    prop.innerHTML = (`${link.attributes[i].name} : ${link.attributes[i].value}`)

    artigo.appendChild(prop)
  }
})