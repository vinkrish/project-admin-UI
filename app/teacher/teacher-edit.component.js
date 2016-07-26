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
var teacher_1 = require('./teacher');
var gender_1 = require('./gender');
var teacher_service_1 = require('./teacher.service');
var TeacherEditComponent = (function () {
    function TeacherEditComponent(teacherService, route, _cookieService) {
        this.teacherService = teacherService;
        this.route = route;
        this._cookieService = _cookieService;
        this.close = new core_1.EventEmitter();
        this.navigated = false; // true if navigated here
        this.genders = [
            new gender_1.Gender("M"),
            new gender_1.Gender("F")
        ];
    }
    TeacherEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id'] !== undefined) {
                var id = +params['id'];
                _this.navigated = true;
                _this.teacherService.getTeacher(id)
                    .then(function (teacher) { return _this.teacher = teacher; });
            }
            else {
                _this.navigated = false;
                _this.teacher = new teacher_1.Teacher();
            }
        });
    };
    TeacherEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TeacherEditComponent.prototype.save = function () {
        var _this = this;
        this.teacherService
            .save(this.teacher)
            .then(function (teacher) {
            _this.teacher = teacher; // saved hero, w/ id if new
            _this.goBack(teacher);
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    TeacherEditComponent.prototype.goBack = function (savedTeacher) {
        if (savedTeacher === void 0) { savedTeacher = null; }
        this.close.emit(savedTeacher);
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', teacher_1.Teacher)
    ], TeacherEditComponent.prototype, "teacher", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TeacherEditComponent.prototype, "close", void 0);
    TeacherEditComponent = __decorate([
        core_1.Component({
            selector: 'ui-teacher-detail',
            templateUrl: 'app/teacher/teacher-edit.component.html',
            styleUrls: ['app/teacher/teacher-edit.component.css']
        }), 
        __metadata('design:paramtypes', [teacher_service_1.TeacherService, router_1.ActivatedRoute, core_2.CookieService])
    ], TeacherEditComponent);
    return TeacherEditComponent;
}());
exports.TeacherEditComponent = TeacherEditComponent;
//# sourceMappingURL=teacher-edit.component.js.map