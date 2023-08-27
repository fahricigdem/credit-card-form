import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrls: ['./cardform.component.css']
})

export class CardformComponent implements OnInit{

  cardForm = new FormGroup(
    {
      name:new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      cardNumber:new FormControl(null, [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
      ]),
      lastDate:new DateFormControl(null, [
        Validators.required,
        // Validators.minLength(4), 
        // Validators.maxLength(4),
        Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
      ]),
      securityNumber:new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3),
      ])

    }
  )

  ngOnInit(){
    console.log(this.cardForm);
  }

  onSubmit(){
    console.log("submitted!\\n");
    console.table(this.cardForm.value);
  }

  get name() { return this.cardForm.get('name'); }
  get cardNumber() { return this.cardForm.get('cardNumber'); }
  get lastDate() { return this.cardForm.get('lastDate'); }
  get securityNumber() { return this.cardForm.get('securityNumber'); }

}
