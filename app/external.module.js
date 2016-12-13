"use strict";
var app_component_1 = require('./app.component');
var header_component_1 = require('../app/shared/header/header.component');
var credentials_component_1 = require('./login/credentials.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var exam_dashboard_component_1 = require('./exam-dashboard/exam-dashboard.component');
var cce_dashboard_component_1 = require('./cce-dashboard/cce-dashboard.component');
var attendance_component_1 = require('../app/content/attendance/attendance.component');
var class_component_1 = require('../app/content/class/class.component');
var class_edit_component_1 = require('../app/content/class/class-edit.component');
var class_subject_group_component_1 = require('../app/content/class-subject-group/class-subject-group.component');
var class_subject_group_edit_component_1 = require('../app/content/class-subject-group/class-subject-group-edit.component');
var exam_component_1 = require('../app/content/exam/exam.component');
var exam_edit_component_1 = require('../app/content/exam/exam-edit.component');
var exam_subject_component_1 = require('../app/content/exam-subject/exam-subject.component');
var exam_subject_group_component_1 = require('../app/content/exam-subject-group/exam-subject-group.component');
var activity_component_1 = require('../app/content/activity/activity.component');
var subactivity_component_1 = require('../app/content/subactivity/subactivity.component');
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
var subject_student_component_1 = require('../app/content/subject-student/subject-student.component');
var subjects_component_1 = require('../app/content/subjects/subjects.component');
var subjects_edit_component_1 = require('../app/content/subjects/subjects-edit.component');
var teacher_component_1 = require('../app/content/teacher/teacher.component');
var teacher_edit_component_1 = require('../app/content/teacher/teacher-edit.component');
var timetable_component_1 = require('../app/content/timetable/timetable.component');
var mark_component_1 = require('../app/content/mark/mark.component');
var activity_score_component_1 = require('../app/content/activity-score/activity-score.component');
var subactivity_score_component_1 = require('../app/content/subactivity-score/subactivity-score.component');
var portion_component_1 = require('../app/content/portion/portion.component');
var portion_edit_component_1 = require('../app/content/portion/portion-edit.component');
var sliptest_component_1 = require('../app/content/sliptest/sliptest.component');
var sliptest_edit_component_1 = require('../app/content/sliptest/sliptest-edit.component');
var sliptest_score_component_1 = require('../app/content/sliptest-score/sliptest-score.component');
var grade_class_wise_component_1 = require('../app/content/grade-class-wise/grade-class-wise.component');
var cce_student_profile_component_1 = require('../app/content/cce-student-profile/cce-student-profile.component');
var cce_coscholastic_component_1 = require('../app/content/cce-coscholastic/cce-coscholastic.component');
var cce_coscholastic_edit_component_1 = require('../app/content/cce-coscholastic/cce-coscholastic-edit.component');
var cce_coscholastic_class_component_1 = require('../app/content/cce-coscholastic-class/cce-coscholastic-class.component');
var cce_coscholastic_class_edit_component_1 = require('../app/content/cce-coscholastic-class/cce-coscholastic-class-edit.component');
var cce_section_heading_component_1 = require('../app/content/cce-section-heading/cce-section-heading.component');
var cce_section_heading_edit_component_1 = require('../app/content/cce-section-heading/cce-section-heading-edit.component');
var cce_topic_primary_component_1 = require('../app/content/cce-topic-primary/cce-topic-primary.component');
var cce_topic_primary_edit_component_1 = require('../app/content/cce-topic-primary/cce-topic-primary-edit.component');
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
var activity_service_1 = require('../app/content/activity/activity.service');
var subactivity_service_1 = require('../app/content/subactivity/subactivity.service');
var subject_student_service_1 = require('../app/content/subject-student/subject-student.service');
var mark_service_1 = require('../app/content/mark/mark.service');
var activity_score_service_1 = require('../app/content/activity-score/activity-score.service');
var subactivity_score_service_1 = require('../app/content/subactivity-score/subactivity-score.service');
var portion_service_1 = require('../app/content/portion/portion.service');
var sliptest_service_1 = require('../app/content/sliptest/sliptest.service');
var sliptest_score_service_1 = require('../app/content/sliptest-score/sliptest-score.service');
var grade_class_wise_service_1 = require('../app/content/grade-class-wise/grade-class-wise.service');
var cce_student_profile_service_1 = require('../app/content/cce-student-profile/cce-student-profile.service');
var cce_coscholastic_service_1 = require('../app/content/cce-coscholastic/cce-coscholastic.service');
var cce_coscholastic_class_service_1 = require('../app/content/cce-coscholastic-class/cce-coscholastic-class.service');
var cce_section_heading_service_1 = require('../app/content/cce-section-heading/cce-section-heading.service');
var cce_topic_primary_service_1 = require('../app/content/cce-topic-primary/cce-topic-primary.service');
exports.myComponents = [
    app_component_1.AppComponent,
    header_component_1.HeaderComponent,
    credentials_component_1.LoginComponent,
    dashboard_component_1.DashboardComponent,
    exam_dashboard_component_1.ExamDashboardComponent,
    cce_dashboard_component_1.CceDashboardComponent,
    attendance_component_1.AttendanceComponent,
    class_component_1.ClassComponent,
    class_edit_component_1.ClassEditComponent,
    class_subject_group_component_1.ClassSubjectGroupComponent,
    class_subject_group_edit_component_1.ClassSubjectGroupEditComponent,
    exam_component_1.ExamComponent,
    exam_edit_component_1.ExamEditComponent,
    exam_subject_component_1.ExamSubjectComponent,
    exam_subject_group_component_1.ExamSubjectGroupComponent,
    activity_component_1.ActivityComponent,
    subactivity_component_1.SubActivityComponent,
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
    subject_student_component_1.SubjectStudentComponent,
    subjects_component_1.SubjectsComponent,
    subjects_edit_component_1.SubjectsEditComponent,
    teacher_component_1.TeacherComponent,
    teacher_edit_component_1.TeacherEditComponent,
    timetable_component_1.TimetableComponent,
    mark_component_1.MarkComponent,
    activity_score_component_1.ActivityScoreComponent,
    subactivity_score_component_1.SubActivityScoreComponent,
    portion_component_1.PortionComponent,
    portion_edit_component_1.PortionEditComponent,
    sliptest_component_1.SliptestComponent,
    sliptest_edit_component_1.SliptestEditComponent,
    sliptest_score_component_1.SliptestScoreComponent,
    grade_class_wise_component_1.GradeClassWiseComponent,
    cce_student_profile_component_1.CceStudentProfileComponent,
    cce_coscholastic_component_1.CceCoschComponent,
    cce_coscholastic_edit_component_1.CceCoschEditComponent,
    cce_coscholastic_class_component_1.CceCoschClassComponent,
    cce_coscholastic_class_edit_component_1.CceCoschClassEditComponent,
    cce_section_heading_component_1.SectionHeadingComponent,
    cce_section_heading_edit_component_1.SectionHeadingEditComponent,
    cce_topic_primary_component_1.TopicPrimaryComponent,
    cce_topic_primary_edit_component_1.TopicPrimaryEditComponent
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
    exam_subject_service_1.ExamSubjectService,
    activity_service_1.ActivityService,
    subactivity_service_1.SubActivityService,
    subject_student_service_1.SubjectStudentService,
    mark_service_1.MarkService,
    activity_score_service_1.ActivityScoreService,
    subactivity_score_service_1.SubActivityScoreService,
    portion_service_1.PortionService,
    sliptest_service_1.SliptestService,
    sliptest_score_service_1.SliptestScoreService,
    grade_class_wise_service_1.GradeClassWiseService,
    cce_student_profile_service_1.CceStudentProfileService,
    cce_coscholastic_service_1.CceCoscholasticService,
    cce_coscholastic_class_service_1.CceCoschClassService,
    cce_section_heading_service_1.SectionHeadingService,
    cce_topic_primary_service_1.TopicPrimaryService
];
//# sourceMappingURL=external.module.js.map