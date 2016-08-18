import { RouterConfig }         from '@angular/router';
import { HomeworkComponent } 	from './homework.component';
import { LoggedInGuard }        from '../login/logged-in.guard';

export const homeworkRoutes: RouterConfig = [
  {
    path: 'homework',
    component: HomeworkComponent,
    canActivate: [LoggedInGuard]
  }
];
