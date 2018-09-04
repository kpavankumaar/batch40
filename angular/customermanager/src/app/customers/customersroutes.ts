import { Routes } from '@angular/router';
import { CustomersListViewComponent } from './customers.listview.component';
import { CustomersComponent } from './customers.component';

export const customersroutes: Routes = [
    {
        path: 'customers',
        component: CustomersComponent,
        children : [
            {
                path: '',
                component: CustomersListViewComponent
            }
        ]
    },
    {
        path: 'customerslistview',
        component: CustomersListViewComponent

    }
];
