import { provideRouter, RouterConfig }  from '@angular/router';
import { LoggedInGuard }                from '../login/logged-in.guard';
import { examRoutes }                	from '../content/exam/exam.routes';
import { ExamSubjectGroupComponent }    from '../content/exam-subject-group/exam-subject-group.component';

export const examDashboardRoutes: RouterConfig = [
  ...examRoutes,
  {
    path: 'exam-subject-group',
    component: ExamSubjectGroupComponent,
    canActivate: [LoggedInGuard]
  },
];