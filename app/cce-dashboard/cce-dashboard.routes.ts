import { Routes }                       from '@angular/router';
import { LoggedInGuard }                from '../login/logged-in.guard';
import { CceStudentProfileComponent } 	from '../content/cce-student-profile/cce-student-profile.component';
import { cceCoscholasticRoutes }		from '../content/cce-coscholastic/cce-coscholastic.routes';
import { cceCoschClassRoutes }			from '../content/cce-coscholastic-class/cce-coscholastic-class.routes';
import { sectionHeadingRoutes }			from '../content/cce-section-heading/cce-section-heading.routes';
import { topicPrimaryRoutes }			from '../content/cce-topic-primary/cce-topic-primary.routes';
import { AspectPrimaryComponent } 		from '../content/cce-aspect-primary/cce-aspect-primary.component';

export const cceDashboardRoutes: Routes = [
  	{
        path: 'cce-student-profile',
        component: CceStudentProfileComponent,
        canActivate: [LoggedInGuard]
    },
    ...cceCoscholasticRoutes,
    ...cceCoschClassRoutes,
    ...sectionHeadingRoutes,
    ...topicPrimaryRoutes,
    {
        path: 'cce-aspect-primary',
        component: AspectPrimaryComponent,
        canActivate: [LoggedInGuard]
    },
];