import { RouterConfig }         from '@angular/router';
import { TeacherComponent } from './teacher.component';
import { TeacherEditComponent } from './teacher-edit.component';

export const teacherRoutes: RouterConfig = [
  {
    path: 'teacher',
    component: TeacherComponent
  },
  {
    path: 'teacher/edit/:id',
    component: TeacherEditComponent
  }
];
