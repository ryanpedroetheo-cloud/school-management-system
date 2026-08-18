/*
=========================================================
SCHOOL MANAGEMENT SYSTEM
JavaScript - Navegação e funcionalidades do Dashboard
=========================================================
*/


/* =======================================================
   CONFIGURAÇÕES DA APLICAÇÃO
======================================================= */

const APP_NAME = "School Management System";
const APP_VERSION = "1.0.0";
const USUARIO = "Administrador";


/* =======================================================
   DADOS INICIAIS
======================================================= */

const dadosSistema = {

    alunos: 128,

    professores: 24,

    turmas: 15,

    frequencia: 92,

    faltas: [],

    atividades: [
        "Novo aluno João Silva cadastrado.",
        "Falta registrada para a turma 3ºA.",
        "Nota lançada para Matemática.",
        "Relatório mensal gerado."
    ]

};


/* =======================================================
   ELEMENTOS DO DOM
======================================================= */

const content = document.getElementById("content");

const resultado = document.getElementById("resultado");

const menuItems = document.querySelectorAll(
    ".menu-item[data-page]"
);


/* =======================================================
   BOTÕES DO DASHBOARD
======================================================= */

const btnAlunos =
    document.getElementById("btnAlunos");

const btnProfessores =
    document.getElementById("btnProfessores");

const btnTurmas =
    document.getElementById("btnTurmas");

const btnFrequencia =
    document.getElementById("btnFrequencia");


/* =======================================================
   BOTÕES DE FALTAS
======================================================= */

const studentId =
    document.getElementById("studentId");

const btnRegistrarFalta =
    document.getElementById("btnRegistrarFalta");

const btnConsultarFaltas =
    document.getElementById("btnConsultarFaltas");


/* =======================================================
   BOTÃO DE ESTATÍSTICAS
======================================================= */

const btnEstatisticas =
    document.getElementById("btnEstatisticas");


/* =======================================================
   BOTÃO ASYNC/AWAIT
======================================================= */

const btnAsync =
    document.getElementById("btnAsync");


/* =======================================================
   FUNÇÃO AUXILIAR
   Atualiza o campo de resultado
======================================================= */

function mostrarResultado(mensagem) {

    if (!resultado) {
        return;
    }

    resultado.textContent = mensagem;

}


/* =======================================================
   FUNÇÃO AUXILIAR
   Adiciona uma atividade recente
======================================================= */

function adicionarAtividade(mensagem) {

    dadosSistema.atividades.unshift(mensagem);

    if (dadosSistema.atividades.length > 5) {

        dadosSistema.atividades.pop();

    }

}


/* =======================================================
   FUNÇÃO AUXILIAR
   Formata data e hora
======================================================= */

function obterDataHoraAtual() {

    const agora = new Date();

    return agora.toLocaleString(
        "pt-BR",
        {
            dateStyle: "short",
            timeStyle: "short"
        }
    );

}


/* =======================================================
   FUNÇÃO AUXILIAR
   Salvar dados no navegador
======================================================= */

function salvarDados() {

    try {

        localStorage.setItem(
            "sms_dados",
            JSON.stringify(dadosSistema)
        );

    }

    catch (erro) {

        console.error(
            "Não foi possível salvar os dados:",
            erro
        );

    }

}


/* =======================================================
   FUNÇÃO AUXILIAR
   Carregar dados do navegador
======================================================= */

function carregarDados() {

    try {

        const dadosSalvos =
            localStorage.getItem("sms_dados");

        if (!dadosSalvos) {
            return;
        }

        const dados =
            JSON.parse(dadosSalvos);

        if (dados.alunos !== undefined) {
            dadosSistema.alunos = dados.alunos;
        }

        if (dados.professores !== undefined) {
            dadosSistema.professores = dados.professores;
        }

        if (dados.turmas !== undefined) {
            dadosSistema.turmas = dados.turmas;
        }

        if (dados.frequencia !== undefined) {
            dadosSistema.frequencia = dados.frequencia;
        }

        if (Array.isArray(dados.faltas)) {
            dadosSistema.faltas = dados.faltas;
        }

        if (Array.isArray(dados.atividades)) {
            dadosSistema.atividades = dados.atividades;
        }

    }

    catch (erro) {

        console.error(
            "Erro ao carregar dados:",
            erro
        );

    }

}


/* =======================================================
   DASHBOARD
   TOTAL DE ALUNOS
======================================================= */

function mostrarAlunos() {

    console.log(
        "Botão Total de Alunos clicado."
    );

    mostrarResultado(
        `O sistema possui ${dadosSistema.alunos} alunos cadastrados.`
    );

}


/* =======================================================
   DASHBOARD
   TOTAL DE PROFESSORES
======================================================= */

function mostrarProfessores() {

    console.log(
        "Botão Total de Professores clicado."
    );

    mostrarResultado(
        `O sistema possui ${dadosSistema.professores} professores cadastrados.`
    );

}


/* =======================================================
   DASHBOARD
   TURMAS
======================================================= */

function mostrarTurmas() {

    console.log(
        "Botão Turmas Ativas clicado."
    );

    mostrarResultado(
        `O sistema possui ${dadosSistema.turmas} turmas ativas.`
    );

}


/* =======================================================
   DASHBOARD
   FREQUÊNCIA
======================================================= */

function mostrarFrequencia() {

    console.log(
        "Botão Taxa de Frequência clicado."
    );

    mostrarResultado(
        `A taxa de frequência atual é de ${dadosSistema.frequencia}%.`
    );

}


/* =======================================================
   REGISTRAR FALTA
======================================================= */

function registrarFalta() {

    console.log(
        "Botão Registrar Falta clicado."
    );


    if (!studentId) {

        mostrarResultado(
            "Campo de ID do aluno não encontrado."
        );

        return;

    }


    const id =
        Number(studentId.value);


    /* Validação */

    if (!id || id <= 0) {

        mostrarResultado(
            "Informe um ID de aluno válido."
        );

        studentId.focus();

        return;

    }


    /* Criação do registro */

    const falta = {

        idAluno: id,

        data: obterDataHoraAtual(),

        tipo: "Falta"

    };


    dadosSistema.faltas.push(falta);


    adicionarAtividade(
        `Falta registrada para o aluno ${id}.`
    );


    salvarDados();


    console.log(
        "Falta registrada:",
        falta
    );


    mostrarResultado(
        `Falta registrada com sucesso para o aluno ${id}.`
    );


    studentId.value = "";

}


/* =======================================================
   CONSULTAR FALTAS
======================================================= */

function consultarFaltas() {

    console.log(
        "Botão Consultar Faltas clicado."
    );


    if (dadosSistema.faltas.length === 0) {

        mostrarResultado(
            "Nenhuma falta foi registrada até o momento."
        );

        return;

    }


    const quantidade =
        dadosSistema.faltas.length;


    console.log(
        "Faltas registradas:",
        dadosSistema.faltas
    );


    mostrarResultado(
        `Existem ${quantidade} registro(s) de falta no sistema. Verifique o Console para visualizar os detalhes.`
    );

}


/* =======================================================
   ESTATÍSTICAS
======================================================= */

function mostrarEstatisticas() {

    console.log(
        "Botão Estatísticas clicado."
    );


    const totalFaltas =
        dadosSistema.faltas.length;


    const alunos =
        dadosSistema.alunos;


    const professores =
        dadosSistema.professores;


    const turmas =
        dadosSistema.turmas;


    const frequencia =
        dadosSistema.frequencia;


    console.log(
        "========== ESTATÍSTICAS =========="
    );

    console.log(
        "Alunos:",
        alunos
    );

    console.log(
        "Professores:",
        professores
    );

    console.log(
        "Turmas:",
        turmas
    );

    console.log(
        "Frequência:",
        frequencia + "%"
    );

    console.log(
        "Faltas registradas:",
        totalFaltas
    );


    mostrarResultado(
        `Estatísticas: ${alunos} alunos, ${professores} professores, ${turmas} turmas, frequência de ${frequencia}% e ${totalFaltas} falta(s) registrada(s).`
    );

}


/* =======================================================
   ASYNC/AWAIT
======================================================= */

async function executarAsync() {

    console.log(
        "Botão Async/Await clicado."
    );


    mostrarResultado(
        "Operação Async/Await iniciada..."
    );


    try {

        console.log(
            "Iniciando operação assíncrona..."
        );


        await new Promise(
            function (resolve) {

                setTimeout(
                    resolve,
                    2000
                );

            }
        );


        console.log(
            "Operação Async/Await finalizada!"
        );


        mostrarResultado(
            "Operação Async/Await finalizada com sucesso!"
        );

    }

    catch (erro) {

        console.error(
            "Erro na operação assíncrona:",
            erro
        );


        mostrarResultado(
            "Ocorreu um erro durante a operação assíncrona."
        );

    }

}


/* =======================================================
   ATUALIZAÇÃO DO TÍTULO DO CONTENT
======================================================= */

function atualizarTitulo(titulo, descricao) {

    const tituloElement =
        document.querySelector(
            ".content-header h2"
        );

    const descricaoElement =
        document.querySelector(
            ".content-header p"
        );


    if (tituloElement) {

        tituloElement.textContent =
            titulo;

    }


    if (descricaoElement) {

        descricaoElement.textContent =
            descricao;

    }

}


/* =======================================================
   MENU ATIVO
======================================================= */

function atualizarMenuAtivo(nome) {

    menuItems.forEach(
        function (item) {

            const pagina =
                item.dataset.page;


            if (pagina === nome) {

                item.classList.add(
                    "active"
                );

            }

            else {

                item.classList.remove(
                    "active"
                );

            }

        }
    );

}


/* =======================================================
   NAVEGAÇÃO
======================================================= */

function navegar(nome) {

    console.log(
        "Menu selecionado:",
        nome
    );


    atualizarMenuAtivo(nome);


    switch (nome) {


        case "Dashboard":

            atualizarTitulo(
                "Dashboard",
                "Visão geral do sistema."
            );

            mostrarResultado(
                "Dashboard selecionado."
            );

            break;


        case "Alunos":

            atualizarTitulo(
                "Alunos",
                "Área de gerenciamento de alunos."
            );

            mostrarResultado(
                `Área de alunos selecionada. Total cadastrado: ${dadosSistema.alunos}.`
            );

            break;


        case "Professores":

            atualizarTitulo(
                "Professores",
                "Área de gerenciamento de professores."
            );

            mostrarResultado(
                `Área de professores selecionada. Total cadastrado: ${dadosSistema.professores}.`
            );

            break;


        case "Turmas":

            atualizarTitulo(
                "Turmas",
                "Área de gerenciamento de turmas."
            );

            mostrarResultado(
                `Área de turmas selecionada. Total de turmas ativas: ${dadosSistema.turmas}.`
            );

            break;


        case "Disciplinas":

            atualizarTitulo(
                "Disciplinas",
                "Área de gerenciamento de disciplinas."
            );

            mostrarResultado(
                "Área de disciplinas selecionada. Esta funcionalidade está preparada para desenvolvimento."
            );

            break;


        case "Faltas":

            atualizarTitulo(
                "Faltas",
                "Área de gerenciamento de faltas."
            );

            mostrarResultado(
                `Área de faltas selecionada. Existem ${dadosSistema.faltas.length} registro(s).`
            );

            break;


        case "Estatísticas":

            atualizarTitulo(
                "Estatísticas",
                "Indicadores gerais do sistema."
            );

            mostrarEstatisticas();

            break;


        case "Calendário":

            atualizarTitulo(
                "Calendário",
                "Calendário escolar."
            );

            mostrarResultado(
                "Área de calendário selecionada. Esta funcionalidade está preparada para desenvolvimento."
            );

            break;


        case "Relatórios":

            atualizarTitulo(
                "Relatórios",
                "Relatórios do sistema."
            );

            mostrarResultado(
                "Área de relatórios selecionada. Esta funcionalidade está preparada para desenvolvimento."
            );

            break;


        case "Configurações":

            atualizarTitulo(
                "Configurações",
                "Configurações do sistema."
            );

            mostrarResultado(
                "Área de configurações selecionada. Esta funcionalidade está preparada para desenvolvimento."
            );

            break;


        default:

            atualizarTitulo(
                nome,
                "Área do sistema."
            );

            mostrarResultado(
                `${nome} selecionado. Esta área está preparada para desenvolvimento futuro.`
            );

            break;

    }

}


/* =======================================================
   EVENTO - ALUNOS
======================================================= */

if (btnAlunos) {

    btnAlunos.addEventListener(
        "click",
        mostrarAlunos
    );

}


/* =======================================================
   EVENTO - PROFESSORES
======================================================= */

if (btnProfessores) {

    btnProfessores.addEventListener(
        "click",
        mostrarProfessores
    );

}


/* =======================================================
   EVENTO - TURMAS
======================================================= */

if (btnTurmas) {

    btnTurmas.addEventListener(
        "click",
        mostrarTurmas
    );

}


/* =======================================================
   EVENTO - FREQUÊNCIA
======================================================= */

if (btnFrequencia) {

    btnFrequencia.addEventListener(
        "click",
        mostrarFrequencia
    );

}


/* =======================================================
   EVENTO - REGISTRAR FALTA
======================================================= */

if (btnRegistrarFalta) {

    btnRegistrarFalta.addEventListener(
        "click",
        registrarFalta
    );

}


/* =======================================================
   EVENTO - CONSULTAR FALTAS
======================================================= */

if (btnConsultarFaltas) {

    btnConsultarFaltas.addEventListener(
        "click",
        consultarFaltas
    );

}


/* =======================================================
   EVENTO - ESTATÍSTICAS
======================================================= */

if (btnEstatisticas) {

    btnEstatisticas.addEventListener(
        "click",
        mostrarEstatisticas
    );

}


/* =======================================================
   EVENTO - ASYNC/AWAIT
======================================================= */

if (btnAsync) {

    btnAsync.addEventListener(
        "click",
        executarAsync
    );

}


/* =======================================================
   EVENTOS DOS MENUS
======================================================= */

menuItems.forEach(
    function (item) {

        item.addEventListener(
            "click",
            function () {

                const nome =
                    this.dataset.page;


                if (!nome) {
                    return;
                }


                navegar(nome);

            }
        );

    }
);


/* =======================================================
   ATALHO PARA ENTER NO CAMPO DE ALUNO
======================================================= */

if (studentId) {

    studentId.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                registrarFalta();

            }

        }
    );

}


/* =======================================================
   INICIALIZAÇÃO
======================================================= */

function iniciarAplicacao() {

    console.log(
        "========================================"
    );

    console.log(
        APP_NAME
    );

    console.log(
        "Versão:",
        APP_VERSION
    );

    console.log(
        "Usuário:",
        USUARIO
    );

    console.log(
        "========================================"
    );


    carregarDados();


    atualizarMenuAtivo(
        "Dashboard"
    );


    console.log(
        "Dados carregados com sucesso."
    );

    console.log(
        "Navegação DOM carregada."
    );

    console.log(
        "Sistema iniciado com sucesso."
    );

}


/* =======================================================
   EXECUTAR A APLICAÇÃO
======================================================= */

iniciarAplicacao();  