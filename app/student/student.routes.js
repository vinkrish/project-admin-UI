"use strict";
var student_component_1 = require('./student.component');
var student_edit_component_1 = require('./student-edit.component');
exports.studentRoutes = [
    {
        path: 'student',
        component: student_component_1.StudentComponent
    },
    {
        path: 'student/edit/:id',
        component: student_edit_component_1.StudentEditComponent
    }
];
//# sourceMappingURL=student.routes.js.map