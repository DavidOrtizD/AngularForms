import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { NavbarComponent } from './components/navbar/navbar.component';

/*** Import the router ***/
import {app_routing} from './routes.router';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
