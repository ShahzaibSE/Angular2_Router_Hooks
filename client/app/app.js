System.register(['angular2/core', 'angular2/router', './components/HomeComponent/home', './components/ContactComponent/contact', './components/AboutComponent/about', './components/LoginComponent/logincomponent', './components/ProtectedComponent/protected'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_1, contact_1, about_1, logincomponent_1, protected_1;
    var Main;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (contact_1_1) {
                contact_1 = contact_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            },
            function (logincomponent_1_1) {
                logincomponent_1 = logincomponent_1_1;
            },
            function (protected_1_1) {
                protected_1 = protected_1_1;
            }],
        execute: function() {
            Main = (function () {
                function Main() {
                }
                Main = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        directives: [router_1.ROUTER_DIRECTIVES, logincomponent_1.LoginComponent],
                        template: "\n            <div class=\"page-header\">\n              <div class=\"container\">\n                 <h1>Router Sample</h1>\n            <div class=\"navLinks\">\n                 <a [routerLink]=\"['/Home']\">Home</a>\n                 <a [routerLink]=\"['/About']\">About</a>\n                 <a [routerLink]=\"['/Contact']\">Contact us</a>\n                 <a [routerLink]=\"['/Protected']\">Protected</a>\n              </div>\n             </div>\n            </div>\n           <div id=\"content\">\n             <div class=\"container\">\n                <login></login>\n                 <hr>\n                   <router-outlet></router-outlet>\n           </div>\n         </div>\n"
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'root', redirectTo: ['Home'] },
                        { path: '/home', name: 'Home', component: home_1.Home },
                        { path: '/about', name: 'About', component: about_1.About },
                        { path: '/contact', name: 'Contact', component: contact_1.Contact },
                        { path: '/protected', name: 'Protected', component: protected_1.Protected },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], Main);
                return Main;
            })();
            exports_1("default",Main);
        }
    }
});
//# sourceMappingURL=app.js.map