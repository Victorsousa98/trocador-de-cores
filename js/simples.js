
    /////////TROCADOR DE CORES SIMPLES/////////////////

//Para fazer a aba simples do meu trocador, usarei uma array
//fixa contendo cores fixas dentro dela
const cores = ['white', 'green', 'red', 'blue', 'yellow', 'darkred', 'lightpink', 'lightblue'];

//agora vou selecionar o meu botão usando o querySelector
//que tem o ID btn
const btn = document.querySelector('#btn')

//Na proxima variavel irei colocar a minha span(classe color) onde vai o nome
//das cores
const cor = document.querySelector('.color')

//agora criarei um evento de click no meu botao que receberá uma função anônima
//pra quando eu clicar gerar um numero aleatorio que percorra a minha
//array de cores e selecione uma delas para mudar minha cor de fundo
btn.addEventListener("click", ()=>{
    //esse numero aleatório é o numero que irá percorrer pelo array cores
    const numeroAleatorio = retornaNumeroAleatorio();
    //agora vamos percorrer o DOM e selecionar as cores do
    //array para mudar a cor do background
    document.body.style.backgroundColor = cores[numeroAleatorio];
    //em seguida faremos uma ação para mudar o nome do nosso span
    cor.textContent = cores[numeroAleatorio]
} )

//vou criar uma função para gerar o numero aleatorio do tamanho da minha array cores
const retornaNumeroAleatorio = () => {

    return Math.floor(Math.random() * cores.length); 
}

// terminamos o nosso trocador de cores simples
