import { Component, DomSanitizationService } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <p>Hello Angular Universal App</p>
  <script>console.log('I don't work')</script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script [attr.src]="sanitizer.bypassSecurityTrustResourceUrl(script_url)"
  <router-outlet></router-outlet>
  `
})
export class App {
  constructor(private sanitizer: DomSanitizationService) {}

  script_url: string = 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js';
}

@Component({
  selector: 'home',
  template: 'Home component'
})
export class Home {

}
