"use strict";
var router_1 = require('@angular/router');
var logged_in_guard_1 = require('./login/logged-in.guard');
var credentials_component_1 = require('./login/credentials.component');
var clas_routes_1 = require('./class/clas.routes');
var class_subject_group_routes_1 = require('./class-subject-group/class-subject-group.routes');
var homework_routes_1 = require('./homework/homework.routes');
var section_routes_1 = require('./section/section.routes');
var student_routes_1 = require('./student/student.routes');
var subject_group_routes_1 = require('./subject-group/subject-group.routes');
var subject_group_subject_routes_1 = require('./subject-group-subject/subject-group-subject.routes');
var subject_teacher_routes_1 = require('./subject-teacher/subject-teacher.routes');
var subjects_routes_1 = require('./subjects/subjects.routes');
var teacher_routes_1 = require('./teacher/teacher.routes');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var attendance_component_1 = require('./attendance/attendance.component');
var timetable_component_1 = require('./timetable/timetable.component');
var routes = clas_routes_1.clasRoutes.concat(class_subject_group_routes_1.clasSubjectGroupRoutes, homework_routes_1.homeworkRoutes, section_routes_1.sectionRoutes, student_routes_1.studentRoutes, subject_group_routes_1.subjectGroupRoutes, subject_group_subject_routes_1.subjectGroupSubjectRoutes, subject_teacher_routes_1.subjectTeacherRoutes, subjects_routes_1.subjectsRoutes, teacher_routes_1.teacherRoutes, [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: credentials_component_1.LoginComponent,
        canActivate: [logged_in_guard_1.LoggedInGuard]
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'attendance',
        component: attendance_component_1.AttendanceComponent
    },
    {
        path: 'timetable',
        component: timetable_component_1.TimetableComponent
    }
]);
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map