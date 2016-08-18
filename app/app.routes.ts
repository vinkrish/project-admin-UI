import { provideRouter, RouterConfig }  from '@angular/router';
import { LoggedInGuard }                from './login/logged-in.guard';
import { LoginComponent }               from './login/credentials.component';
import { WelcomeComponent }           from './welcome/welcome.component';
import { DashboardComponent }           from './dashboard/dashboard.component';
import { welcomeRoutes }                from './welcome/welcome.routes'
import { dashboardRoutes }              from './dashboard/dashboard.routes';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: WelcomeComponent,
    canActivate: [LoggedInGuard],
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [LoggedInGuard]
      },
      ...welcomeRoutes
    ]
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];