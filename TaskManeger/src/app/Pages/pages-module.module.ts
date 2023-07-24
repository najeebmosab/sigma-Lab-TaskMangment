import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesModuleRoutingModule } from './pages-module-routing.module';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { FormsModule } from '@angular/forms';
import { UpdateTaskComponent } from './update-task/update-task.component';


@NgModule({
  declarations: [
    TasksPageComponent,
    UpdateTaskComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesModuleRoutingModule,
   
  ]
})
export class PagesModuleModule { }
