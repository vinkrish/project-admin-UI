import { provideRouter, RouterConfig }  from '@angular/router';
import { LoggedInGuard }                from '../login/logged-in.guard';
import { examRoutes }                	from '../content/exam/exam.routes';

export const examDashboardRoutes: RouterConfig = [
  ...examRoutes
];