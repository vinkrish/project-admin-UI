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
var SubjectService = (function () {
    function SubjectService(http) {
        this.http = http;
        this.subjectUrl = 'app/subject';
    }
    SubjectService.prototype.getSubjects = function () {
        return this.http.get(this.subjectUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    SubjectService.prototype.getSubject = function (id) {
        return this.getSubjects()
            .then(function (subjects) { return subjects.find(function (subject) { return subject.Id === id; }); });
    };
    SubjectService.prototype.save = function (subject) {
        if (subject.Id) {
            return this.put(subject);
        }
        return this.post(subject);
    };
    SubjectService.prototype.delete = function (subject) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.subjectUrl + "/" + subject.Id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    SubjectService.prototype.post = function (subject) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.subjectUrl, JSON.stringify(subject), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    SubjectService.prototype.put = function (subject) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.subjectUrl + "/" + subject.Id;
        return this.http
            .put(url, JSON.stringify(subject), { headers: headers })
            .toPromise()
            .then(function () { return subject; })
            .catch(this.handleError);
    };
    SubjectService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    SubjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SubjectService);
    return SubjectService;
}());
exports.SubjectService = SubjectService;
//# sourceMappingURL=subjects.service.js.map