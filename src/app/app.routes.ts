import { Routes } from '@angular/router';
import { MainComponent } from './components/other/main/main.component';
import { PageNotFoundComponent } from './components/other/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
