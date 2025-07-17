import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormData {
  private formData: any;

  constructor() {}

  setFormatData(data: any): void{
    this.formData = data;
  }

  getFormData(): any{
    return this.formData;
  }
}
