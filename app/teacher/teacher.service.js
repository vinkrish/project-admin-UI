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
var core_2 = require('angular2-cookie/core');
var TeacherService = (function () {
    function TeacherService(http, _cookieService) {
        this.http = http;
        this._cookieService = _cookieService;
        //private teacherUrl = 'app/teacher/classes';
        //private teacherUrl = 'app/teacher/teachers.json';
        this.teacherUrl = 'http://localhost:8080/guldu/webapi/teacher/school';
        this.postUrl = 'http://localhost:8080/guldu/webapi/teacher';
    }
    TeacherService.prototype.getTeachers = function () {
        var url = this.teacherUrl + "/" + +this._cookieService.get("schoolId");
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TeacherService.prototype.getTeacher = function (id) {
        return this.getTeachers()
            .then(function (teachers) { return teachers.find(function (teacher) { return teacher.id === id; }); });
    };
    TeacherService.prototype.save = function (teacher) {
        if (teacher.id) {
            return this.put(teacher);
        }
        return this.post(teacher);
    };
    TeacherService.prototype.delete = function (teacher) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.postUrl + "/" + teacher.id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    TeacherService.prototype.post = function (teacher) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        teacher.schoolId = +this._cookieService.get("schoolId");
        return this.http
            .post(this.postUrl, JSON.stringify(teacher), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TeacherService.prototype.put = function (teacher) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.postUrl + "/" + teacher.id;
        return this.http
            .put(url, JSON.stringify(teacher), { headers: headers })
            .toPromise()
            .then(function () { return teacher; })
            .catch(this.handleError);
    };
    TeacherService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    TeacherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, core_2.CookieService])
    ], TeacherService);
    return TeacherService;
}());
exports.TeacherService = TeacherService;
//# sourceMappingURL=teacher.service.js.map