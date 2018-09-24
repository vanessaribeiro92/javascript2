const button = document.getElementById("arrowTop")

button.addEventListener("click", function() {
  console.log("clicou")
  window.scrollTo(pageYOffset, 0);

})


window.addEventListener("scroll",function(){
  if(pageYOffset > 450) {
    button.hidden = false;
    console.log(pageYOffset)
    return false;
  }
 
  button.hidden = true;
})