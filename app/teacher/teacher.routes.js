"use strict";
var teacher_component_1 = require('./teacher.component');
var teacher_edit_component_1 = require('./teacher-edit.component');
exports.teacherRoutes = [
    {
        path: 'teacher',
        component: teacher_component_1.TeacherComponent
    },
    {
        path: 'teacher/edit/:id',
        component: teacher_edit_component_1.TeacherEditComponent
    }
];
//# sourceMappingURL=teacher.routes.js.map