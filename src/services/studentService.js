const { students } = require("../data/database");

function registerStudent(student) {
    students.push(student);
    console.log("Aluno cadastrado com sucesso!");
}

function listStudents() {
    console.table(students);
}

function searchStudent(name) {
    const student = students.find(
        s => s.name.toLowerCase() === name.toLowerCase()
    );

    if (student) {
        console.log(student);
    } else {
        console.log("Aluno não encontrado.");
    }
}

async function demonstrateAsyncAwait() {
    console.log("Iniciando operação...");

    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("Operação finalizada!");
}

module.exports = {
    registerStudent,
    listStudents,
    searchStudent,
    demonstrateAsyncAwait
};