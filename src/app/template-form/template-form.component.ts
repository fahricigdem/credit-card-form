import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  eMail:string="";
  onSubmit(){
    console.log("submitted");
    this.eMail="";
  }
}
