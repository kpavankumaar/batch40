import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { Data } from './core/service';
import { CustomersComponent } from './customers/customers.component';
import { routes } from './routes';
import { CustomerComponent } from './customer/customer.component';
import { DataService } from './core/data.service';

@NgModule({
  declarations: [
    AppComponent, OrdersComponent, CustomersComponent, CustomerComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [Data, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
