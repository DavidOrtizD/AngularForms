import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*** importing the router ***/
import { app_routing } from './dataroutes.router'

/*** Import Components ***/
import { DataComponent } from '../../components/data/data.component';

@NgModule({
  declarations: [
    DataComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    app_routing
  ]
})
export class DataModule { }
