import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Directive, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NodeSharedStylesHost, UniversalModule } from 'angular2-universal';

import { HtmlComponent } from './html/html.component';

@Directive({
  selector: 'universal-style-host'
})
export class NodeUniversalStyleHost {
  constructor(
    public el: ElementRef,
    public domSharedStylesHost: NodeSharedStylesHost) {
    domSharedStylesHost.addHost(el.nativeElement);
  }
}

@NgModule({
  declarations: [ HtmlComponent, NodeUniversalStyleHost ],
  imports: [
    UniversalModule, // BrowserModule, HttpModule, and JsonpModule are included
    FormsModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {

}
