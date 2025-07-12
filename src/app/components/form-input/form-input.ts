import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  imports: [],
  templateUrl: './form-input.html',
  styleUrl: './form-input.css'
})
export class FormInput{
  @Input() id: number = 0; 
  @Input() name: string = "";
  @Input() type: string = "";
  @Input() placeholder: string = "";
  
  constructor(){ 
  }

}
