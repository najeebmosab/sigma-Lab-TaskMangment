import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesModuleRoutingModule } from './pages-module-routing.module';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TasksPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesModuleRoutingModule
  ]
})
export class PagesModuleModule { }
