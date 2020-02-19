
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

const PAGES_ROUTES : Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
     { path: 'dashboard', component: DashboardComponent },
     { path: 'progress', component: ProgressComponent },
     { path: 'graficas1', component: Graficas1Component },
     { path: '', redirectTo: '/pages', pathMatch: 'full' },
    ]
 },
];

export const PAGES_ROUTING = RouterModule.forChild(PAGES_ROUTES);
