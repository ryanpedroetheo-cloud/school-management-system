/**
 * ============================================================
 * SCHOOL MANAGEMENT SYSTEM
 * Kaizen Software Labs
 * Arquivo Principal
 * ============================================================
 */

"use strict";

//============================================================
// 1. IMPORTAR UTILITIES
//============================================================

import { ask, pause, clearScreen, showHeader } from "./src/utils/schoolUtils.js";

//============================================================
// 2. IMPORTAR MODELS
//============================================================

import { Person } from "./src/models/person.js";
import { Student } from "./src/models/students.js";
import { Teacher } from "./src/models/teacher.js";

//============================================================
// 3. IMPORTAR DADOS
//============================================================

import { students, teachers } from "./src/data/database.js";

//============================================================
// 4. IMPORTAR SERVICES
//============================================================

import {
    registerStudent,
    listStudents
} from "./src/services/studentService.js";

import {
    registerTeacher,
    listTeachers
} from "./src/services/teacherService.js";

import {
    registerAbsence,
    showAbsences
} from "./src/services/absenceService.js";

import {
    showStatistics,
    demonstrateAsyncAwait,
    searchStudent
} from "./src/services/statisticsService.js";

import { iniciarSistema } from "./src/services/menuService.js";

//============================================================
// 5. INICIALIZAR APLICAÇÃO
//============================================================

iniciarSistema();