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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var SubjectTeacherService = (function () {
    function SubjectTeacherService(http) {
        this.http = http;
        this.subjectTeacherUrl = 'app/subject-teacher';
    }
    SubjectTeacherService.prototype.getSubjectTeachers = function () {
        return this.http.get(this.subjectTeacherUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    SubjectTeacherService.prototype.getSubjectTeacher = function (id) {
        return this.getSubjectTeachers()
            .then(function (subjectTeachers) { return subjectTeachers.find(function (subjectTeacher) { return subjectTeacher.Id === id; }); });
    };
    SubjectTeacherService.prototype.save = function (subjectTeacher) {
        if (subjectTeacher.Id) {
            return this.put(subjectTeacher);
        }
        return this.post(subjectTeacher);
    };
    SubjectTeacherService.prototype.delete = function (subjectTeacher) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.subjectTeacherUrl + "/" + subjectTeacher.Id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    SubjectTeacherService.prototype.post = function (subjectTeacher) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.subjectTeacherUrl, JSON.stringify(subjectTeacher), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    SubjectTeacherService.prototype.put = function (subjectTeacher) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.subjectTeacherUrl + "/" + subjectTeacher.Id;
        return this.http
            .put(url, JSON.stringify(subjectTeacher), { headers: headers })
            .toPromise()
            .then(function () { return subjectTeacher; })
            .catch(this.handleError);
    };
    SubjectTeacherService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    SubjectTeacherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SubjectTeacherService);
    return SubjectTeacherService;
}());
exports.SubjectTeacherService = SubjectTeacherService;
//# sourceMappingURL=subject-teacher.service.js.map