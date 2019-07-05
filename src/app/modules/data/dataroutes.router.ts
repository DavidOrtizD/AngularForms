import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from '../../components/data/data.component';

const app_routes: Routes = [
  { path: '',  component: DataComponent }
];

export const app_routing = RouterModule.forChild(app_routes);
