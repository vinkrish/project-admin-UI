"use strict";
var app_component_1 = require('./app.component');
var header_component_1 = require('../app/shared/header/header.component');
var credentials_component_1 = require('./login/credentials.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var exam_dashboard_component_1 = require('./exam-dashboard/exam-dashboard.component');
var attendance_component_1 = require('../app/content/attendance/attendance.component');
var class_component_1 = require('../app/content/class/class.component');
var class_edit_component_1 = require('../app/content/class/class-edit.component');
var class_subject_group_component_1 = require('../app/content/class-subject-group/class-subject-group.component');
var class_subject_group_edit_component_1 = require('../app/content/class-subject-group/class-subject-group-edit.component');
var exam_component_1 = require('../app/content/exam/exam.component');
var exam_edit_component_1 = require('../app/content/exam/exam-edit.component');
var exam_subject_component_1 = require('../app/content/exam-subject/exam-subject.component');
var exam_subject_group_component_1 = require('../app/content/exam-subject-group/exam-subject-group.component');
var homework_component_1 = require('../app/content/homework/homework.component');
var section_component_1 = require('../app/content/section/section.component');
var section_edit_component_1 = require('../app/content/section/section-edit.component');
var student_component_1 = require('../app/content/student/student.component');
var student_edit_component_1 = require('../app/content/student/student-edit.component');
var subject_group_component_1 = require('../app/content/subject-group/subject-group.component');
var subject_group_edit_component_1 = require('../app/content/subject-group/subject-group-edit.component');
var subject_group_subject_component_1 = require('../app/content/subject-group-subject/subject-group-subject.component');
var subject_group_subject_edit_component_1 = require('../app/content/subject-group-subject/subject-group-subject-edit.component');
var subject_teacher_component_1 = require('../app/content/subject-teacher/subject-teacher.component');
var subject_teacher_edit_component_1 = require('../app/content/subject-teacher/subject-teacher-edit.component');
var subjects_component_1 = require('../app/content/subjects/subjects.component');
var subjects_edit_component_1 = require('../app/content/subjects/subjects-edit.component');
var teacher_component_1 = require('../app/content/teacher/teacher.component');
var teacher_edit_component_1 = require('../app/content/teacher/teacher-edit.component');
var timetable_component_1 = require('../app/content/timetable/timetable.component');
var core_1 = require('angular2-cookie/core');
var credentials_service_1 = require('./login/credentials.service');
var logged_in_guard_1 = require('./login/logged-in.guard');
var attendance_service_1 = require('../app/content/attendance/attendance.service');
var class_service_1 = require('../app/content/class/class.service');
var class_subject_group_service_1 = require('../app/content/class-subject-group/class-subject-group.service');
var homework_service_1 = require('../app/content/homework/homework.service');
var section_service_1 = require('../app/content/section/section.service');
var student_service_1 = require('../app/content/student/student.service');
var subject_group_service_1 = require('../app/content/subject-group/subject-group.service');
var subject_group_subject_service_1 = require('../app/content/subject-group-subject/subject-group-subject.service');
var subject_teacher_service_1 = require('../app/content/subject-teacher/subject-teacher.service');
var subjects_service_1 = require('../app/content/subjects/subjects.service');
var teacher_service_1 = require('../app/content/teacher/teacher.service');
var timetable_service_1 = require('../app/content/timetable/timetable.service');
var exam_service_1 = require('../app/content/exam/exam.service');
var exam_subject_group_service_1 = require('../app/content/exam-subject-group/exam-subject-group.service');
var exam_subject_service_1 = require('../app/content/exam-subject/exam-subject.service');
exports.myComponents = [
    app_component_1.AppComponent,
    header_component_1.HeaderComponent,
    credentials_component_1.LoginComponent,
    dashboard_component_1.DashboardComponent,
    exam_dashboard_component_1.ExamDashboardComponent,
    attendance_component_1.AttendanceComponent,
    class_component_1.ClassComponent,
    class_edit_component_1.ClassEditComponent,
    class_subject_group_component_1.ClassSubjectGroupComponent,
    class_subject_group_edit_component_1.ClassSubjectGroupEditComponent,
    exam_component_1.ExamComponent,
    exam_edit_component_1.ExamEditComponent,
    exam_subject_component_1.ExamSubjectComponent,
    exam_subject_group_component_1.ExamSubjectGroupComponent,
    homework_component_1.HomeworkComponent,
    section_component_1.SectionComponent,
    section_edit_component_1.SectionEditComponent,
    student_component_1.StudentComponent,
    student_edit_component_1.StudentEditComponent,
    subject_group_component_1.SubjectGroupComponent,
    subject_group_edit_component_1.SubjectGroupEditComponent,
    subject_group_subject_component_1.SubjectGroupSubjectComponent,
    subject_group_subject_edit_component_1.SubjectGroupSubjectEditComponent,
    subject_teacher_component_1.SubjectTeacherComponent,
    subject_teacher_edit_component_1.SubjectTeacherEditComponent,
    subjects_component_1.SubjectsComponent,
    subjects_edit_component_1.SubjectsEditComponent,
    teacher_component_1.TeacherComponent,
    teacher_edit_component_1.TeacherEditComponent,
    timetable_component_1.TimetableComponent
];
exports.myServices = [
    core_1.CookieService,
    credentials_service_1.LoginService,
    logged_in_guard_1.LoggedInGuard,
    attendance_service_1.AttendanceService,
    class_service_1.ClassService,
    class_subject_group_service_1.ClassSubjectGroupService,
    homework_service_1.HomeworkService,
    section_service_1.SectionService,
    student_service_1.StudentService,
    subject_group_service_1.SubjectGroupService,
    subject_group_subject_service_1.SubjectGroupSubjectService,
    subject_teacher_service_1.SubjectTeacherService,
    subjects_service_1.SubjectsService,
    teacher_service_1.TeacherService,
    timetable_service_1.TimetableService,
    exam_service_1.ExamService,
    exam_subject_group_service_1.ExamSubjectGroupService,
    exam_subject_service_1.ExamSubjectService
];
//# sourceMappingURL=external.module.js.map