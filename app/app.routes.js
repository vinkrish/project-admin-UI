"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var attendance_component_1 = require('./attendance/attendance.component');
var class_component_1 = require('./class/class.component');
var class_subject_group_component_1 = require('./class-subject-group/class-subject-group.component');
var homework_component_1 = require('./homework/homework.component');
var section_component_1 = require('./section/section.component');
var student_component_1 = require('./student/student.component');
var subjects_component_1 = require('./subjects/subjects.component');
var subject_group_component_1 = require('./subject-group/subject-group.component');
var subject_group_subject_component_1 = require('./subject-group-subject/subject-group-subject.component');
var subject_teacher_component_1 = require('./subject-teacher/subject-teacher.component');
var teacher_component_1 = require('./teacher/teacher.component');
var timetable_component_1 = require('./timetable/timetable.component');
var class_edit_component_1 = require('./class/class-edit.component');
var teacher_edit_component_1 = require('./teacher/teacher-edit.component');
var subjects_edit_component_1 = require('./subjects/subjects-edit.component');
var subject_group_edit_component_1 = require('./subject-group/subject-group-edit.component');
var section_edit_component_1 = require('./section/section-edit.component');
var student_edit_component_1 = require('./student/student-edit.component');
var subject_teacher_edit_component_1 = require('./subject-teacher/subject-teacher-edit.component');
var routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
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
        path: 'class',
        component: class_component_1.ClassComponent
    },
    {
        path: 'class-subject-group',
        component: class_subject_group_component_1.ClassSubjectGroupComponent
    },
    {
        path: 'homework',
        component: homework_component_1.HomeworkComponent
    },
    {
        path: 'section',
        component: section_component_1.SectionComponent
    },
    {
        path: 'student',
        component: student_component_1.StudentComponent
    },
    {
        path: 'subjects',
        component: subjects_component_1.SubjectsComponent
    },
    {
        path: 'subject-group',
        component: subject_group_component_1.SubjectGroupComponent
    },
    {
        path: 'subject-group-subject',
        component: subject_group_subject_component_1.SubjectGroupSubjectComponent
    },
    {
        path: 'subject-teacher',
        component: subject_teacher_component_1.SubjectTeacherComponent
    },
    {
        path: 'teacher',
        component: teacher_component_1.TeacherComponent
    },
    {
        path: 'timetable',
        component: timetable_component_1.TimetableComponent
    },
    {
        path: 'class/edit/:id',
        component: class_edit_component_1.ClassEditComponent
    },
    {
        path: 'section/edit/:id',
        component: section_edit_component_1.SectionEditComponent
    },
    {
        path: 'teacher/edit/:id',
        component: teacher_edit_component_1.TeacherEditComponent
    },
    {
        path: 'subject/edit/:id',
        component: subjects_edit_component_1.SubjectsEditComponent
    },
    {
        path: 'subject-group/edit/:id',
        component: subject_group_edit_component_1.SubjectGroupEditComponent
    },
    {
        path: 'student/edit/:id',
        component: student_edit_component_1.StudentEditComponent
    },
    {
        path: 'subject-teacher/edit/:id',
        component: subject_teacher_edit_component_1.SubjectTeacherEditComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map