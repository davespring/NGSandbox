import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { Http, Response, HTTP_PROVIDERS } from '@angular/http';
import { appRouterProviders } from './app/app.routes';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [HTTP_PROVIDERS, appRouterProviders, provideForms()]);

