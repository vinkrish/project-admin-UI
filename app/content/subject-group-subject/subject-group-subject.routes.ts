import { RouterConfig }         				from '@angular/router';
import { SubjectGroupSubjectComponent } 		from './subject-group-subject.component';
import { SubjectGroupSubjectEditComponent }		from './subject-group-subject-edit.component'
import { LoggedInGuard }        				from '../../login/logged-in.guard';

export const subjectGroupSubjectRoutes: RouterConfig = [
   {
    path: 'subject-group-subject',
    component: SubjectGroupSubjectComponent,
    canActivate: [LoggedInGuard]
  }
];
