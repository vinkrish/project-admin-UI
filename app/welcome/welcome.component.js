"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent = __decorate([
        core_1.Component({
            selector: 'ui-welcome',
            template: "\n\t<nav class=\"navbar navbar-default\">\n\t  <div class=\"container-fluid\">\n\t    <div class=\"navbar-header\">\n\t      <a class=\"navbar-brand\" href=\"#\">Instituition name goes here</a>\n\t    </div>\n\t    <ul class=\"nav navbar-nav\">\n\t      <li class=\"active\"><a [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\">Dashboard</a></li>\n\t      <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Others <span class=\"caret\"></span></a>\n\t        <ul class=\"dropdown-menu\">\n\t          <li><a [routerLink]=\"['/exam']\">Exam</a></li>\n\t        </ul>\n\t      </li>\n\t    </ul>\n\t    <ul class=\"nav navbar-nav navbar-right\">\n\t      <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Logout</a></li>\n\t    </ul>\n\t  </div>\n\t</nav>\n\t  <router-outlet></router-outlet>\n\t",
            directives: [router_1.ROUTER_DIRECTIVES],
            styleUrls: ['app/welcome/welcome.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map