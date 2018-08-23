import { sendData } from './data';

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
