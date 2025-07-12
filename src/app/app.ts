import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormInput } from './components/form-input/form-input'
import { SubmitButton } from './components/submit-button/submit-button';
import { UploadInput } from './components/upload-input/upload-input';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormInput, SubmitButton, UploadInput],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'conference-ticket-generator';
  formInputs = [
    {id: 1, name: "Full Name", type: "text", placeholder: ""},
    {id: 2, name: "Email Address", type: "email", placeholder: "example@email.com"},
    {id: 3, name: "GitHub Username", type: "text", placeholder: "@yourusername"}
  ]
}
