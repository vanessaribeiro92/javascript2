const links = document.querySelector(".gallery__nav");

//console.log(links)
//console.log(links.children)

for(let i = 0; i < links.children.length; i++) {
    //console.log(links.children[i]);

    links.children[i].addEventListener("click", function(){
        const img = this.dataset.image;
        console.log(img);
        document.querySelector(".gallery__image").src = img;
    })
}

// this = pega o caminho da img no atributo data-image
//children = traz só as tags, filhos
//childNodes = todos os nós, filhos e netos

