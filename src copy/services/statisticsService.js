const { students, teachers } = require("../data/database");

function showStatistics() {
    console.log("=== Estatísticas ===");
    console.log(`Total de alunos: ${students.length}`);
    console.log(`Total de professores: ${teachers.length}`);
}

module.exports = {
    showStatistics
};