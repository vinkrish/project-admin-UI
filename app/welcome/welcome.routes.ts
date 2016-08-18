import { provideRouter, RouterConfig }  from '@angular/router';
import { dashboardRoutes }              from '../dashboard/dashboard.routes';


export const welcomeRoutes: RouterConfig = [
  ...dashboardRoutes
];