import { provideRouter, RouterConfig }  from '@angular/router';
import { LoggedInGuard }                from '../login/logged-in.guard';
import { studentRoutes }                from '../content/student/student.routes';
import { subjectGroupRoutes }           from '../content/subject-group/subject-group.routes'
import { subjectGroupSubjectRoutes }    from '../content/subject-group-subject/subject-group-subject.routes'

export const examDashboardRoutes: RouterConfig = [
  ...studentRoutes,
  ...subjectGroupRoutes,
  ...subjectGroupSubjectRoutes
];