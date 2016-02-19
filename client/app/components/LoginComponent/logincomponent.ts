//Imporitng Libraries.
import {Component,Injectable,provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES,RouteConfig} from 'angular2/router';

//Import Services.
import {AUTH_PROVIDERS,AuthService} from './../../services/auth';

//Import Path.
//Import Path.
import componentpath from './../../config'

//Creating Component.

@Component(
    {
        selector:'login',
        templateUrl:componentpath+'LoginComponent/login.html',
        directives:[ROUTER_DIRECTIVES]
    }
)

export class LoginComponent
{
    message:string;
    
    constructor(public authService:AuthService)
    {
        this.message = " ";
    }
    
    login(username:string,password:any)
    {
        this.message = '';
        
        if (!this.authService.login(username, password)) {
               this.message = 'Incorrect credentials.';
                        /* tslint:disable */
               setTimeout(function() {
                     this.message = '';
                   }.bind(this), 2500);
                /* tslint:enable */
               }
           return false;
      }
      
      logout()
      {
          this.authService.logout();
          return false;
      }
}