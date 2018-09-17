//const texto = document.getElementById("newsInputEmail");
//const botao = document.querySelector(".news__button");
// ou... const texto2 = document.querySelector("#newsInputEmail");o queryselector sempre pega a primeira occorrencia do id no seu código.
//console.log(texto2.nodeName);   ou...(texto2.tagname);
//console.log(texto);
//console.log(botao);
/*const titulo = document.getElementById("formTitle");
const titulo2 = document.querySelector(".news__title");

console.log(titulo)
console.log(titulo2)*/

//const input = document.getElementById("newsInputEmail").value;

const input = document.getElementById("newsInputEmail");
const botao = document.querySelector(".news__button");

botao.addEventListener("click", function(event) {
    event.preventDefault();

    //create element cria novos elementos
    const resposta = document.createElement("span");

    //create text node cria nós de texto
    const respostaMensagem = document.createTextNode("Email cadastrado com sucesso!");

    //append child insere item dentro de um elemento 
    resposta.appendChild(respostaMensagem);

    const newsForm = document.querySelector(".news__form");

    //insert before insere item em um elemento antes de um inten estabelecido
    newsForm.insertBefore(resposta, newsForm.childNodes[0]);

    //const newsForm = document.querySelector(".news__form");
    // const email = input.value;
   // alert(`Email ${email} foi cadastrado com sucesso!`)

});


