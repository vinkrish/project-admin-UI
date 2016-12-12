"use strict";
var logged_in_guard_1 = require('../login/logged-in.guard');
var cce_student_profile_component_1 = require('../content/cce-student-profile/cce-student-profile.component');
var cce_coscholastic_routes_1 = require('../content/cce-coscholastic/cce-coscholastic.routes');
var cce_coscholastic_class_routes_1 = require('../content/cce-coscholastic-class/cce-coscholastic-class.routes');
var cce_section_heading_routes_1 = require('../content/cce-section-heading/cce-section-heading.routes');
exports.cceDashboardRoutes = [
    {
        path: 'cce-student-profile',
        component: cce_student_profile_component_1.CceStudentProfileComponent,
        canActivate: [logged_in_guard_1.LoggedInGuard]
    }
].concat(cce_coscholastic_routes_1.cceCoscholasticRoutes, cce_coscholastic_class_routes_1.cceCoschClassRoutes, cce_section_heading_routes_1.sectionHeadingRoutes);
//# sourceMappingURL=cce-dashboard.routes.js.map