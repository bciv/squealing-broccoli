require.config({
    config: {
        underscoreTemplateSettings: {
        interpolate: /\{\{\s*([^#\{]+?)\s*\}\}/g,  // {{ title }}
        evaluate:    /\{\{#([\s\S]+?)\}\}/g,       // {{# console.log("stuff") }}
        escape:      /\{\{\{([\s\S]+?)\}\}\}/g     // {{{ title }}}
        }
    },

    paths: {
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        localStorage: '../bower_components/backbone.localstorage/backbone.localStorage',
        marionette: '../bower_components/backbone.marionette/lib/backbone.marionette',
        handlebars: '../bower_components/handlebars/handlebars',
        jquery: '../bower_components/jquery/dist/jquery',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        text: '../bower_components/text/text'
    },
    
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },
		marionette: {
			exports: 'backbone.marionette',
			deps: ['backbone']
		},        
        handlebars: {
            "exports":"Handlebars"
        },
        bootstrap: {
            deps: ['jquery']
        }
    },
    waitSeconds: 60
});

require([
    'App',
    'routers/AppRouter',
    'controllers/Controller',
    'jquery',
    'bootstrap',
    'backbone'
], function (App,AppRouter,Controller){ 
    App.appRouter=new AppRouter({
        controller:new Controller()
    });
    App.start();
});
