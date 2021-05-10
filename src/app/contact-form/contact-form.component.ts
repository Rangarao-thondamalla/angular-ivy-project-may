import { Component, OnInit } from '@angular/core';
import { ContactformService } from './contact.service';
import { User } from './user';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
constructor(private _contactformService: ContactformService){}

userModel = new User ('Ranga Rao', 'Thondamalla', 9676001985, 'trr@gmail.com', 'Ranga@123'); 

onSubmit(){
      this._contactformService.register(this.userModel)
      .subscribe(
        response => console.log('Sucess !' , response),
        error => console.log('Error!' , error)
      );
    }
}