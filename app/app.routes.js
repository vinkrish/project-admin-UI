"use strict";
var router_1 = require('@angular/router');
var logged_in_guard_1 = require('./login/logged-in.guard');
var credentials_component_1 = require('./login/credentials.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var exam_dashboard_component_1 = require('./exam-dashboard/exam-dashboard.component');
var dashboard_routes_1 = require('./dashboard/dashboard.routes');
var exam_dashboard_routes_1 = require('./exam-dashboard/exam-dashboard.routes');
var routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: credentials_component_1.LoginComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        canActivate: [logged_in_guard_1.LoggedInGuard]
    },
    {
        path: 'exam-dashboard',
        component: exam_dashboard_component_1.ExamDashboardComponent,
        canActivate: [logged_in_guard_1.LoggedInGuard]
    }
].concat(dashboard_routes_1.dashboardRoutes, exam_dashboard_routes_1.examDashboardRoutes);
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map