import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { TaskTypeComponent } from './task-type/task-type.component';

const routes: Routes = [
  {path:"",component:TasksPageComponent},
  {path:"UpdateTasks/:id",component:UpdateTaskComponent},
  {path:"taskType",component:TaskTypeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesModuleRoutingModule { }
