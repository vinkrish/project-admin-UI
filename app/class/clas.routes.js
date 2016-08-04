"use strict";
var class_component_1 = require('./class.component');
var class_edit_component_1 = require('./class-edit.component');
exports.clasRoutes = [
    {
        path: 'class',
        component: class_component_1.ClassComponent
    }, {
        path: 'class/edit/:id',
        component: class_edit_component_1.ClassEditComponent
    },
];
//# sourceMappingURL=clas.routes.js.map