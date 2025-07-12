import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadInput } from './upload-input';

describe('UploadInput', () => {
  let component: UploadInput;
  let fixture: ComponentFixture<UploadInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
