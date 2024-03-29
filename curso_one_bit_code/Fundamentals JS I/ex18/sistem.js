let vagas = [];
let id = 1;
let i = 0;
let iNum = 1;
let strVagas = "";
let idVaga = 0;
let indiceVaga = 0;
let option;


function addVaga () {
    let vaga = {}

    vaga.nome = prompt("Nome da vaga:")
    vaga.descricao = prompt("Decrição:")
    vaga.wage = parseFloat(prompt("Salario:"))
    vaga.data = prompt("Data limite (dd/mm/aaaa):")
    vaga.candidatos = []
    vaga.id = id

    let conf = confirm(
            "Tem certeza de que deseja criar essa vaga?\n" +
            "\nId: " + vaga.id +
            "\nNome: " + vaga.nome +
            "\nDescrição: " + vaga.descricao +
            "\nSalario: " + vaga.wage + 
            "\nData: " + vaga.data
        )
    if (conf === true) {
        vagas.push(vaga)
        alert("Vaga cadastrada.")
        id++
    }else{alert("Vaga não cadastrada.")}
}

function excluirVaga () {
    idVaga = parseInt(prompt("Id da vaga:"))
    indiceVaga = vagas.findIndex(vaga => vaga.id === idVaga)
    
    if (indiceVaga != -1) {
        let conf = confirm(
                "Tem certeza de que deseja excluir essa vaga?\n" +
                "\nId: " + vagas[indiceVaga].id +
                "\nNome: " + vagas[indiceVaga].nome +
                "\nDescrição: " + vagas[indiceVaga].descricao +
                "\nSalario: " + vagas[indiceVaga].wage + 
                "\nData: " + vagas[indiceVaga].data
            )
        if (conf === true) {
            vagas.splice(indiceVaga, 1)
            alert("Vaga excluida.")
        }else{alert("Vaga não excluida.")}
    }else{alert("Id não encontrado.")}
}

function verVagas () {
    if(vagas.length > 0) {
        for (i = 0; i < vagas.length; i++) {
            strVagas += 
            "\nId: " + vagas[i].id +
            "\nNome: " + vagas[i].nome +
            "\nDescrição: " + vagas[i].descricao +
            "\nSalario: " + vagas[i].wage + 
            "\nData: " + vagas[i].data +
            "\nCandidatos: " + vagas[i].candidatos.length +
            "\n============================================"
        }
        alert(strVagas)
        strVagas = ""
    }else{alert("Nem uma vaga cadastrada ainda.")}
}

function verVaga () {
    idVaga = parseInt(prompt("Id da vaga:"))
    indiceVaga = vagas.findIndex(vaga => vaga.id === idVaga)

    if (indiceVaga != -1) {
        strCandidatos = ""
        for (i = 0; vagas[indiceVaga].candidatos.length > i; i++) {
            strCandidatos += iNum++ + "- " + vagas[indiceVaga].candidatos[i] + "\n"
        }
        alert(
            "\nId: " + vagas[indiceVaga].id +
            "\nNome: " + vagas[indiceVaga].nome +
            "\nDescrição: " + vagas[indiceVaga].descricao +
            "\nSalario: " + vagas[indiceVaga].wage + 
            "\nData: " + vagas[indiceVaga].data +
            "\nCandidatos:\n" + strCandidatos
        )
    }else{alert("Nem uma vaga encontrada.")}
}

function addCandidato () {
    idVaga = parseInt(prompt("Id da vaga:"))
    indiceVaga = vagas.findIndex(vaga => vaga.id === idVaga)

    if (indiceVaga != -1) {
        nomeCandidato = prompt("Qual nome do candidato?")
        conf = confirm(
            `Deseja add ${nomeCandidato} a vaga ${vagas[indiceVaga].nome}?`
        )
        if (conf === true) {
            vagas[indiceVaga].candidatos.push(nomeCandidato)
            alert("Candidato adicionado.")
        }else{alert("Candidato não adicionado.")}
    }else{alert("Vaga não encontrada.")}
}


do {
    option = parseInt(prompt(
        "\n1- Listar vagas disponíveis" +
        "\n2- Visualizar uma vaga" +
        "\n3- Inscrever um candidato em uma vaga" +
        "\n4- Criar um nova vaga" +
        "\n5- Excluir uma vaga" +
        "\n6- Sair"
    ))
    switch(option) {
        case 1:
            verVagas()
            break
        case 2:
            verVaga()
            break
        case 3:
            addCandidato()
            break
        case 4:
            addVaga()
            break
        case 5:
            excluirVaga()
            break
        case 6:
            alert("Fechando programa.")
            break
        default: alert("[ERRO]: Opição invalida.")
    }
}while(option != 6)