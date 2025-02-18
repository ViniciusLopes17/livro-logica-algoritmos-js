(function() {
    var pacientes = [];  // encapsulate the pacientes array

    function updatePatientList() {
        var outLista = document.getElementById("outLista");
        var lista = pacientes.map((paciente, index) => `${index + 1}. ${paciente}`).join("\n");
        outLista.textContent = lista;
    }

    function adicionarPaciente() {
        var inPaciente = document.getElementById("inPaciente");
        var nome = inPaciente.value.trim();

        if (!nome) {
            alert("Informe o nome do paciente");
            inPaciente.focus();
            return;
        }

        pacientes.push(nome);
        updatePatientList();
        inPaciente.value = "";
        inPaciente.focus();
    }

    function urgenciaPaciente() {
        var inPaciente = document.getElementById("inPaciente");
        var nome = inPaciente.value.trim();

        if (!nome) {
            alert("Informe o nome do paciente");
            inPaciente.focus();
            return;
        }

        pacientes.unshift(nome);
        updatePatientList();
        inPaciente.value = "";
        inPaciente.focus();
    }

    function atenderPaciente() {
        if (pacientes.length === 0) {
            alert("Não há pacientes na lista de espera");
            return;
        }

        var outAtendimento = document.getElementById("outAtendimento");
        var atender = pacientes.shift();
        outAtendimento.textContent = atender;
        updatePatientList();
    }

    // Event listeners
    document.getElementById("btAdicionar").addEventListener("click", adicionarPaciente);
    document.getElementById("btUrgencia").addEventListener("click", urgenciaPaciente);
    document.getElementById("btAtender").addEventListener("click", atenderPaciente);
})();