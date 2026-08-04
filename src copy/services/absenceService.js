const { students } = require("../data/database");

function registerAbsence(studentId) {
    const student = students.find(s => s.id === studentId);

    if (student) {
        student.absences = (student.absences || 0) + 1;
        console.log("Falta registrada!");
    } else {
        console.log("Aluno não encontrado.");
    }
}

function showAbsences() {
    students.forEach(student => {
        console.log(`${student.name}: ${student.absences || 0} falta(s)`);
    });
}

module.exports = {
    registerAbsence,
    showAbsences
};