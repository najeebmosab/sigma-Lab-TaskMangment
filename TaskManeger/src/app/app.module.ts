import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyModuleModule } from './Layout/Landing/landing-module.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagesModuleModule } from './Pages/pages-module.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    MyModuleModule,
    PagesModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
