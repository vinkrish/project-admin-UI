import { RouterConfig }         from '@angular/router';
import { SubjectTeacherComponent } from './subject-teacher.component';
import { SubjectTeacherEditComponent } from './subject-teacher-edit.component';

export const subjectTeacherRoutes: RouterConfig = [
  {
    path: 'subject-teacher',
    component: SubjectTeacherComponent
  },
  {
    path: 'subject-teacher/edit/:id',
    component: SubjectTeacherEditComponent
  }
];
