// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';

// The usual bootstrapping imports
import { bootstrap }      from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent }         from './app.component';
import { provideRouter }  		from '@angular/router';
import { appRouterProviders }   from './app.routes';

import { CookieService }    from 'angular2-cookie/core';
import { LoginService }		from './login/credentials.service';
import { LoggedInGuard }	from './login/logged-in.guard';

bootstrap(AppComponent, [
	CookieService,
    appRouterProviders,
    HTTP_PROVIDERS,
    LoginService,
    LoggedInGuard
    //{ provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    //{ provide: SEED_DATA, useClass: InMemoryDataService }      // in-mem server data
]);