const links = document.querySelector(".gallery__nav");
const figcaption = document.querySelector("figcaption");
const image = document.querySelector(".gallery__image");
//console.log(links)
//console.log(links.children)

for(let i = 0; i < links.children.length; i++) {
    //console.log(links.children[i]);

    links.children[i].addEventListener("click", function(event){
        event.preventDefault();

        const img = this.dataset.image;
        image.src = img;
        //console.log(img);

        const text = this.dataset.title;
        figcaption.innerHTML = text;
    })

}

// this = pega o caminho da img no atributo data-image
//children = traz só as tags, filhos
//childNodes = todos os nós, filhos e netos

