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
var TimetableService = (function () {
    function TimetableService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.timetableUrl = 'app/timetable';
        this.authToken = this.cookieService.get("auth_token");
    }
    TimetableService.prototype.getTimetables = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Bearer " + this.authToken);
        return this.http
            .get(this.timetableUrl, { headers: headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    TimetableService.prototype.getTimetable = function (id) {
        return this.getTimetables()
            .then(function (timetables) { return timetables.find(function (timetable) { return timetable.Id === id; }); });
    };
    TimetableService.prototype.save = function (timetable) {
        if (timetable.Id) {
            return this.put(timetable);
        }
        return this.post(timetable);
    };
    TimetableService.prototype.delete = function (timetable) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Bearer " + this.authToken);
        var url = this.timetableUrl + "/" + timetable.Id;
        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    };
    TimetableService.prototype.post = function (timetable) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Bearer " + this.authToken);
        return this.http
            .post(this.timetableUrl, JSON.stringify(timetable), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    TimetableService.prototype.put = function (timetable) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Bearer " + this.authToken);
        var url = this.timetableUrl + "/" + timetable.Id;
        return this.http
            .put(url, JSON.stringify(timetable), { headers: headers })
            .toPromise()
            .then(function () { return timetable; })
            .catch(this.handleError);
    };
    TimetableService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    TimetableService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, core_2.CookieService])
    ], TimetableService);
    return TimetableService;
}());
exports.TimetableService = TimetableService;
//# sourceMappingURL=timetable.service.js.map