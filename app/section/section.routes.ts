import { RouterConfig }         from '@angular/router';
import { SectionComponent } from './section.component';
import { SectionEditComponent } from './section-edit.component';

export const sectionRoutes: RouterConfig = [
    {
    path: 'section',
    component: SectionComponent
  },
    {
    path: 'section/edit/:id',
    component: SectionEditComponent
  }
];
