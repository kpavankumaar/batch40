import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomersComponent } from './customers/customers.component';

export const routes: Routes = [
    { path: 'customer', component: CustomerComponent },
    { path: 'customers', component: CustomersComponent }
];

