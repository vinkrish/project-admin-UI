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
var section_1 = require('./section');
var section_service_1 = require('./section.service');
var SectionEditComponent = (function () {
    function SectionEditComponent(sectionService, route) {
        this.sectionService = sectionService;
        this.route = route;
        this.close = new core_1.EventEmitter();
        this.navigated = false; // true if navigated here
    }
    SectionEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id'] !== undefined) {
                var id = +params['id'];
                _this.navigated = true;
                _this.sectionService.getSection(id)
                    .then(function (section) { return _this.section = section; });
            }
            else {
                _this.navigated = false;
                _this.section = new section_1.Section();
            }
        });
    };
    SectionEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    SectionEditComponent.prototype.save = function () {
        var _this = this;
        this.sectionService
            .save(this.section)
            .then(function (hero) {
            _this.section = hero; // saved hero, w/ id if new
            _this.goBack(hero);
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    SectionEditComponent.prototype.goBack = function (savedSection) {
        if (savedSection === void 0) { savedSection = null; }
        console.log("goBack from edit");
        this.close.emit(savedSection);
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', section_1.Section)
    ], SectionEditComponent.prototype, "section", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SectionEditComponent.prototype, "close", void 0);
    SectionEditComponent = __decorate([
        core_1.Component({
            selector: 'ui-section-detail',
            templateUrl: 'app/section/section-edit.component.html',
            styleUrls: ['app/section/section-edit.component.css']
        }), 
        __metadata('design:paramtypes', [section_service_1.SectionService, router_1.ActivatedRoute])
    ], SectionEditComponent);
    return SectionEditComponent;
}());
exports.SectionEditComponent = SectionEditComponent;
//# sourceMappingURL=section-edit.component.js.map