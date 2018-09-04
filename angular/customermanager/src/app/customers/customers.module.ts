import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { RouterModule } from '@angular/router';
import { customersroutes } from './customersroutes';
import { CustomersListViewComponent } from './customers.listview.component';
import { DataService } from '../core/data.service';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(customersroutes)],
    declarations: [CustomersComponent, CustomersListViewComponent],
    providers: [DataService]
})
export class CustomersModule {
}
