import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormInput } from '../../components/form-input/form-input';
import { SubmitButton } from '../../components/submit-button/submit-button';
import { UploadInput } from '../../components/upload-input/upload-input';
import { FormData } from '../../shared/form-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-page',
  imports: [FormInput, SubmitButton, UploadInput, FormsModule],
  templateUrl: './form-page.html',
  styleUrl: './form-page.css'
})
export class FormPage {
    formInputs = [
    {id: 1, name: "fullName" ,label: "Full Name", type: "text", placeholder: ""},
    {id: 2, name: "emailAddress",label: "Email Address", type: "email", placeholder: "example@email.com"},
    {id: 3, name: "githubUsername", label: "GitHub Username", type: "text", placeholder: "@yourusername"}
  ];

  formDataModel: any = {};

  constructor(
    private formDataService: FormData,
    private router: Router 
  ){}

  @ViewChild('submitForm') submitForm!: NgForm;

  verifyForm(){
    if(this.submitForm.invalid){
      this.submitForm.form.markAllAsTouched();
      return;
    }
    this.formDataService.setFormatData(this.formDataModel);
    this.router.navigate(['/ticket']);
  }
}
