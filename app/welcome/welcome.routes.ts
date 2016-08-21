import { provideRouter, RouterConfig }  from '@angular/router';
import { dashboardRoutes }              from '../dashboard/dashboard.routes';
import { examDashboardRoutes }			from '../exam-dashboard/exam-dashboard.routes';

export const welcomeRoutes: RouterConfig = [
  ...dashboardRoutes,
  ...examDashboardRoutes
];