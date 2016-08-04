import { RouterConfig }         from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentEditComponent } from './student-edit.component';

export const studentRoutes: RouterConfig = [
   {
    path: 'student',
    component: StudentComponent
  },
   {
    path: 'student/edit/:id',
    component: StudentEditComponent
  }
];
