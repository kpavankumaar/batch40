import { Component, Input, OnDestroy, OnChanges, Output, OnInit, AfterContentChecked } from '@angular/core';
import { Data } from '.././core/service';
@Component({
    selector: 'app-orders',
    templateUrl: 'orders.component.html'
})

export class OrdersComponent  implements OnInit, OnDestroy, OnChanges, AfterContentChecked {
    customers;
    customersObj;
    @Input() datashare;
    
    constructor(private dataInfo: Data) {
        console.log(dataInfo.dataOfCustomers);
    }
    ngOnInit() {
        this.customers = this.dataInfo.dataOfCustomers;
        console.log(this.customers);
    }

    ngOnChanges(changes) {
        for (const key in changes) {
            if (changes.hasOwnProperty(key)) {
                const element = changes[key];
                const currentVal = JSON.stringify(changes[key].currentValue);
                const prevVal = JSON.stringify(changes[key].previousValue);
                console.log('currentVal ' + currentVal  );
                console.log('previousVal ' + prevVal);
            }
        }
    }
    ngAfterContentChecked() {
        console.log(this.customers);


        this.customersObj = this.customers.map(function(obj) {
            console.log(obj.orders);
            let itemCostArray = [];
            obj.orders.map(function(product) {
                itemCostArray.push(function() {
                    for (const key1 in product) {
                    if (product.hasOwnProperty(key1)) {

                        if (key1 === 'itemCost') {
                            const element = product[key1];
                            return element;
                        }
                    }
                }}());
            });
            const reducedItemCost = itemCostArray.reduce(function (acc, currentvalue) {
                return acc = acc + currentvalue;
            });
            // CREATING a new totalItemcost property into the object
            obj.totalItemCost = reducedItemCost;
            return obj;
        });
        console.log(this.customersObj);
    }
    ngOnDestroy() {
        console.log('ngondestroy');
    }
}
