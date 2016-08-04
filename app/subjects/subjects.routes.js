"use strict";
var subjects_component_1 = require('./subjects.component');
var subjects_edit_component_1 = require('./subjects-edit.component');
exports.subjectsRoutes = [
    {
        path: 'subjects',
        component: subjects_component_1.SubjectsComponent
    },
    {
        path: 'subject/edit/:id',
        component: subjects_edit_component_1.SubjectsEditComponent
    }
];
//# sourceMappingURL=subjects.routes.js.map