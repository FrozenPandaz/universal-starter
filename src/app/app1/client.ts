// the polyfills must be the first thing imported
import 'angular2-universal-polyfills';

// Angular 2
import { enableProdMode} from '@angular/core';
import { platformUniversalDynamic } from 'angular2-universal';

// enable prod for faster renders
enableProdMode();

import { ClientModule } from './main.browser';

const platformRef = platformUniversalDynamic();

// on document ready bootstrap Angular 2
document.addEventListener('DOMContentLoaded', () => {

  debugger;

  platformRef.bootstrapModule(ClientModule);

});
