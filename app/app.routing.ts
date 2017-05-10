import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './components/weather';

export const routes: Routes = [
  { path: '', component: WeatherComponent }
];

export const routing = RouterModule.forRoot(routes);
