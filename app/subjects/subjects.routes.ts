import { RouterConfig }         from '@angular/router';
import { SubjectsComponent } from './subjects.component';
import { SubjectsEditComponent } from './subjects-edit.component';

export const subjectsRoutes: RouterConfig = [
  {
    path: 'subjects',
    component: SubjectsComponent
  },
  {
    path: 'subject/edit/:id',
    component: SubjectsEditComponent
  }
];
