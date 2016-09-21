import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <p>Hello Angular Universal App</p>
  <router-outlet></router-outlet>
  `,
  styles: [`:host {
    font-size: 4em;
  }`]
})
export class App {

}

@Component({
  selector: 'home',
  template: 'Home component',
  styles: [`:host {
    color: blue;
  }`]
})
export class Home {

}

export const routes = [
  { 
    path: 'app1',
    component: App,
    children: [
      { path: 'home', component: Home, pathMatch: 'full' }
    ]
  }
]
