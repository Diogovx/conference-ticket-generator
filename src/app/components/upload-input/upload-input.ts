import { Component, ElementRef, HostListener, Optional, Self, ViewChild} from '@angular/core';
import { ControlValueAccessor,NgControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './upload-input.html',
  styleUrl: './upload-input.css',
})
export class UploadInput implements ControlValueAccessor{
  @ViewChild('fileInput') fileInput!: ElementRef;

  value: string | null = null;
  isDragging = false;
  disabled = false;

  constructor(@Optional() @Self() public ngControl: NgControl){
    if(this.ngControl){
      this.ngControl.valueAccessor = this;
    }
  }

  onChange: (value: string | null) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string | null): void {
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

  onContainerClick(): void {
  if (this.fileInput && !this.disabled) {
    this.fileInput.nativeElement.click();
  }
}

  onFileSelected(event: Event): void{
    const element = event.target as HTMLInputElement;
    const file = element.files?.[0];

    if(file){
      this.processFile(file);
    }
  }

  removeImage(): void{
    this.value = null;
    this.onChange(this.value);
    this.onTouched();
    this.fileInput.nativeElement.value = '';
  }

  private processFile(file: File): void{
    if(!file.type.startsWith('image/')){
      alert('Por favor, selecione um arquivo de imagem.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.value = reader.result as string;
      this.onChange(this.value);
      this.onTouched();
    };
    reader.readAsDataURL(file);
  }
  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (!this.disabled) {
      this.isDragging = true;
    }
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
    if (!this.disabled) {
      const file = event.dataTransfer?.files[0];
      if (file) {
        this.processFile(file);
      }
    }
  }
}
