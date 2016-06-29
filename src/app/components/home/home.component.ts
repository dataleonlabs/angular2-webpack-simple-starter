import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-home',
  template: '<h1>My First Angular 2 App</h1>'
})
export class HomeComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
