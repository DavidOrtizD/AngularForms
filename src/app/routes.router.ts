import { RouterModule, Routes } from '@angular/router';
import {TemplateComponent} from './components/template/template.component';


const app_routes: Routes = [
  { path: 'template', component: TemplateComponent },
  { path: 'data', loadChildren : './modules/data/data.module#DataModule' },
  { path: '**', pathMatch: 'full', redirectTo: 'template' }
];

export const app_routing = RouterModule.forRoot(app_routes);
