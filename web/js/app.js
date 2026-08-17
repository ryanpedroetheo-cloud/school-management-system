/*
========================================
SCHOOL MANAGEMENT SYSTEM
JavaScript - Sprint 1
Integração com Interface Web
========================================
*/

/* =======================
   CONSTANTES
======================= */

const APP_NAME = "School Management System";

/* =======================
   VARIÁVEIS
======================= */

let usuario = "Administrador";

/* =======================
   ELEMENTOS DA INTERFACE
======================= */

const btnAlunos = document.getElementById("btnAlunos");
const btnProfessores = document.getElementById("btnProfessores");
const btnTurmas = document.getElementById("btnTurmas");
const btnFrequencia = document.getElementById("btnFrequencia");

const resultado = document.getElementById("resultado");

/* =======================
   FUNÇÕES DA INTERFACE
======================= */

function mostrarAlunos() {
    console.log("Botão Total de Alunos clicado.");

    // Utiliza a função existente no sistema
    const alunos = listStudents();

    console.log("Alunos:", alunos);

    if (resultado) {
        resultado.textContent = `Alunos cadastrados: ${alunos.length}`;
    }
}

function mostrarProfessores() {
    console.log("Botão Total de Professores clicado.");

    // Utiliza a função existente no sistema
    const professores = listTeachers();

    console.log("Professores:", professores);

    if (resultado) {
        resultado.textContent = `Professores cadastrados: ${professores.length}`;
    }
}

function mostrarTurmas() {
    console.log("Botão Turmas Ativas clicado.");

    console.log("Ação de turmas executada.");

    if (resultado) {
        resultado.textContent = "Consulta de turmas executada. Veja o Console.";
    }
}

function mostrarFrequencia() {
    console.log("Botão Taxa de Frequência clicado.");

    // Utiliza a função existente no sistema
    const frequencia = showStatistics();

    console.log("Estatísticas:", frequencia);

    if (resultado) {
        resultado.textContent = "Estatísticas de frequência consultadas. Veja o Console.";
    }
}

/* =======================
   EVENTOS
======================= */

if (btnAlunos) {
    btnAlunos.addEventListener("click", mostrarAlunos);
}

if (btnProfessores) {
    btnProfessores.addEventListener("click", mostrarProfessores);
}

if (btnTurmas) {
    btnTurmas.addEventListener("click", mostrarTurmas);
}

if (btnFrequencia) {
    btnFrequencia.addEventListener("click", mostrarFrequencia);
}

/* =======================
   INICIALIZAÇÃO
======================= */

console.log(APP_NAME + " iniciado com sucesso.");
console.log("Usuário:", usuario);