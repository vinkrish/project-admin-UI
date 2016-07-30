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
var student_1 = require('./student');
var student_service_1 = require('./student.service');
var gender_1 = require('../shared/gender');
var core_2 = require('angular2-cookie/core');
var StudentEditComponent = (function () {
    function StudentEditComponent(route, _cookieService, studentService) {
        this.route = route;
        this._cookieService = _cookieService;
        this.studentService = studentService;
        this.close = new core_1.EventEmitter();
        this.navigated = false;
        this.genders = [
            new gender_1.Gender("M"),
            new gender_1.Gender("F")
        ];
        this.className = this._cookieService.get("className");
        this.classId = +this._cookieService.get("classId");
        this.sectionName = this._cookieService.get("sectionName");
        this.sectionId = +this._cookieService.get("sectionId");
    }
    StudentEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id'] !== undefined) {
                var studentId = +params['id'];
                _this.navigated = true;
                _this.studentService.getStudent(_this.sectionId, studentId)
                    .then(function (student) {
                    _this.student = student;
                    //this.student.classId = this.classId;
                });
            }
            else {
                _this.navigated = false;
                _this.student = new student_1.Student();
            }
        });
    };
    StudentEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    StudentEditComponent.prototype.save = function () {
        var _this = this;
        this.studentService
            .save(this.student)
            .then(function (hero) {
            _this.student = hero; // saved hero, w/ id if new
            _this.goBack(hero);
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    StudentEditComponent.prototype.goBack = function (savedStudent) {
        if (savedStudent === void 0) { savedStudent = null; }
        this.close.emit(savedStudent);
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', student_1.Student)
    ], StudentEditComponent.prototype, "student", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], StudentEditComponent.prototype, "close", void 0);
    StudentEditComponent = __decorate([
        core_1.Component({
            selector: 'ui-student-detail',
            templateUrl: 'app/student/student-edit.component.html',
            styleUrls: ['app/student/student-edit.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, core_2.CookieService, student_service_1.StudentService])
    ], StudentEditComponent);
    return StudentEditComponent;
}());
exports.StudentEditComponent = StudentEditComponent;
//# sourceMappingURL=student-edit.component.js.map