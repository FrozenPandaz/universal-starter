import { Component, Inject } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

import { REQUEST_URL } from 'angular2-universal';

import { Observable } from 'rxjs/Observable';

import { App } from '../app.component';
import { HtmlService } from './html.service';
import { Meta } from '../meta/meta.model';

@Component({
  moduleId: __filename,
  selector: 'html',
  templateUrl: 'html.component.html',
  directives: [
    App
  ]
})
export class Html {
  title: Observable<string>;
  metas_by_name: Observable<Meta[]>;
  metas_by_property: Observable<Meta[]>;
  body_scripts: Observable<SafeResourceUrl[]>;
  head_scripts: Observable<SafeResourceUrl[]>;
  styles: Observable<SafeResourceUrl[]>;

  constructor(private htmlService: HtmlService, @Inject(REQUEST_URL) private REQUEST_URL: string) {}

  ngOnInit() {
    this.htmlService.setMeta({
      name: 'meta',
      content: 'weadf'
    });
    this.title = this.htmlService.title;
    this.htmlService.setMeta({
      property: 'og:url',
      content: this.REQUEST_URL
    });
    this.metas_by_name = this.htmlService.metas.map(metas => {
      return metas.filter(meta => {
        return !!meta.name;
      });
    });
    this.metas_by_property = this.htmlService.metas.map(metas => {
      return metas.filter(meta => {
        return !!meta.property;
      });
    });

    this.head_scripts = this.htmlService.head_scripts;
    this.body_scripts = this.htmlService.body_scripts;
  }

}
