import { RouterConfig }         from '@angular/router';
import { SubjectGroupComponent } from './subject-group.component';
import { SubjectGroupEditComponent } from './subject-group-edit.component';

export const subjectGroupRoutes: RouterConfig = [
  {
    path: 'subject-group',
    component: SubjectGroupComponent
  },
  {
    path: 'subject-group/edit/:id',
    component: SubjectGroupEditComponent
  }
];
