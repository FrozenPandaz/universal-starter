import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <p>Hello Angular Universal App #2</p>
  <router-outlet></router-outlet>
  `
})
export class App {

}

@Component({
  selector: 'home',
  template: 'Home component'
})
export class Home {

}

export const routes = [
  { 
    path: 'app2',
    component: App,
    children: [
      { path: '', component: Home, pathMatch: 'full' }
    ]
  }
]
