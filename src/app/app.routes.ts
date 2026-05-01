import { Routes } from '@angular/router';
import { Impressum } from './impressum/impressum';
import { Home } from './home/home';
import { Zahlung } from './zahlung/zahlung';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'impressum',
    component: Impressum,
  },
  {
    path: 'zahlung',
    component: Zahlung,
  },
];
