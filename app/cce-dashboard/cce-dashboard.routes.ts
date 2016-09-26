import { Routes }                       from '@angular/router';
import { LoggedInGuard }                from '../login/logged-in.guard';
import { CceStudentProfileComponent } 	from '../content/cce-student-profile/cce-student-profile.component';

export const cceDashboardRoutes: Routes = [
  	{
        path: 'cce-student-profile',
        component: CceStudentProfileComponent,
        canActivate: [LoggedInGuard]
    }
];