console.log("Script Inicializado..")
const inputNome = document.getElementById("inptNome");
const inputSenha = document.getElementById("inputSenha");
const btnSalvar = document.getElementById("btnSalvar");
const btnEntrar = document.getElementById("btnEntrar");
const divResponse = document.getElementById("responseContainer")

btnSalvar.addEventListener("click", btnAction);
btnEntrar.addEventListener("click", btnAction)

function btnAction(){
    readTxt()
    .then(resposta=> { 
        console.log(resposta)
        if (resposta) { 
            window.location = "./paginas/home.html"
        }
        else{
            alert ("Algo deu errado")
        }
    })
}

async function readTxt() {
    return fetch("credenciais.txt")
    .then(retorno => retorno.text())
    .then (text => {
        return validateUser(text)
    })
    .catch(error => {
        console.log("Erro:", error)
        return false
    })
}

function validateUser(credenciais){
    let nomeTxt = credenciais.split("/")[0]
    let senhaTxt = credenciais.split("/")[1]
    return inputNome.value == nomeTxt && inputSenha.value == senhaTxt
}