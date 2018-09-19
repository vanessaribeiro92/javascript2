
const loginbutton = document.querySelector(".login__button")

const loginclose = document.querySelector(".login-modal__button-close")

loginbutton.addEventListener("click", function (event) {
    event.preventDefault();

    document.querySelector(".login-modal").style.display = "inline-block"
})

loginclose.addEventListener("click", function (event) {
    event.preventDefault();
 
    document.querySelector(".login-modal").style.display = "none"
})