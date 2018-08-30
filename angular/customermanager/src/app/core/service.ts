import { sendData } from './data';
import { Injector } from '@angular/core';

export class Data {
    dataOfCustomers;
    constructor() {
        this.dataOfCustomers = sendData();
    }
    orders() {
        this.dataOfCustomers.map(function(obj) {
            console.log(obj);
        });
    }
}
// const dataInfo1 = new Data();
