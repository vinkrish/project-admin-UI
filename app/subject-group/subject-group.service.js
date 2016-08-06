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
var core_2 = require('angular2-cookie/core');
require('rxjs/add/operator/toPromise');
var SubjectGroupService = (function () {
    function SubjectGroupService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        //private subjectGroupUrl = 'app/subject-group/subject-groups';
        //private subjectGroupUrl = 'app/subject-group/subject-groups.json';
        this.subjectGroupUrl = 'http://localhost:8080/guldu/webapi/subjectgroup/school';
        this.postUrl = 'http://localhost:8080/guldu/webapi/subjectgroup';
        this.authToken = this.cookieService.get("auth_token");
    }
    SubjectGroupService.prototype.getSubjectGroups = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Bearer " + this.authToken);
        var url = this.subjectGroupUrl + "/" + +this.cookieService.get("schoolId");
        return this.http
            .get(url, { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SubjectGroupService.prototype.getSubjectGroup = function (id) {
        return this.getSubjectGroups()
            .then(function (subjectGroups) { return subjectGroups.find(function (subjectGroup) { return subjectGroup.id === id; }); });
    };
    SubjectGroupService.prototype.save = function (subjectGroup) {
        if (subjectGroup.id) {
            return this.put(subjectGroup);
        }
        return this.post(subjectGroup);
    };
    SubjectGroupService.prototype.delete = function (subjectGroup) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Bearer " + this.authToken);
        var url = this.postUrl + "/" + subjectGroup.id;
        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    };
    SubjectGroupService.prototype.post = function (subjectGroup) {
        subjectGroup.schoolId = +this.cookieService.get("schoolId");
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Bearer " + this.authToken);
        return this.http
            .post(this.postUrl, JSON.stringify(subjectGroup), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SubjectGroupService.prototype.put = function (subjectGroup) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Bearer " + this.authToken);
        var url = this.postUrl + "/" + subjectGroup.id;
        return this.http
            .put(url, JSON.stringify(subjectGroup), { headers: headers })
            .toPromise()
            .then(function () { return subjectGroup; })
            .catch(this.handleError);
    };
    SubjectGroupService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    SubjectGroupService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, core_2.CookieService])
    ], SubjectGroupService);
    return SubjectGroupService;
}());
exports.SubjectGroupService = SubjectGroupService;
//# sourceMappingURL=subject-group.service.js.map