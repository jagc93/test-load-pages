import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'tes-load-page',
        loadChildren: () => import('./dashboard/test-load-page/tes-load-page.module').then(m => m.TestLoadPageModule)
      },
      /* {
        path: 'home',
        loadChildren: () => import('./dashboard/home/home.module').then(m => m.HomeModule)
      }, */
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'tes-load-page'
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
