import { PALAVRAS_RUINS } from "./palavrasruins";

const botaoMostraPalavras = document.querySelector ('#botao-palavraschaves');

botaoMostraPalavras.addEventListener ('click', mostraPalavrasChaves);

function mostraPalvrasChave () {
    const texto = document.querySelector('entrada-de-texto').value;
    const campResultado = document.querySelector('#resultado-palavrachave');
    const palavrasChave = processaTexto(texto);

    campoResultado.textContent = palavrasChave.join(",");
}

function processaTexto(texto){
    let palavras = texto.split(/\P{L}+/u);

    for(let i in palavras){
       palavras [i] =palavras[i].toLowerCase();
    }

    palavras = tiraPalavrasRuins (palavras);

    const frequencias = contaFrequencia(palavras);
    let ordenadas = Object.keys(frequencias).sort(ordenaPalavras);

    function ordenaPalavras(p1,p2) {
        return frequecias[p2] - frequencias[p1];
    }

    return ordenadas.slice(0,10); 
}

function contaFrequencia(palavras) {
    let frequencias = {};
    for (let i of palavras) {
        frequencias[i]=0;
        for (let j of palavras) {
            if (i == j) {
                frequencias[i] ++;
            }
        }
    }
    return frequencias;
}

function tiraPalavrasRuins(palavras) {
    const palavrasBoas = [];
    for (let palavras of palavras) {
        if (!PALAVRAS_RUINS.has(palavras) && palavras.lenght >2) {
            palavrasBoas.push(palavras);
    }
}
return palavrasBoas;
}