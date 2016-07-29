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
var SectionService = (function () {
    function SectionService(http) {
        this.http = http;
        //private sectionUrl = 'app/section';
        //private sectionUrl = 'app/section/sections.json';
        this.sectionUrl = 'http://localhost:8080/guldu/webapi/section/class';
        this.postUrl = 'http://localhost:8080/guldu/webapi/section';
    }
    SectionService.prototype.getSections = function (id) {
        var url = this.sectionUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SectionService.prototype.getSection = function (classId, sectionId) {
        return this.getSections(classId)
            .then(function (sections) { return sections.find(function (section) { return section.id === sectionId; }); });
    };
    SectionService.prototype.save = function (section) {
        if (section.id) {
            return this.put(section);
        }
        return this.post(section);
    };
    SectionService.prototype.delete = function (section) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.postUrl + "/" + section.id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    SectionService.prototype.post = function (section) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.postUrl, JSON.stringify(section), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SectionService.prototype.put = function (section) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.postUrl + "/" + section.id;
        return this.http
            .put(url, JSON.stringify(section), { headers: headers })
            .toPromise()
            .then(function () { return section; })
            .catch(this.handleError);
    };
    SectionService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    SectionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SectionService);
    return SectionService;
}());
exports.SectionService = SectionService;
//# sourceMappingURL=section.service.js.map