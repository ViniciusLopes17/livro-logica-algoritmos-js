var carros = [];  // Declara variável global

function adicionarCarros(){
    // Cria referência aos elementos contendo os dados de entrada
    var inModelo = document.getElementById("inModelo");
    var inPreco = document.getElementById("inPreco");

    var modelo = inModelo.value;  // Obtém conteúdo dos campos de entrada
    var preco = Number(inPreco.value);

    // Verifica preenchimento dos campos
    if (modelo == "" || preco == 0 || isNaN(preco)){
        alert("Informe corretamente os dados");
        inModelo.focus();
        return;
    }

    // Adiciona dados ao vetor de objetos
    carros.push({modelo: modelo, preco: preco});

    // Limpa campos de entrada e posiciona cursor em inModelo
    inModelo.value = "";
    inPreco.value = "";
    inModelo.focus();

    listarCarros(); // Chama função para listar carros
}
// Cria referência ao btAdicionar e associa function ao evento click deste botão
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCarros);

function listarCarros(){
    // Verifica se vetor de objetos está vazio
    if (carros.length == 0){
        alert("Não há carros na lista");
        return;
    }

    // Cria variável para concatenar texto
    var lista = "";

    // Percorre vetor de objetos
    for (var i = 0; i < carros.length; i++){
        // Adiciona à lista, cada objeto do vetor
        lista += carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + "\n";
    }

    // Exibe a lista de carros
    document.getElementById("outLista").textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCarros);  // Associa evento click ao botão

function filtrarCarros(){
    // Faz a leitura do valor máximo a partir do método prompt
    var maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"));
    
    // se nõ preencheu ou conteúdo inválido ...
    if (maximo == 0 || isNaN(maximo)){
        return;   // Retorna
    }

    // Para concatenar lista de carros que obedecem ao critério de pesquisa / filtro
    var lista = "";

    // percorre todos os elementos do vetor
    for (var i = 0; i < carros.length; i++){
        // Verifica se o preço é inferio (ou igual) ao valor máximo
        if (carros[i].preco <=maximo){
            lista += carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + "\n";
        }
    }

    var outLista = document.getElementById("outLista"); // cria referência ao elemento outLista

    // Se a lista esta vazia, significa que nenhum veículo foi enccontrado (no for)
    if (lista == ""){
        outLista.textContent = "Não há carros com preço até R$: " + maximo.toFixed(2);
    } else {
        // senão, mostra os veículos obtidos
        outLista.textContent = "Carros até R$: " + maximo.toFixed(2) + "\n---------------------------\n" + lista;
    }
}
var btFiltrar = document.getElementById("btFiltrar");
btFiltrar.addEventListener("click", filtrarCarros);  // Associa evento click ao botão
