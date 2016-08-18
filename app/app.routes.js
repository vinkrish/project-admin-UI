"use strict";
var router_1 = require('@angular/router');
var logged_in_guard_1 = require('./login/logged-in.guard');
var credentials_component_1 = require('./login/credentials.component');
var welcome_component_1 = require('./welcome/welcome.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var welcome_routes_1 = require('./welcome/welcome.routes');
var routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: credentials_component_1.LoginComponent
    },
    {
        path: '',
        component: welcome_component_1.WelcomeComponent,
        canActivate: [logged_in_guard_1.LoggedInGuard],
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: dashboard_component_1.DashboardComponent,
                canActivate: [logged_in_guard_1.LoggedInGuard]
            }
        ].concat(welcome_routes_1.welcomeRoutes)
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map