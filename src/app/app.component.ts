import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  directives: [...ROUTER_DIRECTIVES],
  template: require('./app.component.html'),
  styles: [require('!raw!less!./app.component.less')]
})
export class AppComponent { }
