import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { DemoMaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputOverviewExampleComponent } from './input-overview-example/input-overview-example.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule ,
    ReactiveFormsModule , 
    MatNativeDateModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
     ],

  entryComponents: [InputOverviewExampleComponent],
  declarations: [ AppComponent, HelloComponent, InputOverviewExampleComponent ],
  bootstrap:    [ AppComponent ],
   providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class AppModule { }
