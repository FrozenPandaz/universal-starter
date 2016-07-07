import {Injectable} from '@angular/core';
import {DomSanitizationService, SafeResourceUrl} from '@angular/platform-browser';

import {Observable} from 'rxjs/Observable';

import {Meta} from '../meta/meta.model';

export abstract class HtmlBackend {
  constructor() {}

  title: Observable<string>;
  setTitle(title: string): void {};

  getStyles(): Observable<string[]> { return null; };
  addStyle(style: string): void {};

  metas: Observable<Meta[]>;
  setMeta(meta: Meta): void {};

  head_scripts: Observable<string[]>;
  addHeadScript(script: string): void {};

  body_scripts: Observable<string[]>;
  addBodyScript(script: string): void {};
}

@Injectable()
export class HtmlService {
  constructor(private backend: HtmlBackend, private sanitizer: DomSanitizationService) {};

  title = this.backend.title;

  metas = this.backend.metas;

  styles: Observable<SafeResourceUrl[]> = this.backend.head_scripts.map(this.sanitizeResources);

  head_scripts: Observable<SafeResourceUrl[]> = this.backend.head_scripts.map(this.sanitizeResources);

  body_scripts: Observable<SafeResourceUrl[]> = this.backend.body_scripts.map(this.sanitizeResources);

  setTitle(title: string) {
    return this.backend.setTitle(title);
  }

  setMeta(meta: Meta) {
    return this.backend.setMeta(meta);
  }

  addStyle(style: string) {
    return this.backend.addStyle(style);
  }

  addHeadScript(style: string) {
    return this.backend.addHeadScript(style);
  }

  addBodyScript(style: string) {
    return this.backend.addBodyScript(style);
  }

  private sanitizeResources(resourceUrls: string[]) {
    return <SafeResourceUrl[]> resourceUrls.map(resourceUrl => {
      return <SafeResourceUrl> this.sanitizer.bypassSecurityTrustUrl(resourceUrl);
    });
  }
}
