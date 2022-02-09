/////////TROCADOR DE CORES HEXADECIMAIS/////////////////

//para fazer minha hex,  irei fazer uma array que guarda todos os
//caracters do codigo DE CORES HEXADECIAMAIS
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'F']

//agora vou selecionar o meu botão usando o querySelector
//que tem o ID btn
const btn = document.querySelector('#btn')

//Na proxima variavel irei colocar a minha span onde vai o nome
//das cores
const cor = document.querySelector('.color')

//agora irei criar um evento click no botão que receberá uma função
//que ira percorrer a minha arrey hex e gerá uma cor aleatória em
//hexadeciamal
btn.addEventListener('click', () => {
    let hexColor = '#' //começo do código 
    for(let i=0;i<6;i++){
        hexColor += hex[retornaNumeroAleatorio()]
    }
    cor.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})

//vou criar uma função para gerar o numero aleatorio do tamanho da minha array
const retornaNumeroAleatorio = () => {

    return Math.floor(Math.random() * hex.length); 
}

//terminamos o nosso trocador de cores hexadecimais
