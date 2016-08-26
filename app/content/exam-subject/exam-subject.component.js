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
var class_service_1 = require('../class/class.service');
var exam_1 = require('../exam/exam');
var exam_service_1 = require('../exam/exam.service');
var class_subject_group_service_1 = require('../class-subject-group/class-subject-group.service');
var exam_subject_group_1 = require('../exam-subject-group/exam-subject-group');
var exam_subject_group_service_1 = require('../exam-subject-group/exam-subject-group.service');
var subject_group_subject_service_1 = require('../subject-group-subject/subject-group-subject.service');
var exam_subject_1 = require('./exam-subject');
var exam_subject_service_1 = require('./exam-subject.service');
var core_2 = require('angular2-cookie/core');
var ExamSubjectComponent = (function () {
    function ExamSubjectComponent(router, _cookieService, classService, examService, csgService, esgService, sgsService, examSubjectService) {
        this.router = router;
        this._cookieService = _cookieService;
        this.classService = classService;
        this.examService = examService;
        this.csgService = csgService;
        this.esgService = esgService;
        this.sgsService = sgsService;
        this.examSubjectService = examSubjectService;
        this.addingExamSubject = false;
    }
    ExamSubjectComponent.prototype.getClasses = function () {
        var _this = this;
        this.classService
            .getClasses()
            .then(function (classes) { return _this.classes = classes; })
            .catch(function (error) { return _this.error = error; });
    };
    ExamSubjectComponent.prototype.classSelected = function (classId) {
        //this.selectedClass = null;
        for (var i = 0; i < this.classes.length; i++) {
            if (this.classes[i].id == classId) {
                this.selectedClass = this.classes[i];
            }
        }
        this.classSubjectGroups = null;
        this.getClassSubjectGroups(this.selectedClass.id);
        this.examSubjectGroups = null;
        this.getExams(this.selectedClass.id);
        this.addingExamSubject = false;
    };
    ExamSubjectComponent.prototype.getExams = function (id) {
        var _this = this;
        this.examService
            .getExams(id)
            .then(function (exams) { return _this.exams = exams; })
            .catch(function (error) { return _this.error = error; });
    };
    ExamSubjectComponent.prototype.examSelected = function (examId) {
        for (var i = 0; i < this.exams.length; i++) {
            if (this.exams[i].id == examId) {
                this.selectedExam = this.exams[i];
            }
        }
        this.examSubjectGroups = null;
        this.getExamSubjectGroup(this.selectedExam.id);
        this.getExamSubjects(this.selectedExam.id);
        this.addingExamSubject = false;
    };
    ExamSubjectComponent.prototype.getExamSubjectGroup = function (id) {
        var _this = this;
        this.esgService
            .getExamSubjectGroups(id)
            .then(function (esgs) { return _this.examSubjectGroups = esgs; })
            .catch(function (error) { return _this.error = error; });
    };
    ExamSubjectComponent.prototype.esgSelected = function (esgId) {
        for (var i = 0; i < this.examSubjectGroups.length; i++) {
            if (this.examSubjectGroups[i].subjectGroupId == esgId) {
                this.selectedEsg = this.examSubjectGroups[i];
            }
        }
        this.getSubjectGroupSubjects(this.selectedEsg.subjectGroupId);
        this.addingExamSubject = false;
    };
    ExamSubjectComponent.prototype.getSubjectGroupSubjects = function (id) {
        var _this = this;
        this.sgsService
            .getSubjectGroupSubjects(id)
            .then(function (subjectGroupSubjects) { return _this.subjectGroupSubjects = subjectGroupSubjects; })
            .catch(function (error) { return _this.error = error; });
    };
    ExamSubjectComponent.prototype.getExamSubjects = function (id) {
        var _this = this;
        this.examSubjectService
            .getExamSubjects(id)
            .then(function (examSubjects) { return _this.examSubjects = examSubjects; })
            .catch(function (error) { return _this.error = error; });
    };
    ExamSubjectComponent.prototype.ngOnInit = function () {
        this.getClasses();
        this.selectedClass = new clas_1.Clas();
        this.selectedExam = new exam_1.Exam();
        this.selectedEsg = new exam_subject_group_1.ExamSubjectGroup();
    };
    ExamSubjectComponent.prototype.onSelect = function (examSubject) {
        this.selectedExamSubject = examSubject;
        this.addingExamSubject = false;
    };
    ExamSubjectComponent.prototype.close = function (savedEsg) {
        this.addingExamSubject = false;
        if (savedEsg) {
            this.getExams(this.selectedEsg.id);
        }
    };
    ExamSubjectComponent.prototype.goToDashboard = function () {
        this.router.navigate(['/dashboard']);
    };
    ExamSubjectComponent.prototype.add = function () {
        if (this.addingExamSubject) {
            this.addingExamSubject = false;
        }
        else {
            this.examSubject = new exam_subject_1.ExamSubject();
            this.examSubject.examId = this.selectedExam.id;
            this.addingExamSubject = true;
        }
        this.selectedExamSubject = null;
    };
    ExamSubjectComponent.prototype.delete = function (examSubject, event) {
        var _this = this;
        event.stopPropagation();
        this.examSubjectService
            .delete(examSubject)
            .then(function (res) {
            _this.examSubjects = _this.examSubjects.filter(function (h) { return h !== examSubject; });
            if (_this.selectedExamSubject === examSubject) {
                _this.selectedEsg = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    ExamSubjectComponent.prototype.getClassSubjectGroups = function (id) {
        var _this = this;
        this.csgService
            .getClassSubjectGroups(id)
            .then(function (classSubjectGroups) { return _this.classSubjectGroups = classSubjectGroups; })
            .catch(function (error) { return _this.error = error; });
    };
    ExamSubjectComponent.prototype.subjectSelected = function (subjectId) {
        for (var i = 0; i < this.subjectGroupSubjects.length; i++) {
            if (this.subjectGroupSubjects[i].subjectId == subjectId) {
                this.examSubject.subjectName = this.subjectGroupSubjects[i].subjectName;
            }
        }
    };
    ExamSubjectComponent.prototype.save = function () {
        var _this = this;
        this.examSubjectService
            .post(this.examSubject)
            .then(function (examSubject) {
            _this.addingExamSubject = false;
            _this.examSubjectGroup = null;
            _this.examSubjectGroups = null;
            _this.selectedExam = new exam_1.Exam();
            _this.selectedEsg = new exam_subject_group_1.ExamSubjectGroup();
            _this.examSubjects = null;
            //this.selectedExamSubject = new ExamSubject();
            //this.getExamSubjects(this.selectedExam.id);
        })
            .catch(function (error) { return _this.error = error; });
    };
    ExamSubjectComponent.prototype.update = function (examSubject, event) {
        var _this = this;
        event.stopPropagation();
        this.examSubjectService
            .save(examSubject)
            .then(function () { return _this.getExamSubjects(_this.selectedExam.id); })
            .catch(function (error) { return _this.error = error; });
    };
    ExamSubjectComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ui-exam-subject',
            templateUrl: 'exam-subject.component.html',
            styleUrls: ['exam-subject.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_2.CookieService, class_service_1.ClassService, exam_service_1.ExamService, class_subject_group_service_1.ClassSubjectGroupService, exam_subject_group_service_1.ExamSubjectGroupService, subject_group_subject_service_1.SubjectGroupSubjectService, exam_subject_service_1.ExamSubjectService])
    ], ExamSubjectComponent);
    return ExamSubjectComponent;
}());
exports.ExamSubjectComponent = ExamSubjectComponent;
//# sourceMappingURL=exam-subject.component.js.map