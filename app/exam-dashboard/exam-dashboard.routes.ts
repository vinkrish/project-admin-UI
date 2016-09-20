import { Routes }                       from '@angular/router';
import { LoggedInGuard }                from '../login/logged-in.guard';
import { examRoutes }                	  from '../content/exam/exam.routes';
import { ExamSubjectComponent }    		  from '../content/exam-subject/exam-subject.component';
import { ExamSubjectGroupComponent }    from '../content/exam-subject-group/exam-subject-group.component';
import { MarkComponent }                from '../content/mark/mark.component';
import { ActivityComponent }            from '../content/activity/activity.component';
import { ActivityScoreComponent }       from '../content/activity-score/activity-score.component';
import { SubActivityComponent }         from '../content/subactivity/subactivity.component';
import { SubActivityScoreComponent }    from '../content/subactivity-score/subactivity-score.component';

export const examDashboardRoutes: Routes = [
  ...examRoutes,
  {
    path: 'exam-subject-group',
    component: ExamSubjectGroupComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'exam-subject',
    component: ExamSubjectComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'mark',
    component: MarkComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'activity',
    component: ActivityComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'activity-score',
    component: ActivityScoreComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'subactivity',
    component: SubActivityComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'subactivity-score',
    component: SubActivityScoreComponent,
    canActivate: [LoggedInGuard]
  }
];