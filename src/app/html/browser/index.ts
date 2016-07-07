import {provide} from '@angular/core';

import {HtmlService, HtmlBackend} from '../html.service';
import {BrowserHtmlBackend} from './browser-html.backend';

export const BROWSER_HTML_PROVIDERS = [
  BrowserHtmlBackend,
  provide(HtmlBackend, {useExisting: BrowserHtmlBackend}),
  HtmlService
];
