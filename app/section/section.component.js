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
var section_service_1 = require('./section.service');
var section_edit_component_1 = require('./section-edit.component');
var SectionComponent = (function () {
    function SectionComponent(router, sectionService) {
        this.router = router;
        this.sectionService = sectionService;
        this.addingSection = false;
    }
    SectionComponent.prototype.getSections = function () {
        var _this = this;
        this.sectionService
            .getSections()
            .then(function (sections) { return _this.sections = sections; })
            .catch(function (error) { return _this.error = error; });
    };
    SectionComponent.prototype.ngOnInit = function () {
        this.getSections();
    };
    SectionComponent.prototype.onSelect = function (section) {
        this.selectedSection = section;
        this.addingSection = false;
    };
    SectionComponent.prototype.close = function (savedClass) {
        this.addingSection = false;
        if (savedClass) {
            this.getSections();
        }
    };
    SectionComponent.prototype.goToDashboard = function () {
        this.router.navigate(['/dashboard']);
    };
    SectionComponent.prototype.addSection = function () {
        this.addingSection = true;
        this.selectedSection = null;
    };
    SectionComponent.prototype.gotoEdit = function (section, event) {
        event.stopPropagation();
        this.router.navigate(['section/edit', section.id]);
    };
    SectionComponent.prototype.deleteSection = function (section, event) {
        var _this = this;
        event.stopPropagation();
        this.sectionService
            .delete(section)
            .then(function (res) {
            _this.sections = _this.sections.filter(function (h) { return h !== section; });
            if (_this.selectedSection === section) {
                _this.selectedSection = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    SectionComponent = __decorate([
        core_1.Component({
            selector: 'ui-section',
            templateUrl: 'app/section/section.component.html',
            styleUrls: ['app/section/section.component.css'],
            directives: [section_edit_component_1.SectionEditComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, section_service_1.SectionService])
    ], SectionComponent);
    return SectionComponent;
}());
exports.SectionComponent = SectionComponent;
//# sourceMappingURL=section.component.js.map