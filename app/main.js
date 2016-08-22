"use strict";
// The usual bootstrapping imports
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var core_1 = require('angular2-cookie/core');
var credentials_service_1 = require('./login/credentials.service');
var logged_in_guard_1 = require('./login/logged-in.guard');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    core_1.CookieService,
    app_routes_1.appRouterProviders,
    http_1.HTTP_PROVIDERS,
    credentials_service_1.LoginService,
    logged_in_guard_1.LoggedInGuard
]);
//# sourceMappingURL=main.js.map