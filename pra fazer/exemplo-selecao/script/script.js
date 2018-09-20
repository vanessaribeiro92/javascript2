const button = document.getElementById("arrowTop")

button.addEventListener("click", fucntion(){
  console.log("clicou")
  window.scrollTo(pageYOffset, 0);

})


window.addEventListener("scroll",function(){

 // console.log("rolou!!")
  console.log(pageYOffset)
  console.log(button.hidden)
  if(pageYOffset)
})

