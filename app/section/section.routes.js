"use strict";
var section_component_1 = require('./section.component');
var section_edit_component_1 = require('./section-edit.component');
exports.sectionRoutes = [
    {
        path: 'section',
        component: section_component_1.SectionComponent
    },
    {
        path: 'section/edit/:id',
        component: section_edit_component_1.SectionEditComponent
    }
];
//# sourceMappingURL=section.routes.js.map