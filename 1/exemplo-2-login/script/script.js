/* eu que fiz
const botao = document.querySelector(".login__button");
botao.addEventListener("click", function(event) {
    event.preventDefault();
   
  const email = document.getElementById("loginInputEmail").value;
  alert(`O email ${email} foi cadastrado com sucesso`)
  const senha = document.getElementById("loginInputPassword").value;
  alert(`Sua senha foi cadastrado com sucesso`)
}); */


const loginButton = document.querySelector(".login__button");
const input = document.getElementById("loginInputEmail");


loginButton.addEventListener("click", function(event) {
    event.preventDefault();

  const email = input.value;

  const loginForm = document.querySelector(".login__form");
  
  loginForm.innerHTML = `Login efetuado com sucesso com o email ${email}!!`;

 //alert(`O email ${email} foi cadastrado com sucesso`)
  const senha = document.getElementById("loginInputPassword").value;
  alert(`Sua senha foi cadastrado com sucesso`)
}); 