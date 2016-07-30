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
var clas_1 = require('../class/clas');
var section_1 = require('../section/section');
var class_service_1 = require('../class/class.service');
var section_service_1 = require('../section/section.service');
var student_service_1 = require('./student.service');
var student_edit_component_1 = require('./student-edit.component');
var core_2 = require('angular2-cookie/core');
var StudentComponent = (function () {
    function StudentComponent(router, _cookieService, classService, sectionService, studentService) {
        this.router = router;
        this._cookieService = _cookieService;
        this.classService = classService;
        this.sectionService = sectionService;
        this.studentService = studentService;
        this.addingSection = false;
        this.addingStudent = false;
    }
    StudentComponent.prototype.getClasses = function () {
        var _this = this;
        this.classService
            .getClasses()
            .then(function (classes) { return _this.classes = classes; })
            .catch(function (error) { return _this.error = error; });
    };
    StudentComponent.prototype.classSelected = function (classId) {
        for (var i = 0; i < this.classes.length; i++) {
            if (this.classes[i].id == classId) {
                this.selectedClass = this.classes[i];
            }
        }
        this.getSections(this.selectedClass.id);
        this._cookieService.put("classId", "" + this.selectedClass.id);
        this._cookieService.put("className", this.selectedClass.className);
        this.addingStudent = false;
        this.addingSection = false;
        this.students = null;
    };
    StudentComponent.prototype.getSections = function (id) {
        var _this = this;
        this.sectionService
            .getSections(id)
            .then(function (sections) { return _this.sections = sections; })
            .catch(function (error) { return _this.error = error; });
    };
    StudentComponent.prototype.sectionSelected = function (sectionId) {
        for (var i = 0; i < this.sections.length; i++) {
            if (this.sections[i].id == sectionId) {
                this.selectedSection = this.sections[i];
            }
        }
        this.getStudents(this.selectedSection.id);
        this._cookieService.put("sectionId", "" + this.selectedSection.id);
        this._cookieService.put("sectionName", this.selectedSection.sectionName);
        this.addingStudent = false;
        this.addingSection = true;
    };
    StudentComponent.prototype.getStudents = function (id) {
        var _this = this;
        this.studentService
            .getStudents(id)
            .then(function (students) { return _this.students = students; })
            .catch(function (error) { return _this.error = error; });
    };
    StudentComponent.prototype.ngOnInit = function () {
        this.getClasses();
        this.selectedClass = new clas_1.Clas(0, "");
        this.selectedSection = new section_1.Section(0, "");
    };
    StudentComponent.prototype.onSelect = function (student) {
        this.selectedStudent = student;
        this.addingStudent = false;
    };
    StudentComponent.prototype.close = function (savedStudent) {
        this.addingStudent = false;
        if (savedStudent) {
            this.getStudents(this.selectedStudent.id);
        }
    };
    StudentComponent.prototype.goToDashboard = function () {
        this.router.navigate(['/dashboard']);
    };
    StudentComponent.prototype.addStudent = function () {
        if (this.addingSection) {
            if (this.addingStudent) {
                this.addingStudent = false;
            }
            else {
                this.addingStudent = true;
            }
        }
        //this.addingSection = true;
        this.selectedStudent = null;
    };
    StudentComponent.prototype.gotoEdit = function (student, event) {
        event.stopPropagation();
        this.router.navigate(['student/edit', student.id]);
    };
    StudentComponent.prototype.deleteStudent = function (student, event) {
        var _this = this;
        event.stopPropagation();
        this.studentService
            .delete(student)
            .then(function (res) {
            _this.students = _this.students.filter(function (h) { return h !== student; });
            if (_this.selectedStudent === student) {
                _this.selectedStudent = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    StudentComponent = __decorate([
        core_1.Component({
            selector: 'ui-student',
            templateUrl: 'app/student/student.component.html',
            styleUrls: ['app/student/student.component.css'],
            directives: [student_edit_component_1.StudentEditComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_2.CookieService, class_service_1.ClassService, section_service_1.SectionService, student_service_1.StudentService])
    ], StudentComponent);
    return StudentComponent;
}());
exports.StudentComponent = StudentComponent;
//# sourceMappingURL=student.component.js.map