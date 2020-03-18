
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const PAGES_ROUTES : Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
     { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
     { path: 'progress', component: ProgressComponent , data: { titulo: 'Progress' } },
     { path: 'graficas1', component: Graficas1Component , data: { titulo: 'Gráficas' } },
     { path: 'promises', component: PromisesComponent , data: { titulo: 'Promesas' } },
     { path: 'rxjs', component: RxjsComponent , data: { titulo: 'RxJs' } },
     { path: 'account-settings', component: AccountSettingsComponent , data: { titulo: 'Ajustes de cuenta' }},
     { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
 },
];

export const PAGES_ROUTING = RouterModule.forChild(PAGES_ROUTES);
