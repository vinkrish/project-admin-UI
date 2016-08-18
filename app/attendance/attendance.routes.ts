import { RouterConfig }         from '@angular/router';
import { AttendanceComponent }	from './attendance.component';
import { LoggedInGuard }        from '../login/logged-in.guard';

export const attendanceRoutes: RouterConfig = [
  {
    path: 'attendance',
    component: AttendanceComponent,
    canActivate: [LoggedInGuard]
  }
];