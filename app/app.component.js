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
var attendance_service_1 = require('./attendance/attendance.service');
var class_service_1 = require('./class/class.service');
var class_subject_group_service_1 = require('./class-subject-group/class-subject-group.service');
var homework_service_1 = require('./homework/homework.service');
var section_service_1 = require('./section/section.service');
var student_service_1 = require('./student/student.service');
var subject_group_service_1 = require('./subject-group/subject-group.service');
var subject_group_subject_service_1 = require('./subject-group-subject/subject-group-subject.service');
var subject_teacher_service_1 = require('./subject-teacher/subject-teacher.service');
var subjects_service_1 = require('./subjects/subjects.service');
var teacher_service_1 = require('./teacher/teacher.service');
var timetable_service_1 = require('./timetable/timetable.service');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t  <router-outlet></router-outlet>\n  ",
            styleUrls: ['app/app.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [
                attendance_service_1.AttendanceService,
                class_service_1.ClassService,
                class_subject_group_service_1.ClassSubjectGroupService,
                homework_service_1.HomeworkService,
                section_service_1.SectionService,
                student_service_1.StudentService,
                subject_group_service_1.SubjectGroupService,
                subject_group_subject_service_1.SubjectGroupSubjectService,
                subject_teacher_service_1.SubjectTeacherService,
                subjects_service_1.SubjectsService,
                teacher_service_1.TeacherService,
                timetable_service_1.TimetableService,
                core_2.CookieService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map