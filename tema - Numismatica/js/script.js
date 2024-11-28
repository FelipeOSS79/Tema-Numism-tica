

function Enviar() {
    const email = document.getElementById("email");
    const nome = document.getElementById("nome");
    const dataNascimento = document.getElementById("dataNascimento");
    const telefone = document.getElementById("telefone");
    const estado = document.getElementById("estado");
    const genero = document.getElementById("genero");
    const button = document.querySelector("button");

    // Desabilita o botão e exibe a animação de carregamento
    button.disabled = true;
    button.innerHTML = "Carregando...";

    // Verifica se os campos obrigatórios foram preenchidos
    if (!email.value || !nome.value || !telefone.value || !estado.value || !genero.value) {
        alert("Por favor, preencha todos os campos obrigatórios!");

        // Reabilita o botão caso haja erro
        button.disabled = false;
        button.innerHTML = "Enviar";
        return;
    }

    // Simula uma operação de envio (exemplo de 2 segundos) e setTimeout significa tempo esgotado.
    setTimeout(function () {
        alert("Dados salvos com sucesso, entraremos em contato ;)");

        // Limpa os campos após o envio
        email.value = "";
        nome.value = "";
        dataNascimento.value = "";
        estado.value = "";
        genero.value = "";
        telefone.value = "";


        //Peguei a orientação e referencia com um amigo do trabalho, essa opçào de button.disable por estar como falsa, faz ele retornar ao estado inicial "enviar"
        button.disabled = false;
        button.innerHTML = "Enviar";
    }, 2000);
}

