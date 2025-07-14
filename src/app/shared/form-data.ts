import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormData {
  private formData: any;

  constructor() {}

  setFormatData(data: any): void{
    console.log('Dados guardados no serviço: ', data);
    this.formData = data;
  }

  getFormData(): any{
    console.log('Dados recuperados do serviço.');
    return this.formData;
  }
}
