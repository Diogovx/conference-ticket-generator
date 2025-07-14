import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormData } from '../../shared/form-data';

@Component({
  selector: 'app-ticket-page',
  imports: [],
  templateUrl: './ticket-page.html',
  styleUrl: './ticket-page.css'
})
export class TicketPage implements OnInit{
  ticketsData: any;

  constructor(
    private formDataService: FormData,
    private router: Router
  ){}
  
  ngOnInit(): void {
      this.ticketsData = this.formDataService.getFormData();

      /*if(!this.ticketsData){
        this.router.navigate(['/form'])
      }*/
  }
}
