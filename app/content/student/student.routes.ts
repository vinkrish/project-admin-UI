import { RouterConfig }         from '@angular/router';
import { StudentComponent }     from './student.component';
import { StudentEditComponent } from './student-edit.component';
import { LoggedInGuard }        from '../../login/logged-in.guard';

export const studentRoutes: RouterConfig = [
   {
    path: 'student',
    component: StudentComponent,
    canActivate: [LoggedInGuard]
  },
   {
    path: 'student/edit/:id',
    component: StudentEditComponent,
    canActivate: [LoggedInGuard]
  }
];
