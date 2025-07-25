import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPage } from './ticket-page';

describe('TicketPage', () => {
  let component: TicketPage;
  let fixture: ComponentFixture<TicketPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
