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
var StudentService = (function () {
    function StudentService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        //private studentUrl = 'app/student';
        //private studentUrl = 'app/student/students.json';
        this.studentUrl = 'http://localhost:8080/guldu/webapi/student/section';
        this.postUrl = 'http://localhost:8080/guldu/webapi/student';
        this.authToken = this.cookieService.get("auth_token");
    }
    StudentService.prototype.getStudents = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Bearer " + this.authToken);
        var url = this.studentUrl + "/" + id;
        return this.http
            .get(url, { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    StudentService.prototype.getStudent = function (sectionId, studentId) {
        return this.getStudents(sectionId)
            .then(function (students) { return students.find(function (student) { return student.id === studentId; }); });
    };
    StudentService.prototype.save = function (student) {
        if (student.id) {
            return this.put(student);
        }
        return this.post(student);
    };
    StudentService.prototype.delete = function (student) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Bearer " + this.authToken);
        var url = this.postUrl + "/" + student.id;
        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    };
    StudentService.prototype.post = function (student) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Bearer " + this.authToken);
        return this.http
            .post(this.postUrl, JSON.stringify(student), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    StudentService.prototype.put = function (student) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Bearer " + this.authToken);
        var url = this.postUrl + "/" + student.id;
        return this.http
            .put(url, JSON.stringify(student), { headers: headers })
            .toPromise()
            .then(function () { return student; })
            .catch(this.handleError);
    };
    StudentService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    StudentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, core_2.CookieService])
    ], StudentService);
    return StudentService;
}());
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map