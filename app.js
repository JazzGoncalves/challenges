// Array para armazenar os nomes dos participantes
let listaAmigos = [];

function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (listaAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    listaAmigos.push(nome);
    inputNome.value = ""; 
    atualizarLista();
}

function atualizarLista() {
    let listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; 

    listaAmigos.forEach((nome) => {
        let li = document.createElement("li");
        li.textContent = nome;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    let sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    
    document.getElementById("resultado").innerHTML = `<li>🎉 ${sorteado} foi sorteado! 🎉</li>`;
}
