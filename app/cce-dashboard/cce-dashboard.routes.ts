import { Routes }                       from '@angular/router';
import { LoggedInGuard }                from '../login/logged-in.guard';
import { CceStudentProfileComponent } 	from '../content/cce-student-profile/cce-student-profile.component';
import { cceCoscholasticRoutes }		from '../content/cce-coscholastic/cce-coscholastic.routes';
import { cceCoschClassRoutes }			from '../content/cce-coscholastic-class/cce-coscholastic-class.routes';

export const cceDashboardRoutes: Routes = [
  	{
        path: 'cce-student-profile',
        component: CceStudentProfileComponent,
        canActivate: [LoggedInGuard]
    },
    ...cceCoscholasticRoutes,
    ...cceCoschClassRoutes
];