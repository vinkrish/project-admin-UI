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
        //private subjectTeacherUrl = 'app/subject-teacher';
        this.subjectTeacherUrl = 'http://localhost:8080/guldu/webapi/subjectteacher/section';
        this.postUrl = 'http://localhost:8080/guldu/webapi/subjectteacher';
        this.sharedUrl = 'http://localhost:8080/guldu/webapi/shared/subjectteacher';
    }
    SubjectTeacherService.prototype.getSubjectTeachers = function (id) {
        var url = this.subjectTeacherUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SubjectTeacherService.prototype.getSubjectTeacher = function (sectionId, subjectTeacherId) {
        return this.getSubjectTeachers(sectionId)
            .then(function (subjectTeachers) { return subjectTeachers.find(function (subjectTeacher) { return subjectTeacher.id === subjectTeacherId; }); });
    };
    SubjectTeacherService.prototype.save = function (clas) {
        return this.post(clas);
    };
    SubjectTeacherService.prototype.delete = function (subjectTeacher) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.postUrl + "/" + subjectTeacher.id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    SubjectTeacherService.prototype.post = function (clas) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.sharedUrl, JSON.stringify(clas), { headers: headers })
            .toPromise()
            .catch(this.handleError);
    };
    SubjectTeacherService.prototype.put = function (subjectTeacher) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.postUrl + "/" + subjectTeacher.id;
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