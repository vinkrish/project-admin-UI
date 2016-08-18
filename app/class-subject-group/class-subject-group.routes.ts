import { RouterConfig }         			from '@angular/router';
import { ClassSubjectGroupComponent } 		from './class-subject-group.component';
import { ClassSubjectGroupEditComponent } 	from './class-subject-group-edit.component'
import { LoggedInGuard }        			from '../login/logged-in.guard';

export const clasSubjectGroupRoutes: RouterConfig = [
   {
    path: 'class-subject-group',
    component: ClassSubjectGroupComponent,
    canActivate: [LoggedInGuard]
  }
];
