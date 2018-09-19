const button = document.querySelector("sidebar-menu__button");
const sidebar = dcument.querySelector(".sidebar-menu");

button.addEventListener("click", function(event) {
    event.preventDefault();

    if (sidebar.style.left === "-430px") {
        sidebar.style.left = "0px";
    }
    else {
        sidebar.style.left = "-430px";
    }

});

/*OU....
const button = document.querySelector("sidebar-menu__button");
const sidebar = dcument.querySelector(".sidebar-menu");
let counter = 1;

button.addEventListener("click", function(event) {
    event.preventDefault();

    sidebar.style.left = "-435px"
    counter++
    if (counter % 2 !== 0) {
        sidebar.style.left = "0px";
    }
 
});

adiciona varios atributos de css no js
sidebar.setAttribute("style, "font-size: 100px, font-style: italic, color:#ff0000;"); 

*/