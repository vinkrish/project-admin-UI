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
var core_2 = require('angular2-cookie/core');
var ExamDashboardComponent = (function () {
    function ExamDashboardComponent(router, _cookieService) {
        this.router = router;
        this._cookieService = _cookieService;
        this.Items1 = [
            { name: 'Exam', link: 'exam' },
            { name: 'Exam Subject Group', link: 'exam-subject-group' },
            { name: 'Exam Subject', link: 'exam-subject' }
        ];
        this._cookieService.put("schoolId", "107");
        this._cookieService.put("auth_token", "ms3e45u5os67tgo4ubfckmt2eit9g7");
    }
    ExamDashboardComponent.prototype.gotoDetail = function (item) {
        var link = ['/', item];
        this.router.navigate(link);
    };
    ExamDashboardComponent = __decorate([
        core_1.Component({
            selector: 'ui-exam-dashboard',
            templateUrl: 'app/exam-dashboard/exam-dashboard.component.html',
            styleUrls: ['app/exam-dashboard/exam-dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_2.CookieService])
    ], ExamDashboardComponent);
    return ExamDashboardComponent;
}());
exports.ExamDashboardComponent = ExamDashboardComponent;
//# sourceMappingURL=exam-dashboard.component.js.map