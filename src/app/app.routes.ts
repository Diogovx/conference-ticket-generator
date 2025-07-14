import { Routes } from '@angular/router';
import { TicketPage } from './pages/ticket-page/ticket-page';
import { FormPage } from './pages/form-page/form-page';

export const routes: Routes = [
    {path: '', component: FormPage},
    {path: 'form', component: FormPage},
    {path: 'ticket', component: TicketPage},
    {path: '**', redirectTo: '/form'}
];
