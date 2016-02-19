System.register(['angular2/core', 'angular2/router', './../../services/auth', './../../config'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, auth_1, config_1;
    var Protected;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_1_1) {
                auth_1 = auth_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            Protected = (function () {
                //Some Coding.
                function Protected() {
                    //Some Coding
                }
                Protected = __decorate([
                    core_1.Component({
                        selector: "protected",
                        templateUrl: config_1.default + "ProtectedComponent/protected.html",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.CanActivate(function (nextInstr, currInstr) {
                        var injector = core_1.Injector.resolveAndCreate([auth_1.AuthService]);
                        var authService = injector.get(auth_1.AuthService);
                        console.log("Next Route" + " " + nextInstr);
                        console.log("Current Route" + " " + currInstr);
                        return authService.islogged();
                    }), 
                    __metadata('design:paramtypes', [])
                ], Protected);
                return Protected;
            })();
            exports_1("Protected", Protected);
        }
    }
});
/*@Component(
    {
        selector:"protected",
        templateUrl:"protected.html"
    }
)

export class Protected
{
    
}*/ 
//# sourceMappingURL=protected.js.map