import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';

export const routes: Routes = [
    { path: 'customer', component: CustomerComponent },
    { path: 'customers', loadChildren: './customers/customers.module#CustomersModule'  },
    { path: 'orders', component: OrdersComponent}
];

