const {
    registerStudent,
    listStudents,
    searchStudent,
    demonstrateAsyncAwait
} = require("./services/studentService");

const {
    registerTeacher,
    listTeachers
} = require("./services/teacherService");

const {
    registerAbsence,
    showAbsences
} = require("./services/absenceService");

const {
    showStatistics
} = require("./services/statisticsService");