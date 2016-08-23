"use strict";
var logged_in_guard_1 = require('../login/logged-in.guard');
var exam_routes_1 = require('../content/exam/exam.routes');
var exam_subject_group_component_1 = require('../content/exam-subject-group/exam-subject-group.component');
exports.examDashboardRoutes = exam_routes_1.examRoutes.concat([
    {
        path: 'exam-subject-group',
        component: exam_subject_group_component_1.ExamSubjectGroupComponent,
        canActivate: [logged_in_guard_1.LoggedInGuard]
    },
]);
//# sourceMappingURL=exam-dashboard.routes.js.map