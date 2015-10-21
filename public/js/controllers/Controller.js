define(['App', 'backbone', 'marionette', 'views/WelcomeView', 'views/TestView', 'views/HeaderView', 'views/FooterView'],
    function (App, Backbone, Marionette, WelcomeView, HeaderView, FooterView) {
    var Controller = Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            App.headerRegion.show(new HeaderView());
            App.footerRegion.show(new FooterView());
        },
        //gets mapped to in AppRouter's appRoutes
        test:function() {
            App.mainRegion.show(new TestView());
        },
        index:function () {
            App.mainRegion.show(new WelcomeView());
        }
    });
    return Controller;
});