"use strict";
var logged_in_guard_1 = require('../login/logged-in.guard');
var cce_student_profile_component_1 = require('../content/cce-student-profile/cce-student-profile.component');
exports.cceDashboardRoutes = [
    {
        path: 'cce-student-profile',
        component: cce_student_profile_component_1.CceStudentProfileComponent,
        canActivate: [logged_in_guard_1.LoggedInGuard]
    }
];
//# sourceMappingURL=cce-dashboard.routes.js.map