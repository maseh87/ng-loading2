System.register(['angular2/platform/browser', './ngLoading.component'], function(exports_1) {
    var browser_1, ngLoading_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (ngLoading_component_1_1) {
                ngLoading_component_1 = ngLoading_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(ngLoading_component_1.AppComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map