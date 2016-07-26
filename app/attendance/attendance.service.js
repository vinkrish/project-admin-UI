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
var AttendanceService = (function () {
    function AttendanceService(http) {
        this.http = http;
        this.attendanceUrl = 'app/attendance';
    }
    AttendanceService.prototype.getAttendance = function () {
        return this.http.get(this.attendanceUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    AttendanceService.prototype.save = function (attendance) {
        if (attendance.Id) {
            return this.put(attendance);
        }
        return this.post(attendance);
    };
    AttendanceService.prototype.delete = function (attendance) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.attendanceUrl + "/" + attendance.Id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    AttendanceService.prototype.post = function (attendance) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.attendanceUrl, JSON.stringify(attendance), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    AttendanceService.prototype.put = function (attendance) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.attendanceUrl + "/" + attendance.Id;
        return this.http
            .put(url, JSON.stringify(attendance), { headers: headers })
            .toPromise()
            .then(function () { return attendance; })
            .catch(this.handleError);
    };
    AttendanceService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    AttendanceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AttendanceService);
    return AttendanceService;
}());
exports.AttendanceService = AttendanceService;
//# sourceMappingURL=attendance.service.js.map