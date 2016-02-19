//Import Libraries.
import {Component,Injectable,provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES,RouteConfig,ROUTER_PROVIDERS,LocationStrategy,
                          HashLocationStrategy,PathLocationStrategy} from 'angular2/router';
import {bootstrap} from 'angular2/platform/browser';                          


//Import Service.
import {AUTH_PROVIDERS,AuthService} from './services/auth';

//Import Main App.

import Main from './app';

bootstrap(Main,[ROUTER_PROVIDERS,AUTH_PROVIDERS,
                  provide(LocationStrategy,{useClass:HashLocationStrategy})]);