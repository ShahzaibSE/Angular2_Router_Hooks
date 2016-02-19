//Imporitng Libraries.
import {Component,Injectable,provide,Injector} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES,RouteConfig,CanActivate} from 'angular2/router';

//Import Service.
import {AUTH_PROVIDERS,AuthService} from './../../services/auth';

//Import Path.
import componentpath from './../../config';

@Component(
    {
        selector:"protected",
        templateUrl:componentpath+"ProtectedComponent/protected.html",
        directives:[ROUTER_DIRECTIVES]
    }
)

@CanActivate(
  (nextInstr: any, currInstr: any) => {
     let injector: any = Injector.resolveAndCreate([AuthService]);
     let authService: AuthService = injector.get(AuthService);
     
     console.log("Next Route"+" "+nextInstr);
     console.log("Current Route"+" "+currInstr);
     
       return authService.islogged();
   }
)

export class Protected{
    //Some Coding.
    constructor()
    {
        //Some Coding
    }
}


/*@Component(
    {
        selector:"protected",
        templateUrl:"protected.html"
    }
)

export class Protected
{
    
}*/