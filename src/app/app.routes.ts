import { Routes } from '@angular/router';
import { Impressum } from './impressum/impressum';
import { Home } from './home/home';
import { Zahlung } from './zahlung/zahlung';
import { SaleChecklist } from './sale-checklist/sale-checklist';

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
  {
    path: 'checklist',
    component: SaleChecklist,
  },
];
