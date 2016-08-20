"use strict";
var student_routes_1 = require('../content/student/student.routes');
var subject_group_routes_1 = require('../content/subject-group/subject-group.routes');
var subject_group_subject_routes_1 = require('../content/subject-group-subject/subject-group-subject.routes');
exports.examDashboardRoutes = student_routes_1.studentRoutes.concat(subject_group_routes_1.subjectGroupRoutes, subject_group_subject_routes_1.subjectGroupSubjectRoutes);
//# sourceMappingURL=exam-dashboard.routes.js.map