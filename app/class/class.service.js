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
var ClassService = (function () {
    function ClassService(http, _cookieService) {
        this.http = http;
        this._cookieService = _cookieService;
        //private classUrl = 'app/class/classes';
        //private classUrl = 'app/class/classes.json';
        this.classUrl = 'http://localhost:8080/guldu/webapi/class/school';
        this.postUrl = 'http://localhost:8080/guldu/webapi/class';
    }
    ClassService.prototype.getClasses = function () {
        var url = this.classUrl + "/" + +this._cookieService.get("schoolId");
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ClassService.prototype.getClass = function (id) {
        return this.getClasses()
            .then(function (classes) { return classes.find(function (clas) { return clas.id === id; }); });
    };
    ClassService.prototype.save = function (clas) {
        if (clas.id) {
            return this.put(clas);
        }
        return this.post(clas);
    };
    ClassService.prototype.delete = function (clas) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.postUrl + "/" + clas.id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    ClassService.prototype.post = function (clas) {
        clas.id = 0;
        clas.schoolId = +this._cookieService.get("schoolId");
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.postUrl, JSON.stringify(clas), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ClassService.prototype.put = function (clas) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.postUrl + "/" + clas.id;
        return this.http
            .put(url, JSON.stringify(clas), { headers: headers })
            .toPromise()
            .then(function () { return clas; })
            .catch(this.handleError);
    };
    ClassService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ClassService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, core_2.CookieService])
    ], ClassService);
    return ClassService;
}());
exports.ClassService = ClassService;
//# sourceMappingURL=class.service.js.map