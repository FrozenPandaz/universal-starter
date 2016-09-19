import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app',
  template: `
  <p>Hello Angular Universal App</p>
  <script>console.log('I don't work')</script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script [attr.src]="sanitizer.bypassSecurityTrustResourceUrl(script_url)"></script>
  <router-outlet></router-outlet>
  `
})
export class App {
  constructor(private sanitizer: DomSanitizer) {}

  script_url: string = 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js';
}

@Component({
  selector: 'home',
  template: 'Home component'
})
export class Home {

}
