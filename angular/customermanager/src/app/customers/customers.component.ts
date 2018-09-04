import { Component, OnInit } from '@angular/core';
import { Data } from '../core/service';
import { Router } from '@angular/router';
import { DataService } from '../core/data.service';
@Component({
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    styleUrls: [ 'style.css']
})
export class CustomersComponent implements OnInit {
    private customers;
    customersData;
    isValue = false;
    custInfo;
    constructor(public router: Router , public dataService: DataService) {

    }
    maleImage = 'assets/images/male.png';
    femaleImage = 'assets/images/female.png';
    loadCustDetails(e) {
        console.log('test' + this.custInfo);
        const obj_1 = JSON.stringify(e);
        this.dataService.changeMessage(obj_1);
        this.router.navigate(['customer']);

    }
    ngOnInit() {
        console.log('lifecycle hook inside customers component.ts');
        this.customers = new Data();
        this.customersData = this.customers.dataOfCustomers;
    }
}
