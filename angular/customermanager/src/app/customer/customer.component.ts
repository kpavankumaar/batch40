import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../core/data.service';
@Component({
    selector: 'app-customer',
    templateUrl: 'customer.component.html'
})
export class CustomerComponent implements OnInit {
    details;
    customerDetails;
    constructor(public route: ActivatedRoute, public dataService: DataService) {
        console.log(route);
        // this.details = route.snapshot.paramMap.get('firstname');
        // console.log(`**************  ${this.details}`);
    }
    ngOnInit() {
        this.dataService.currentMessage.subscribe((message) => {
            this.customerDetails = message;
        });
    }

}



