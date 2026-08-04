const { teachers } = require("../data/database");

function registerTeacher(teacher) {
    teachers.push(teacher);
    console.log("Professor cadastrado com sucesso!");
}

function listTeachers() {
    console.table(teachers);
}

module.exports = {
    registerTeacher,
    listTeachers
};