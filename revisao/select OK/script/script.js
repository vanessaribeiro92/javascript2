const inputArea = document.getElementById("selectInputArea")
const button = document.querySelector(".select__button")

button.addEventListener("click", function (event) {
  event.preventDefault();

  if (inputArea.value === undefined || 
    inputArea.value === null || 
    inputArea.value === "" || 
    inputArea.value === " ") {
    inputArea.focus();
    return false;

    }else if (inputArea.selectedIndex === 0 ) {
    document.querySelector("body").style.backgroundColor = '#381DFF'; //6 - blue
  
    } else if (inputArea.selectedIndex === 1 ) {
    document.querySelector("body").style.backgroundColor = '#005900'; //6 - verde

    } else if (inputArea.selectedIndex === 2 ) {
    document.querySelector("body").style.backgroundColor = '#FF8AC7'; //6 - rosa

   } else if (inputArea.selectedIndex === 3 ) {
    document.querySelector("body").style.backgroundColor = '#E8580E'; //6 - laranja
  }

})