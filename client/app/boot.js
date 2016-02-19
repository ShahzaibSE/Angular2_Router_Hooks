System.register(['angular2/core', 'angular2/router', 'angular2/platform/browser', './services/auth', './app'], function(exports_1) {
    var core_1, router_1, browser_1, auth_1, app_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (auth_1_1) {
                auth_1 = auth_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.default, [router_1.ROUTER_PROVIDERS, auth_1.AUTH_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
        }
    }
});
//# sourceMappingURL=boot.js.map