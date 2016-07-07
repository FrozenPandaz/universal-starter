import {provide} from '@angular/core';

import {HtmlService, HtmlBackend} from '../html.service';
import {NodeHtmlBackend} from './node-html.backend';

export const NODE_HTML_PROVIDERS = [
  NodeHtmlBackend,
  provide(HtmlBackend, {useExisting: NodeHtmlBackend}),
  HtmlService
];
