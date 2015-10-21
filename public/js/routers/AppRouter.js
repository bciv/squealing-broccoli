define(['marionette', 'controllers/Controller'], function(Marionette, Controller) {
   var Router = Marionette.AppRouter.extend({
       //"index" must be a method in AppRouter's controller
       appRoutes: {
           "": "index",
           "test": "test"
       },
       routes: {
           "hello/:username": "helloBuddy"
       },
       helloBuddy : function(buddy){
           alert("Hello " + buddy + "!");
       }
   });
   return Router;
});