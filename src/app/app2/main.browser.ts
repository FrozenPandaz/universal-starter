import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';

import { MainModule } from './app.module';

import { App, routes } from './app';

@NgModule({
  bootstrap: [ App ],
  imports: [
    MainModule,
    RouterModule.forRoot(routes.map(route => {
      route.component = null;
      return route;
    }))
  ]
})
export class ClientModule {

}
