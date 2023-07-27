import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';
import { TaskTypeComponent } from 'src/app/Pages/task-type/task-type.component';

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      {
        path: 'tasks',
        loadChildren: () =>
          import('src/app/Pages/pages-module.module').then(
            (pm) => pm.PagesModuleModule
          ),
      },
      {
        path: 'taskType',
        component: TaskTypeComponent,
      },
      {
        path: '**',
        loadChildren: () =>
      import('../Error/error-page.module').then(
        (epm) => epm.ErrorPageModule
      ),
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyModuleRoutingModule {}
