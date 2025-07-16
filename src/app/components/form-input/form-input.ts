import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-input.html',
  styleUrl: './form-input.css'
  // O ARRAY 'providers' FOI REMOVIDO DAQUI
})
export class FormInput implements ControlValueAccessor {
  @Input() id: number = 0;
  @Input() name: string = "";
  @Input() label: string = "";
  @Input() type: string = "";
  @Input() placeholder: string = "";
  
  value: any;
  onChange: any = () => {};

    onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.onChange(value);
  }

  onTouched: any = () => {};
  disabled = false;

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  // O resto do seu código está perfeito.
  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    
    this.onChange = fn;
    
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}