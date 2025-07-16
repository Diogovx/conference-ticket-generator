import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormData } from '../../shared/form-data';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ticket-page',
  imports: [DatePipe],
  templateUrl: './ticket-page.html',
  styleUrl: './ticket-page.css'
})
export class TicketPage implements OnInit{
  ticketsData: any;
  readonly _formDataService = inject(FormData);
  readonly _router = inject(Router);

  
  ngOnInit(): void {
      this.ticketsData = this._formDataService.getFormData();
      /*if(!this.ticketsData){
        this.router.navigate(['/form'])
      }*/
  }
}
