import { PALAVRAS_RUINS } from "./palavrasruins";

const botaoMostraPalavras = document.querySelector ('#botao-palavraschaves');

botaoMostraPalavras.addEventListener ('click', mostraPalavrasChaves);

function mostraPalvrasChave () {
    const texto = document.querySelector('entrada-de-texto').value;
    const campResultado = document.querySelector('#resultado-palavrachave');
    const palavrasChave = processaTexto(texto);

    campoResultado.textContent = palavrasChave.join(",");
}