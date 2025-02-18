//declara vetor de escopo globl que irá conter os números já apostados
var erros = [];

// gera um número aleatório entre 1 e 100
var sorteado = Math.floor(Math.random() * 100);

// declaa constante com o número de chances
const chances = 6;

function apostarNumero(){
    // cira referência ao campo de enrada e obtém seu conteúdo
    var inNumero = document.getElementById("inNumero");
    var numero = Number(inNumero.value);

    // valida o número apostado
    if (numero <= 0 || numero > 100 || isNaN(numero)){
    alert("Informe um número válido...");
    inNumero.focus();
    return;
    }

    // referencia espaços das saídas de dados
    var outErros = document.getElementById("outErros");
    var outDica = document.getElementById("outDica");
    var outChances = document.getElementById("outChances");

    // se aposta do jogdor for igual ao número sorteado
    if (numero == sorteado){
        alert("Parabéns! Você acertou o número sorteado!");
        // desabilita botão de apostar
        btApostar.disabled = true;
        btJogar.className = "exibir";
        outDica.textContent = "Parabéns! Número sorteado: " + sorteado;
    } else {
        // se número exite no vetor erros
        if (erros.indexOf(numero) >= 0){
            alert("Você já apostou o número " + numero + ". Tente outro número...");
        } else {
            erros.push(numero); // adiciona número ao vetor erros
            var numErros = erros.length; // obtém tamanho do vetor
            var numChances = chances - numErros; // calcula número de chances restantes
        // exibe Nº de erros, conteúdo do vetor e Nº de chances restantes
        outErros.textContent = numErros + "(" + erros.join(", ") + ")";
        outChances.textContent = numChances;
        if (numChances == 0){
            alert("Suas chances acabaram...")
            // desabilita botão de apostar
            btApostar.disabled = true;
            btJogar.className = "exibir";
            outDica.textContent = "Game Over! Número sorteado: " + sorteado;
        } else {
            // usa operador ternário para exibir dica
            var dica = numero < sorteado ? "Maior" : "Menor";
            outDica.textContent = "Dica: Tente um número " + dica + " que " + numero;
        }
        }
    }
    // limpa campo e posiciona cursor em inNumero
    inNumero.value = "";
    inNumero.focus();
}
var btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", apostarNumero); // registra evento

function jogarNovamente(){
    location.reload();
}
var btJogar = document.getElementById("btJogar");
btJogar.addEventListener("click", jogarNovamente);