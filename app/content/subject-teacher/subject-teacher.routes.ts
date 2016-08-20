import { RouterConfig }         		    from '@angular/router';
import { SubjectTeacherComponent } 		  from './subject-teacher.component';
import { SubjectTeacherEditComponent } 	from './subject-teacher-edit.component';
import { LoggedInGuard }        		    from '../../login/logged-in.guard';

export const subjectTeacherRoutes: RouterConfig = [
  {
    path: 'subject-teacher',
    component: SubjectTeacherComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'subject-teacher/edit/:id',
    component: SubjectTeacherEditComponent,
    canActivate: [LoggedInGuard]
  }
];
