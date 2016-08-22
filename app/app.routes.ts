import { provideRouter, RouterConfig }  from '@angular/router';
import { LoggedInGuard }                from './login/logged-in.guard';
import { LoginComponent }               from './login/credentials.component';
import { DashboardComponent }           from './dashboard/dashboard.component';
import { ExamDashboardComponent }       from './exam-dashboard/exam-dashboard.component';
import { dashboardRoutes }              from './dashboard/dashboard.routes';
import { examDashboardRoutes }          from './exam-dashboard/exam-dashboard.routes';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'exam-dashboard',
    component: ExamDashboardComponent,
    canActivate: [LoggedInGuard]
  },
  ...dashboardRoutes,
  ...examDashboardRoutes
];

export const appRouterProviders = [
  provideRouter(routes)
];