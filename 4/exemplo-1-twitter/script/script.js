
const inputTweet = document.getElementById("tweetComposerInput")
const buttonCreateTweet = document.querySelector(".tweet-composer__button")
const tweetsTimeline = document.querySelector(".tweets-timeline")


buttonCreateTweet.addEventListener("click", function (event) {
  event.preventDefault();

  if(inputTweet.value === undefined || 
    inputTweet.value === null || 
    inputTweet.value === "" || 
    inputTweet.value === " " ){
    return false;
  }

  //criei a div que abraça todo o conteúdo
  const div = document.createElement("div")
  div.className = "tweets-timeline__box";

  // criei o header
  const header = document.createElement("div")
  header.className = "tweets-timeline__header"
  header.innerHTML =  `<div class="tweets-timeline__header">
  <span class="tweets-timeline__name">vanessa.ribeiro</span>
  <span class="tweets-timeline__username">@vanribeiro</span>
  <span class="tweets-timeline__date">1 de ago de 2018</span>
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

  const deleteButton = document.querySelector(".tweets-timeline__delete-button");

  deleteButton.addEventListener("click", function(event) {
    event.preventDefault();
    div.remove();
  })

})
