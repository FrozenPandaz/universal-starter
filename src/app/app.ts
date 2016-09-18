import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <p>Hello Angular Universal App</p>
  <script>console.log('I don't work')</script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
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
