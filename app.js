//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Passo 1: criar uma variavel com a lista de nomes

let nomesParticipantes = [];
alert ('Seja bem-vindo ao sorteador Amigo Screto!');
// Passo 2: crirar função para o sorteador
function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim();
// Verificar se o campo está vazio
    if (nome === "") {
        alert ('Por favor, insira um nome.');
        return;
    }
// Adicionar nomes a lista
nomesParticipantes.push (nome);
atualizarLista();
console.log ('Lista de amigos:', nomesParticipantes);
// Limpar o campo
inputNome.value = "";
}
// Atualização de lista
function atualizarLista () {
    let listaHTML = document.getElementById ('listaAmigos');
    listaHTML.innerHTML = '';
    // Sincronizar lista com HTML
    for (let i = 0; i < nomesParticipantes.length; i++) {
        let item = document.createElement('li');
        item.textContent = nomesParticipantes[i];
        listaHTML.appendChild(item);
    }
}
// Passo 3: função para sortear amigo aleatoriamente
function sortearAmigo () {
    if (nomesParticipantes.length === 0) {
        alert ('Nenhum amigo para sortear.');
        return;
    }
    let indiceNomes = Math.floor (Math.random () * nomesParticipantes.length);
    let amigoSorteado = nomesParticipantes [indiceNomes];
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = "O amigo secreto sorteado é: " + amigoSorteado;
}
// Passo 4: função para sortear novos nomes
function atualizarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';

    for (let i = 0; i < nomesParticipantes.length; i++) {
        let item = document.createElement('li');
        item.textContent = nomesParticipantes[i];
        listaHTML.appendChild(item);
    }
}

function atualizarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';

    for (let i = 0; i < nomesParticipantes.length; i++) {
        let item = document.createElement('li');
        item.textContent = nomesParticipantes[i];
        listaHTML.appendChild(item);
    }
}

function atualizarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';

    for (let i = 0; i < nomesParticipantes.length; i++) {
        let item = document.createElement('li');
        item.textContent = nomesParticipantes[i];
        listaHTML.appendChild(item);
    }
}

// Passo 4: Após todos nomes sorteados zerar lista e começar novo sorteio
function sortearAmigo() {
    if (nomesParticipantes.length === 0) {
        alert('Todos os amigos já foram sorteados.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nomesParticipantes.length);
    let amigoSorteado = nomesParticipantes.splice(indiceAleatorio, 1)[0];

    let resultadoElement = document.getElementById('resultado');
    let item = document.createElement('li');
    item.textContent = "O amigo secreto sorteado é: " + amigoSorteado;
    resultadoElement.appendChild(item);

    if (nomesParticipantes.length === 0) {
        alert("Todos os amigos foram sorteados! A tela será limpa.");
        limparTela();
    }
}

function limparTela() {
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
    nomesParticipantes = [];
    document.querySelector('.button-draw').disabled = true;
}