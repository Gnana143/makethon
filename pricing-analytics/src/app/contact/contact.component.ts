import { Component, OnDestroy, DoCheck } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { observable } from "rxjs";

@Component({
  selector: 'app-contact',
  template: `<h4>Hello there</h4>`,
})
export class ContactComponent implements OnDestroy, DoCheck {
  //CD. 
  // Asynchronous operation completion
  // DB,File,Events, Timers
  cnt: number = 0;
  interval: any;

  constructor(private http: HttpClient) {
    setInterval(() => ++this.cnt, 1000);
  }

  ngDoCheck() {
    console.log("Value changed");
  }


  reset() {
    this.cnt = 0;
  }

  call() {
    this.interval = setInterval(() => ++this.cnt, 1000);
    this.http.get('api/products').
      subscribe(res => this.cnt = 100);
  }

  stop() {
    console.log("Stopped");
    clearInterval(this.interval);
  }

  //clean up
  ngOnDestroy() {
    //observable.unsubscribe();
    clearInterval(this.interval);
    console.log("Destroyed");
  }

}
//Event loop