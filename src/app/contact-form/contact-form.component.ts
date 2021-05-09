import { Component, OnInit } from '@angular/core';
import { ContactformService } from './contact.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
constructor(private _contactformService: ContactformService){}

  PreviewData(data){

    let finalData = JSON.stringify(data.value);
  
      this._contactformService.register(finalData)
      .subscribe(
        response => console.log('Sucess !' , response),
        error => console.log('Error!' , error)
      );
  }
}