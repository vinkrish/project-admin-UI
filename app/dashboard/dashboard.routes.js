"use strict";
var attendance_routes_1 = require('../attendance/attendance.routes');
var clas_routes_1 = require('../class/clas.routes');
var class_subject_group_routes_1 = require('../class-subject-group/class-subject-group.routes');
var homework_routes_1 = require('../homework/homework.routes');
var section_routes_1 = require('../section/section.routes');
var student_routes_1 = require('../student/student.routes');
var subject_group_routes_1 = require('../subject-group/subject-group.routes');
var subject_group_subject_routes_1 = require('../subject-group-subject/subject-group-subject.routes');
var subject_teacher_routes_1 = require('../subject-teacher/subject-teacher.routes');
var subjects_routes_1 = require('../subjects/subjects.routes');
var teacher_routes_1 = require('../teacher/teacher.routes');
var timetable_routes_1 = require('../timetable/timetable.routes');
exports.dashboardRoutes = clas_routes_1.clasRoutes.concat(class_subject_group_routes_1.clasSubjectGroupRoutes, homework_routes_1.homeworkRoutes, section_routes_1.sectionRoutes, student_routes_1.studentRoutes, subject_group_routes_1.subjectGroupRoutes, subject_group_subject_routes_1.subjectGroupSubjectRoutes, subject_teacher_routes_1.subjectTeacherRoutes, subjects_routes_1.subjectsRoutes, teacher_routes_1.teacherRoutes, attendance_routes_1.attendanceRoutes, timetable_routes_1.timetableRoutes);
//# sourceMappingURL=dashboard.routes.js.map