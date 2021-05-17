import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { DemoMaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactformService } from './contact-form/contact.service';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
    { path: 'contact-form',component: ContactFormComponent},  
    { path: 'users', component: UsersComponent}
];
@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule ,
    ReactiveFormsModule , 
    MatNativeDateModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
     RouterModule.forRoot(appRoutes),
     ],
  entryComponents: [],
  declarations: [ AppComponent, HelloComponent, ContactFormComponent, UsersComponent,  ],
  bootstrap:    [ AppComponent ],
   providers: [ ContactformService ],
   exports: [RouterModule],
})

export class AppModule { }
