/*
========================================
SCHOOL MANAGEMENT SYSTEM
JavaScript - Navegação com DOM
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
   ELEMENTOS DO DOM
======================= */

// Área principal
const content = document.getElementById("content");

// Resultado das operações
const resultado = document.getElementById("resultado");

// Itens do menu e Sidebar
const menuItems = document.getElementsByClassName("menu-item");

/* =======================
   BOTÕES DO DASHBOARD
======================= */

const btnAlunos = document.getElementById("btnAlunos");
const btnProfessores = document.getElementById("btnProfessores");
const btnTurmas = document.getElementById("btnTurmas");
const btnFrequencia = document.getElementById("btnFrequencia");

/* =======================
   BOTÕES DE FALTAS
======================= */

const studentId = document.getElementById("studentId");

const btnRegistrarFalta =
    document.getElementById("btnRegistrarFalta");

const btnConsultarFaltas =
    document.getElementById("btnConsultarFaltas");

/* =======================
   BOTÕES DE ESTATÍSTICAS
======================= */

const btnEstatisticas =
    document.getElementById("btnEstatisticas");

/* =======================
   BOTÃO ASYNC/AWAIT
======================= */

const btnAsync =
    document.getElementById("btnAsync");

/* =======================
   FUNÇÕES DO DASHBOARD
======================= */

function mostrarAlunos() {

    console.log("Botão Total de Alunos clicado.");

    if (resultado) {
        resultado.textContent =
            "Consulta de alunos executada. Verifique o Console.";
    }

}

function mostrarProfessores() {

    console.log("Botão Total de Professores clicado.");

    if (resultado) {
        resultado.textContent =
            "Consulta de professores executada. Verifique o Console.";
    }

}

function mostrarTurmas() {

    console.log("Botão Turmas Ativas clicado.");

    if (resultado) {
        resultado.textContent =
            "Consulta de turmas executada. Verifique o Console.";
    }

}

function mostrarFrequencia() {

    console.log("Botão Taxa de Frequência clicado.");

    if (resultado) {
        resultado.textContent =
            "Consulta de frequência executada. Verifique o Console.";
    }

}

/* =======================
   FUNÇÃO REGISTRAR FALTA
======================= */

function registrarFalta() {

    console.log("Botão Registrar Falta clicado.");

    const id = Number(studentId.value);

    if (!id) {

        console.log("ID do aluno não informado.");

        if (resultado) {
            resultado.textContent =
                "Informe o ID do aluno.";
        }

        return;
    }

    console.log(
        "Falta solicitada para o aluno:",
        id
    );

    if (resultado) {
        resultado.textContent =
            `Falta registrada para o aluno ${id}.`;
    }

}

/* =======================
   FUNÇÃO CONSULTAR FALTAS
======================= */

function consultarFaltas() {

    console.log("Botão Consultar Faltas clicado.");

    console.log("Executando consulta de faltas.");

    if (resultado) {
        resultado.textContent =
            "Consulta de faltas executada. Verifique o Console.";
    }

}

/* =======================
   FUNÇÃO ESTATÍSTICAS
======================= */

function mostrarEstatisticas() {

    console.log("Botão Estatísticas clicado.");

    console.log("Executando estatísticas do sistema.");

    if (resultado) {
        resultado.textContent =
            "Estatísticas executadas. Verifique o Console.";
    }

}

/* =======================
   FUNÇÃO ASYNC/AWAIT
======================= */

async function executarAsync() {

    console.log("Botão Async/Await clicado.");

    if (resultado) {
        resultado.textContent =
            "Operação Async/Await iniciada...";
    }

    console.log("Iniciando operação assíncrona...");

    await new Promise(function (resolve) {

        setTimeout(resolve, 2000);

    });

    console.log("Operação Async/Await finalizada!");

    if (resultado) {
        resultado.textContent =
            "Operação Async/Await finalizada!";
    }

}

/* =======================
   NAVEGAÇÃO
======================= */

function navegar(nome) {

    console.log("Menu " + nome + " selecionado.");

    if (nome === "Dashboard") {

        content.textContent =
            "Dashboard\n\nVisão geral do sistema.";

    }

    else if (nome === "Alunos") {

        content.textContent =
            "Alunos\n\nÁrea de gerenciamento de alunos.";

    }

    else if (nome === "Professores") {

        content.textContent =
            "Professores\n\nÁrea de gerenciamento de professores.";

    }

    else if (nome === "Faltas") {

        content.textContent =
            "Faltas\n\nÁrea de gerenciamento de faltas.";

    }

    else if (nome === "Estatísticas") {

        content.textContent =
            "Estatísticas\n\nÁrea de estatísticas do sistema.";

    }

    else {

        content.textContent =
            nome +
            "\n\nEsta área está preparada para desenvolvimento futuro.";

    }

}

/* =======================
   EVENTOS DO DASHBOARD
======================= */

if (btnAlunos) {

    btnAlunos.addEventListener(
        "click",
        mostrarAlunos
    );

}

if (btnProfessores) {

    btnProfessores.addEventListener(
        "click",
        mostrarProfessores
    );

}

if (btnTurmas) {

    btnTurmas.addEventListener(
        "click",
        mostrarTurmas
    );

}

if (btnFrequencia) {

    btnFrequencia.addEventListener(
        "click",
        mostrarFrequencia
    );

}

/* =======================
   EVENTOS DE FALTAS
======================= */

if (btnRegistrarFalta) {

    btnRegistrarFalta.addEventListener(
        "click",
        registrarFalta
    );

}

if (btnConsultarFaltas) {

    btnConsultarFaltas.addEventListener(
        "click",
        consultarFaltas
    );

}

/* =======================
   EVENTO DE ESTATÍSTICAS
======================= */

if (btnEstatisticas) {

    btnEstatisticas.addEventListener(
        "click",
        mostrarEstatisticas
    );

}

/* =======================
   EVENTO ASYNC/AWAIT
======================= */

if (btnAsync) {

    btnAsync.addEventListener(
        "click",
        executarAsync
    );

}

/* =======================
   EVENTOS DO MENU
======================= */

for (let i = 0; i < menuItems.length; i++) {

    menuItems[i].addEventListener(
        "click",
        function () {

            const nome =
                this.textContent.trim();

            navegar(nome);

        }
    );

}

/* =======================
   INICIALIZAÇÃO
======================= */

console.log(
    APP_NAME + " iniciado com sucesso."
);

console.log(
    "Usuário:",
    usuario
);

console.log(
    "Navegação DOM carregada."
);