import { RouterConfig }         from '@angular/router';
import { ClassComponent } 		from './class.component';
import { ClassEditComponent } 	from './class-edit.component';

export const clasRoutes: RouterConfig = [
  {
    path: 'class',
    component: ClassComponent
  },  {
    path: 'class/edit/:id',
    component: ClassEditComponent
  }
];