// SLIDESHOW

const imagens = [
    "imgs/foto_campo_slideshow.avif",
    "imgs/foto_trator_slideshow.png",
    "imgs/foto_chuva_slideshow.jpg"
];

let indice = 0;

const slide = document.getElementById("slide");

function trocarImagem() {

    indice++;

    if (indice >= imagens.length) {
        indice = 0;
    }

    slide.src = imagens[indice];
}

setInterval(trocarImagem, 3000);


// TROCA DE TEMA

function trocarTema(tema) {

    document.body.classList.remove("verde");
    document.body.classList.remove("azul");
    document.body.classList.remove("escuro");

    document.body.classList.add(tema);
}