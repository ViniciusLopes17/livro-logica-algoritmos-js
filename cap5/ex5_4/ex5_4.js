var criancas = [];

function adicionarCriancas(){
    // Cria referência para o elemento de entrada
    var inNome = document.getElementById("inNome");
    var inIdade = document.getElementById("inIdade");

    var nome = inNome.value;  //obtém dados dos campos
    var idade = Number(inIdade.value);
    //verifica preenchimento dos campos
    if (nome == "" || idade == 0 || isNaN(idade)){
        alert("Informe corretamente os dados");
        inNome.focus();
        return;
    }

    // adiciona dados ao vetor de objetos
    criancas.push({nome: nome, idade: idade});

    // limpa campos e posiciona cursor
    inNome.value = "";  //limpa campos
    inIdade.value = "";
    inNome.focus();  //posiciona cursor

    listarCriancas();
}
// Cria referência para o elemento de saída
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCriancas);

function listarCriancas(){
    // verifica se vetor está vazio
    if (criancas.length == 0){
        outLista.textContent = "Não há crianças na lista";
        return;
    }
    var lista = "";  //para concatenar lista
    //percorre vetor de objetos
    for (var i = 0; i < criancas.length; i++){
        lista += criancas[i].nome + " - " + criancas[i].idade + " anos\n";
    }
    // exibe lista no elemento de saída
    document.getElementById("outLista").textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCriancas);

function resumirLista(){
    // verifica se vetor está vazio
    if (criancas.length == 0) {
        alert("Não há crianças na lista");
        return;
    }
    // cria uma cópia do vetor original
    var copia = criancas.slice();

    //ordena o vetor copia pela idae
    copia.sort(function(a, b){ return a.idade - b.idade;});

    var resumo = ""; // para concatenar saída

    var aux = copia[0].idade;  //menor idade do vetor ordenado
    var nomes = [];            // vetor para inserir nomes de cada idade

    // percorre os elemento do vetor (classificado por idade)
    for (var i = 0; i < copia.length; i++) {
        // se é da mesma idade auxiliar, adicionar ao vetor
        if (copia[i].idade == aux){
            nomes.push(copia[i].nome);
        }else{
            //senão, adiciona ao resumo, dados e nomes inseridos em nomes[]
            resumo += aux + " ano(s): " + nomes.join(", ") + "\n";
            resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
            resumo += "(" + nomes.join(", ") + ")\n\n";
            aux = copia[i].idade;  //atualiza auxiliar
            nomes = [];  //limpa vetor
            nomes.push(copia[i].nome);  //adiciona nome ao vetor
        }
    }
    // adiciona os nomes da última idade ordenada
    resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
    resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
    resumo += "(" + nomes.join(", ") + ")\n\n";
    
    // altera conteúdo de outLista
    document.getElementById("outLista").textContent = resumo;
}
var btResumir = document.getElementById("btResumir");
btResumir.addEventListener("click", resumirLista);