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
var router_1 = require('@angular/router');
var core_2 = require('angular2-cookie/core');
var clas_1 = require('./clas');
var homework_type_1 = require('./homework-type');
var class_service_1 = require('./class.service');
var ClassEditComponent = (function () {
    function ClassEditComponent(classService, route, _cookieService) {
        this.classService = classService;
        this.route = route;
        this._cookieService = _cookieService;
        this.close = new core_1.EventEmitter();
        this.attendanceTypes = [
            { "id": 1, "type": "Daily" },
            { "id": 2, "type": "Session" },
            { "id": 3, "type": "Period" }
        ];
        this.homeworkTypes = [
            new homework_type_1.HomeworkType("Daily"),
            new homework_type_1.HomeworkType("Period")
        ];
        this.navigated = false; // true if navigated here
    }
    ClassEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id'] !== undefined) {
                var id = +params['id'];
                _this.navigated = true;
                _this.classService.getClass(id)
                    .then(function (clas) { return _this.clas = clas; });
            }
            else {
                _this.navigated = false;
                _this.clas = new clas_1.Clas();
            }
        });
    };
    ClassEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ClassEditComponent.prototype.save = function () {
        var _this = this;
        this.classService
            .save(this.clas)
            .then(function (clas) {
            _this.clas = clas; // saved hero, w/ id if new
            _this.goBack(clas);
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    ClassEditComponent.prototype.goBack = function (savedClas) {
        if (savedClas === void 0) { savedClas = null; }
        this.close.emit(savedClas);
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', clas_1.Clas)
    ], ClassEditComponent.prototype, "clas", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ClassEditComponent.prototype, "close", void 0);
    ClassEditComponent = __decorate([
        core_1.Component({
            selector: 'ui-class-detail',
            templateUrl: 'app/class/class-edit.component.html',
            styleUrls: ['app/class/class-edit.component.css']
        }), 
        __metadata('design:paramtypes', [class_service_1.ClassService, router_1.ActivatedRoute, core_2.CookieService])
    ], ClassEditComponent);
    return ClassEditComponent;
}());
exports.ClassEditComponent = ClassEditComponent;
//# sourceMappingURL=class-edit.component.js.map