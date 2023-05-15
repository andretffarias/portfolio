let vagas = [];
let id = 1;
let i = 0;
let str = "";
let idVaga = 0;
let indiceVaga = 0;

function addVaga () {
    let vaga = {}

    vaga.nome = prompt("Nome da vaga:")
    vaga.descricao = prompt("Decrição:")
    vaga.wege = parseFloat(prompt("Salario:"))
    vaga.data = prompt("Data limite (dd/mm/aaaa):")
    vaga.candidatos = []
    vaga.id = id

    let conf = confirm(
            "Tem certeza de que deseja criar essa vaga?\n" +
            "\nId: " + vaga.id +
            "\nNome: " + vaga.nome +
            "\nDescrição: " + vaga.descricao +
            "\nSalario: " + vaga.wege + 
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
                "\nSalario: " + vagas[indiceVaga].wege + 
                "\nData: " + vagas[indiceVaga].data
            )
    
        if (conf === true) {
            vagas.splice(indiceVaga, 1)
            alert("Vaga excluida.")
            id++
        }else{alert("Vaga não excluida.")}
    }else{alert("Id não encontrado.")}
}

function verVagas () {
    for (i = 0; i < vagas.length; i++) {
        str += 
        "\nId: " + vagas[i].id +
        "\nNome: " + vagas[i].nome +
        "\nDescrição: " + vagas[i].descricao +
        "\nSalario: " + vagas[i].wege + 
        "\nData: " + vagas[i].data
    }
    alert(str)
}

function verVaga () {
    idVaga = parseInt(prompt("Id da vaga:"))
    indiceVaga = vagas.findIndex(vaga => vaga.id === idVaga)

    if (indiceVaga != -1) {
        alert(
            "\nId: " + vagas[indiceVaga].id +
            "\nNome: " + vagas[indiceVaga].nome +
            "\nDescrição: " + vagas[indiceVaga].descricao +
            "\nSalario: " + vagas[indiceVaga].wege + 
            "\nData: " + vagas[indiceVaga].data
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