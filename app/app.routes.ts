import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ClassComponent } from './class/class.component';
import { ClassSubjectGroupComponent } from './class-subject-group/class-subject-group.component';
import { HomeworkComponent } from './homework/homework.component';
import { SectionComponent } from './section/section.component';
import { StudentComponent } from './student/student.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectGroupComponent } from './subject-group/subject-group.component';
import { SubjectGroupSubjectComponent } from './subject-group-subject/subject-group-subject.component';
import { SubjectTeacherComponent } from './subject-teacher/subject-teacher.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TimetableComponent } from './timetable/timetable.component';

import { ClassEditComponent } from './class/class-edit.component';
import { TeacherEditComponent } from './teacher/teacher-edit.component';
import { SubjectsEditComponent } from './subjects/subjects-edit.component';
import { SubjectGroupEditComponent } from './subject-group/subject-group-edit.component';
import { SectionEditComponent } from './section/section-edit.component';
import { StudentEditComponent } from './student/student-edit.component';
import { SubjectGroupSubjectEditComponent } from './subject-group-subject/subject-group-subject-edit.component'

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'attendance',
    component: AttendanceComponent
  },
  {
    path: 'class',
    component: ClassComponent
  },
  {
    path: 'class-subject-group',
    component: ClassSubjectGroupComponent
  },
  {
    path: 'homework',
    component: HomeworkComponent
  },
  {
    path: 'section',
    component: SectionComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'subjects',
    component: SubjectsComponent
  },
  {
    path: 'subject-group',
    component: SubjectGroupComponent
  },
  {
    path: 'subject-group-subject',
    component: SubjectGroupSubjectComponent
  },
  {
    path: 'subject-teacher',
    component: SubjectTeacherComponent
  },
  {
    path: 'teacher',
    component: TeacherComponent
  },
  {
    path: 'timetable',
    component: TimetableComponent
  },
  {
    path: 'class/edit/:id',
    component: ClassEditComponent
  },
  {
    path: 'section/edit/:id',
    component: SectionEditComponent
  },
  {
    path: 'teacher/edit/:id',
    component: TeacherEditComponent
  },
  {
    path: 'subject/edit/:id',
    component: SubjectsEditComponent
  },
  {
    path: 'subject-group/edit/:id',
    component: SubjectGroupEditComponent
  },
  {
    path: 'student/edit/:id',
    component: StudentEditComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];