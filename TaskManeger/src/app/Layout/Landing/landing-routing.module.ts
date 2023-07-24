import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      {
        path:"tasks",
        loadChildren: () => import('src/app/Pages/pages-module.module').then(pm => pm.PagesModuleModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyModuleRoutingModule {}
