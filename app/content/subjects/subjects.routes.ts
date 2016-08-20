import { RouterConfig }             from '@angular/router';
import { SubjectsComponent }        from './subjects.component';
import { SubjectsEditComponent }    from './subjects-edit.component';
import { LoggedInGuard }            from '../../login/logged-in.guard';

export const subjectsRoutes: RouterConfig = [
  {
    path: 'subjects',
    component: SubjectsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'subject/edit/:id',
    component: SubjectsEditComponent,
    canActivate: [LoggedInGuard]
  }
];
