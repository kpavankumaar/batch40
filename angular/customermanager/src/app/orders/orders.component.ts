import { Component, Input, OnDestroy, OnChanges, Output, OnInit, AfterContentChecked } from '@angular/core';
import { Data } from '.././core/service';
@Component({
    selector: 'app-orders',
    templateUrl: 'orders.component.html'
})

export class OrdersComponent  implements OnInit, OnDestroy, OnChanges, AfterContentChecked {
    customers;
    totalItemCost: number;
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
        this.customers.map(function(obj) {
            
            obj.map(function(orders) {
                let collectionOfItemCost: any[] = [] ;
                collectionOfItemCost.push(orders.forEach(orderObj => {
                   return orderObj.itemCost;
                }));
                this.totalItemCost = collectionOfItemCost.reduce(function(acc, currentVal) {
                    return acc = acc + currentVal;
                });
            });
        });
    }
    ngOnDestroy() {
        console.log('ngondestroy');
    }
}
