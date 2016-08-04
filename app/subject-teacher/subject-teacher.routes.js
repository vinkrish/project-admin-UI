"use strict";
var subject_teacher_component_1 = require('./subject-teacher.component');
var subject_teacher_edit_component_1 = require('./subject-teacher-edit.component');
exports.subjectTeacherRoutes = [
    {
        path: 'subject-teacher',
        component: subject_teacher_component_1.SubjectTeacherComponent
    },
    {
        path: 'subject-teacher/edit/:id',
        component: subject_teacher_edit_component_1.SubjectTeacherEditComponent
    }
];
//# sourceMappingURL=subject-teacher.routes.js.map