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
var SubjectGroupService = (function () {
    function SubjectGroupService(http) {
        this.http = http;
        this.subjectGroupUrl = 'app/subject-group';
    }
    SubjectGroupService.prototype.getSubjectGroups = function () {
        return this.http.get(this.subjectGroupUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    SubjectGroupService.prototype.getSubjectGroup = function (id) {
        return this.getSubjectGroups()
            .then(function (subjectGroups) { return subjectGroups.find(function (subjectGroup) { return subjectGroup.Id === id; }); });
    };
    SubjectGroupService.prototype.save = function (subjectGroup) {
        if (subjectGroup.Id) {
            return this.put(subjectGroup);
        }
        return this.post(subjectGroup);
    };
    SubjectGroupService.prototype.delete = function (subjectGroup) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.subjectGroupUrl + "/" + subjectGroup.Id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    SubjectGroupService.prototype.post = function (subjectGroup) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.subjectGroupUrl, JSON.stringify(subjectGroup), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    SubjectGroupService.prototype.put = function (subjectGroup) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.subjectGroupUrl + "/" + subjectGroup.Id;
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
        __metadata('design:paramtypes', [http_1.Http])
    ], SubjectGroupService);
    return SubjectGroupService;
}());
exports.SubjectGroupService = SubjectGroupService;
//# sourceMappingURL=subject-group.service.js.map