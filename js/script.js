const form = document.querySelector("#formMensagem");
const inputTarefa = document.querySelector("#mensagem");
const listaUl = document.querySelector("#listaTarefas");
const mensagemErro = document.querySelector("#erro");

let tarefas = [];

function renderizarTarefas() {
    listaUl.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");
        li.textContent = tarefa;
        listaUl.appendChild(li);    
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa === "") {
        mensagemErro.textContent = "Erro, digite algo para iniciar"
    } else {
        mensagemErro.textContext = "";
        tarefas.push(textoTarefa)
        inputTarefa.value = "";
        renderizarTarefas();
    }
});
