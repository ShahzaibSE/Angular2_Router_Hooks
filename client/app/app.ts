//Import Libraries.
import {Component,Injectable,provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES,RouteConfig} from 'angular2/router';

//Import Services.
import {AUTH_PROVIDERS,AuthService} from './services/auth';

//Import Components.
import {Home} from './components/HomeComponent/home'
import {Contact} from './components/ContactComponent/contact'
import {About} from './components/AboutComponent/about'
import {LoginComponent} from './components/LoginComponent/logincomponent'
import {Protected} from './components/ProtectedComponent/protected'

@Component(
    {
        selector:"my-app",
        directives:[ROUTER_DIRECTIVES,LoginComponent],
        template: `
            <div class="page-header">
              <div class="container">
                 <h1>Router Sample</h1>
            <div class="navLinks">
                 <a [routerLink]="['/Home']">Home</a>
                 <a [routerLink]="['/About']">About</a>
                 <a [routerLink]="['/Contact']">Contact us</a>
                 <a [routerLink]="['/Protected']">Protected</a>
              </div>
             </div>
            </div>
           <div id="content">
             <div class="container">
                <login></login>
                 <hr>
                   <router-outlet></router-outlet>
           </div>
         </div>
`
    }
)

@RouteConfig([
    { path: '/', name: 'root', redirectTo: ['Home'] },
    { path: '/home', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/protected', name: 'Protected', component: Protected },
])

class Main
{
    //Some Coding
}

export default Main;
