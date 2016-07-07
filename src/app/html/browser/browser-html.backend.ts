import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/Subscriber';

import { HtmlBackend } from '../html.service';
import { Meta } from '../../meta/meta.model';

@Injectable()
export class BrowserHtmlBackend {

  constructor() {}

  private title_string: string = '';
  private title: Observable<string> = <Observable<string>> new Observable(subscriber => {
    subscriber.next(this.title_string);
    this.title_subscribers.push(subscriber);
  });

  private title_subscribers = [];

  setTitle(title: string): void {
    this.title_string = title;
    this.title_subscribers.forEach(subscriber => {
      subscriber.next(this.title_string);
    });
  };

  private current_metas: Meta[] = [];
  private meta_subscribers: Subscriber<Meta[]>[] = [];
  private metas = <Observable<Meta[]>> new Observable(subscriber => {
    subscriber.next(this.current_metas);
    this.meta_subscribers.push(subscriber);
  });

  setMeta(meta: Meta): void {
    this.current_metas.push(meta);
    this.meta_subscribers.forEach(subscriber => {
      subscriber.next(this.current_metas);
    });
  };

  styles: Observable<string[]> = Observable.of([]);
  addStyle(style: string): void {};

  head_scripts: Observable<string[]> = Observable.of([]);
  addHeadScript(script: string): void {};

  body_scripts: Observable<string[]> = Observable.of([]);
  addBodyScript(script: string): void {};
}
