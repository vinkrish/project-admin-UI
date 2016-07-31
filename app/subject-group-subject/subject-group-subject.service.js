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
var SubjectGroupSubjectService = (function () {
    function SubjectGroupSubjectService(http) {
        this.http = http;
        //private subjectGroupSubjectUrl = 'app/subject-group-subject';
        this.subjectGroupSubjectUrl = 'http://localhost:8080/guldu/webapi/subjectgroupsubject/subjectgroup';
        this.postUrl = 'http://localhost:8080/guldu/webapi/subjectgroupsubject';
    }
    SubjectGroupSubjectService.prototype.getSubjectGroupSubjects = function (id) {
        var url = this.subjectGroupSubjectUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SubjectGroupSubjectService.prototype.getSubjectGroupSubject = function (id) {
        return this.getSubjectGroupSubjects(id)
            .then(function (subjectGroupSubjects) { return subjectGroupSubjects.find(function (subjectGroupSubject) { return subjectGroupSubject.id === id; }); });
    };
    SubjectGroupSubjectService.prototype.save = function (subjectGroupSubject) {
        if (subjectGroupSubject.id) {
            return this.put(subjectGroupSubject);
        }
        return this.post(subjectGroupSubject);
    };
    SubjectGroupSubjectService.prototype.delete = function (subjectGroupSubject) {
        console.log(subjectGroupSubject.id);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.postUrl + "/" + subjectGroupSubject.id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    SubjectGroupSubjectService.prototype.post = function (subjectGroupSubject) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.postUrl, JSON.stringify(subjectGroupSubject), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SubjectGroupSubjectService.prototype.put = function (subjectGroupSubject) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.postUrl + "/" + subjectGroupSubject.id;
        return this.http
            .put(url, JSON.stringify(subjectGroupSubject), { headers: headers })
            .toPromise()
            .then(function () { return subjectGroupSubject; })
            .catch(this.handleError);
    };
    SubjectGroupSubjectService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    SubjectGroupSubjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SubjectGroupSubjectService);
    return SubjectGroupSubjectService;
}());
exports.SubjectGroupSubjectService = SubjectGroupSubjectService;
//# sourceMappingURL=subject-group-subject.service.js.map