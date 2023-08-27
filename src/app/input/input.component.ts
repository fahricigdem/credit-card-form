import { Component, OnInit,Input } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() control! : FormControl;
  @Input() label! : string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.control);
  }

  isRequired(){
    return this.control?.errors?.['required'] == true && this.control?.touched;
  }
  isMinLength(){
    return this.control?.errors?.['minlength'] != null && this.control?.touched;
  }
  isMaxLength(){
    return this.control?.errors?.['maxlength'] != null && this.control?.touched;
  }
  isRegex(){
    return this.control?.errors?.['pattern'] != null && this.control?.touched;
  }
setValue(){
  this.control.setValue("ddddd")
}
}
