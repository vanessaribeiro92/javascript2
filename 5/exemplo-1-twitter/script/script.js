
const inputTweet = document.getElementById("tweetComposerInput")
const buttonCreateTweet = document.querySelector(".tweet-composer__button")
const tweetsTimeline = document.querySelector(".tweets-timeline")
const counter = document.getElementById("tweetComposerCounter");

buttonCreateTweet.addEventListener("click", function (event) {
  event.preventDefault();

  if(inputTweet.value === undefined || 
    inputTweet.value === null || 
    inputTweet.value === "" || 
    inputTweet.value === " " ){
    return false;
  }

  //inserir data e hora
  const date = new Date();
  const month = date.toLocaleString("pt-br",{month: "short"});
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();

  //criei a div que abraça todo o conteúdo
  const div = document.createElement("div")
  div.className = "tweets-timeline__box";

  // criei o header
  const header = document.createElement("div")
  header.className = "tweets-timeline__header"
  header.innerHTML =  `<div class="tweets-timeline__header">
  <span class="tweets-timeline__name">vanessa.ribeiro</span>
  <span class="tweets-timeline__username">@vanribeiro</span>
  <span class="tweets-timeline__date">${day} de ${month} ás ${hour}:${minute}</span>
  </div>`

  //criei um elemento novo pro tweet
  const newTweetP = document.createElement("p");
  newTweetP.className = "tweets-timeline__tweet";
  //passei o conteúdo do tweet para o paragrafo
  newTweetP.innerHTML = inputTweet.value;

  // criei um footer
  const footer = document.createElement("div")
  footer.className = "tweets-timeline__footer"
  footer.innerHTML = `<button class="tweets-timeline__delete-button button">Excluir</button>`
  
  // coloquei o header + texto do tweet na div
  div.appendChild(header)
  div.appendChild(newTweetP) 
  div.appendChild(footer)

  //coloquei a div na timeline
  tweetsTimeline.insertBefore(div, tweetsTimeline.childNodes[0]);

  inputTweet.value = "";

  counter.innerHTML = 280;
  counter.style.color = "white";

  const deleteButton = document.querySelector(".tweets-timeline__delete-button");

  deleteButton.addEventListener("click", function(event) {
    event.preventDefault();
    div.remove();
  })
})

//keydown
inputTweet.addEventListener("keyup", function() {
  const textBox = this;
  const maxLength = 280;
  const valorAtual = maxLength - textBox.value.length;

  counter.innerHTML = valorAtual;
  buttonCreateTweet.disabled = false; 

  if ( valorAtual <= 15 && valorAtual >= 0 ) { //ou valorAtual <= 15 && valorAtual >= 0
    counter.style.color = "red"; 
  
  }else if(valorAtual < 0) { 
    buttonCreateTweet.disabled = true;
    console.log(valorAtual);
  }else{
    counter.style.color = "white";
    buttonCreateTweet.disabled = false;
  }

  if (textBox.value.length > maxLength) {
    textBox.value = textBox.value.substring(0, maxLength)
  }

})



