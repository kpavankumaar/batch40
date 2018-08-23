import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit, OnDestroy {
  title = 'ravi';
  srcpath = './favicon.ico';
  content = 'ravi';
  name = 'pavan';
  hideaddress = false;
  color: string;
  colorChange1 = '';
  colorChange(value) {
    console.log(value);
    this.color = value;
  }
  toggleColor() {
    this.color = this.color === 'red' ? 'blue' : 'red';
  }
  
  ngOnInit() {
    console.log('lifecycle hook for ngOninit');
  }
  ngOnDestroy() {
    console.log('lifecycle hook for ngOnDestroy');
  }
  toggleChildComponent() {
    this.hideaddress = !this.hideaddress;
  }
}
