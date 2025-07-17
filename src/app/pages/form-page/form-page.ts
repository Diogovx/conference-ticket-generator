import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormInput } from '../../components/form-input/form-input';
import { SubmitButton } from '../../components/submit-button/submit-button';
import { UploadInput } from '../../components/upload-input/upload-input';
import { FormData } from '../../shared/form-data';
import { Router } from '@angular/router';
import { LocationService } from '../../shared/location';

@Component({
  selector: 'app-form-page',
  imports: [FormInput, SubmitButton, UploadInput, FormsModule],
  templateUrl: './form-page.html',
  styleUrl: './form-page.css'
})
export class FormPage {
  private readonly _formDataService = inject(FormData);
  private readonly _router = inject(Router);
  readonly _locationService = inject(LocationService);


    formInputs = [
    {id: 1, name: "fullName" ,label: "Full Name", type: "text", placeholder: ""},
    {id: 2, name: "emailAddress",label: "Email Address", type: "email", placeholder: "example@email.com"},
    {id: 3, name: "githubUsername", label: "GitHub Username", type: "text", placeholder: "@yourusername"}
  ];

  formDataModel: any = {
    fullName: '',
    emailAddress: '',
    githubUsername: '',
    picture: null,
    submissionDate: new Date()
  };


  @ViewChild('submitForm') submitForm!: NgForm;

  async verifyForm(){
    if(this.submitForm.invalid){
      this.submitForm.form.markAllAsTouched();
      return;
    }

    const userLocation = await this._locationService.getLocation()

    const ticketData = {
      ...this.formDataModel,
      location: userLocation
    }

    this._formDataService.setFormatData(ticketData);
    this._router.navigate(['/ticket']);
  }
}
