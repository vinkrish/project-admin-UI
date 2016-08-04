"use strict";
var subject_group_component_1 = require('./subject-group.component');
var subject_group_edit_component_1 = require('./subject-group-edit.component');
exports.subjectGroupRoutes = [
    {
        path: 'subject-group',
        component: subject_group_component_1.SubjectGroupComponent
    },
    {
        path: 'subject-group/edit/:id',
        component: subject_group_edit_component_1.SubjectGroupEditComponent
    }
];
//# sourceMappingURL=subject-group.routes.js.map