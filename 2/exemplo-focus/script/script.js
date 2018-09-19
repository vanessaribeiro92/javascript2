/*1 - Pegar todos os inputs OK

2 - Verificar se os inputs estão vazios, ou undefineds OK

3 - Verificar se os emails são os mesmos  OK

4 - Verificar se a senha é a mesma OK

5 - Senha tem que ter mais que 7 digitos OK

6 - O fundo muda de cor de acordo com a área front end azul back verde ux rosa ui laranja OK

7 - dependendo do nível escreve no console junior: 0 - 2 anos de experiência; pleno: 2 - 5 anos de experiência; senior 5+ anos de experiência; OK

8 - Se news não estiver checkado exibir um alerta escrito: É uma pena que você não deseja receber nosso conteúdo exclusivo :c OK */ 

const inputNome = document.getElementById("cadastroInputNome");
const inputEmail = document.getElementById("cadastroInputEmail");
const inputEmailConfirm = document.getElementById("cadastroInputEmailConfirm");
const inputPassword = document.getElementById("cadastroInputPassword");
const inputPasswordConfirm = document.getElementById("cadastroInputPasswordConfirm");
const inputPhone = document.getElementById("cadastroInputPhone");
const inputArea = document.getElementById("cadastroInputArea");
const inputLevelJunior = document.getElementById("cadastroInputLevelJunior");
const inputLevelPleno = document.getElementById("cadastroInputLevelPleno");
const inputLevelSenior = document.getElementById("cadastroInputLevelSenior");
const inputNews = document.getElementById("cadastroInputNews");
const inputLevel = document.getElementById("level")
const button = document.querySelector(".cadastro__button");
const optionSelect = inputArea.options[inputArea.selectedIndex]
//options = retorna um array
//inputArea.selectedIndex = mostra o index do atributo selecionado
//const inputLevel = document.getElementsByName("level");

button.addEventListener("click", function (event) {
    event.preventDefault();
   
    let radioItem;
    for(let i = 0; i < inputLevel.lenght; i++){

        if(inputLevel[i].checked){
            console.log(inputLevel[i])
            radioItem = inputLevel[i]
        }
    }

    if (inputNome.value === undefined || 
        inputNome.value === null || 
        inputNome.value === "" || 
        inputNome.value === " ") {
        inputNome.focus();
        return false;

    } else if (inputEmail.value === undefined || 
        inputEmail.value === null || 
        inputEmail.value === "" || 
        inputEmail.value === " ") {
        inputEmail.focus();
        return false;

    } else if (inputEmailConfirm.value === undefined || 
        inputEmailConfirm.value === null || 
        inputEmailConfirm.value === "" || 
        inputEmailConfirm.value === " ") {
        inputEmailConfirm.focus();
        return false;

    } else if (inputEmail.value !== inputEmailConfirm.value) {
        alert("Email errado");
        return false; // 3    

    } else if (inputPassword.value === undefined || 
        inputPassword.value === null || 
        inputPassword.value === "" || 
        inputPassword.value === " ") {
        inputPassword.focus();
        return false;

    } else if (inputPasswordConfirm.value === undefined || 
        inputPasswordConfirm.value === null || 
        inputPasswordConfirm.value === "" || 
        inputPasswordConfirm.value === " ") {
        inputPasswordConfirm.focus();
        return false;

    } else if (inputPassword.value !== inputPasswordConfirm.value){
        alert("Senha Incorreta");
        return false; //  4

    } else if (inputPassword.value.lenght  < 7 ) {
        alert("Insira uma senha de 7 dígitos ou mais");
        return false; // 5


    } else if (inputPhone.value === undefined || 
        inputPhone.value === null || 
        inputPhone.value === "" || 
        inputPhone.value === " ") {
        inputPhone.focus();
        return false;

    } 
    
    if (inputArea.value === undefined || 
        inputArea.value === null || 
        inputArea.value === "" || 
        inputArea.value === " ") {
        inputArea.focus();
        return false;

    } else if (inputArea.selectedIndex === 0 ) {
        document.querySelector("body").style.backgroundColor = '#381DFF'; //6 - blue
        
    } else if (inputArea.selectedIndex === 1 ) {
        document.querySelector("body").style.backgroundColor = '#005900'; //6 - verde

    } else if (inputArea.selectedIndex === 2 ) {
        document.querySelector("body").style.backgroundColor = '#FF8AC7'; //6 - rosa

    } else if (inputArea.selectedIndex === 3 ) {
        document.querySelector("body").style.backgroundColor = '#E8580E'; //6 - laranja
    }
       
    if (radioItem.value === "Junior"){
        console.log("junior: 0 - 2 anos de experiência")
    } else if (radioItem === "Pleno") {
        console.log("pleno: 2 - 5 anos de experiência")
    } else {
        console.log("senior 5+ anos de experiência")
    }

    if (inputNews.checked !== true) {
    alert("É uma pena que você não deseja receber nosso conteúdo exclusivo :´(")
    return false;
    }

    alert("Deu certo!")
    return true;

})

//verificação caso o campo precise inserir informação

// if (inputLevelJunior.value === undefined || 
//     inputLevelJunior.value === null || 
//     inputLevelJunior.value === "" || 
//     inputLevelJunior.value === " ") {
//     inputLevelJunior.focus();
//     return false;

// } else if (inputLevelPleno.value === undefined || 
//     inputLevelPleno.value === null || 
//     inputLevelPleno.value === "" || 
//     inputLevelPleno.value === " ") {
//     inputLevelPleno.focus();
//     return false;

// } else if (inputLevelSenior.value === undefined || 
//     inputLevelSenior.value === null || 
//     inputLevelSenior.value === "" || 
//     inputLevelSenior.value === " ") {
//     inputLevelSenior.focus();
//     return false;

// } else if (inputNews.value === undefined || 
//     inputNews.value === null || 
//     inputNews.value === "" || 
//     inputNews.value === " ") {
//     inputNews.focus();
//     return false;   