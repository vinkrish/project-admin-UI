import { provideRouter, RouterConfig }  from '@angular/router';
import { LoggedInGuard } from './login/logged-in.guard';

import { LoginComponent } from './login/credentials.component';
import { clasRoutes }  from './class/clas.routes';
import { clasSubjectGroupRoutes } from './class-subject-group/class-subject-group.routes';
import { homeworkRoutes } from './homework/homework.routes';
import { sectionRoutes }  from './section/section.routes';
import { studentRoutes }  from './student/student.routes';
import { subjectGroupRoutes }  from './subject-group/subject-group.routes'
import { subjectGroupSubjectRoutes }  from './subject-group-subject/subject-group-subject.routes'
import { subjectTeacherRoutes }  from './subject-teacher/subject-teacher.routes';
import { subjectsRoutes }  from './subjects/subjects.routes';
import { teacherRoutes }  from './teacher/teacher.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { TimetableComponent } from './timetable/timetable.component';

const routes: RouterConfig = [
  ...clasRoutes,
  ...clasSubjectGroupRoutes,
  ...homeworkRoutes,
  ...sectionRoutes,
  ...studentRoutes,
  ...subjectGroupRoutes,
  ...subjectGroupSubjectRoutes,
  ...subjectTeacherRoutes,
  ...subjectsRoutes,
  ...teacherRoutes,
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoggedInGuard]
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
    path: 'timetable',
    component: TimetableComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];