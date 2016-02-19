import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router'

import component_path from './../../config'

@Component(
    {
        directives:[ROUTER_DIRECTIVES],
        templateUrl : component_path+'/ContactComponent/contact.html'
    }
)

export class Contact
{
    
}