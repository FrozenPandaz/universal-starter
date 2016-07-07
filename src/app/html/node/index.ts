import {provide} from '@angular/core';

import {HtmlService, HtmlBackend} from '../html.service';
import {NodeHtmlBackend} from './node-html.backend';

export const HTML_PROVIDERS = [
  NodeHtmlBackend,
  provide(HtmlBackend, {useClass: NodeHtmlBackend}),
  HtmlService
];
