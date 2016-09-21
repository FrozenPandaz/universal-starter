import { Component } from '@angular/core';

@Component({
  selector: 'html',
  template: `
  <head>
    <u-script src="/app1.js"></u-script>
    <base href="/">
    <universal-style-host></universal-style-host>
  </head>
  <body>
    <router-outlet></router-outlet>
  </body>
  `
})
export class HtmlComponent {

}