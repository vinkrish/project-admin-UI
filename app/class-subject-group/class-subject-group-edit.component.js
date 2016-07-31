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
var subject_group_service_1 = require('../subject-group/subject-group.service');
var class_subject_group_1 = require('./class-subject-group');
var class_subject_group_service_1 = require('./class-subject-group.service');
var core_2 = require('angular2-cookie/core');
var ClassSubjectGroupEditComponent = (function () {
    function ClassSubjectGroupEditComponent(route, _cookieService, csgService, subjectGroupService) {
        this.route = route;
        this._cookieService = _cookieService;
        this.csgService = csgService;
        this.subjectGroupService = subjectGroupService;
        this.close = new core_1.EventEmitter();
        this.navigated = false;
        this.classId = +this._cookieService.get("classId");
        this.className = this._cookieService.get("className");
    }
    ClassSubjectGroupEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSubjectGroups();
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id'] === undefined) {
                _this.navigated = false;
                _this.classSubjectGroup = new class_subject_group_1.ClassSubjectGroup();
                _this.classSubjectGroup.classId = _this.classId;
            }
        });
    };
    ClassSubjectGroupEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ClassSubjectGroupEditComponent.prototype.getSubjectGroups = function () {
        var _this = this;
        this.subjectGroupService
            .getSubjectGroups()
            .then(function (subjectGroups) { return _this.subjectGroups = subjectGroups; })
            .catch(function (error) { return _this.error = error; });
    };
    ClassSubjectGroupEditComponent.prototype.subjectGroupSelected = function (subjectId) {
        for (var i = 0; i < this.subjectGroups.length; i++) {
            if (this.subjectGroups[i].id == subjectId) {
                this.classSubjectGroup.subjectGroupName = this.subjectGroups[i].subjectGroupName;
            }
        }
    };
    ClassSubjectGroupEditComponent.prototype.save = function () {
        var _this = this;
        this.csgService
            .save(this.classSubjectGroup)
            .then(function (classSubjectGroup) {
            _this.classSubjectGroup = classSubjectGroup; // saved hero, w/ id if new
            _this.goBack(classSubjectGroup);
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    ClassSubjectGroupEditComponent.prototype.goBack = function (savedSection) {
        if (savedSection === void 0) { savedSection = null; }
        this.close.emit(savedSection);
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', class_subject_group_1.ClassSubjectGroup)
    ], ClassSubjectGroupEditComponent.prototype, "classSubjectGroup", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ClassSubjectGroupEditComponent.prototype, "close", void 0);
    ClassSubjectGroupEditComponent = __decorate([
        core_1.Component({
            selector: 'ui-csg-detail',
            templateUrl: 'app/class-subject-group/class-subject-group-edit.component.html',
            styleUrls: ['app/class-subject-group/class-subject-group-edit.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, core_2.CookieService, class_subject_group_service_1.ClassSubjectGroupService, subject_group_service_1.SubjectGroupService])
    ], ClassSubjectGroupEditComponent);
    return ClassSubjectGroupEditComponent;
}());
exports.ClassSubjectGroupEditComponent = ClassSubjectGroupEditComponent;
//# sourceMappingURL=class-subject-group-edit.component.js.map