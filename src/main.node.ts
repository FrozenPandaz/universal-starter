import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';

import { SharedModule } from './app/shared/shared.module';
import { HtmlComponent } from './app/shared/html/html.component';

import { MainModule as Module1 } from './app/app1/app.module';
import { MainModule as Module2 } from './app/app2/app.module';

import { routes as routes_1 } from './app/app1/app';
import { routes as routes_2 } from './app/app2/app';

@NgModule({
  bootstrap: [ HtmlComponent ],
  declarations: [  ],
  imports: [
    UniversalModule, // NodeModule, NodeHttpModule, and NodeJsonpModule are included
    FormsModule,
    SharedModule,
    RouterModule,
    Module1,
    Module2,
    RouterModule.forRoot(routes_1),
    RouterModule.forRoot(routes_2)
  ]
})
export class MainModule {

}
