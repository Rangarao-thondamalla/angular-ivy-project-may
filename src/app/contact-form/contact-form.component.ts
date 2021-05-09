import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  PreviewData(data){
    let finalData= JSON.stringify(data.value);
    console.log(finalData)
  }
}