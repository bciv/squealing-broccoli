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
        tpl: '../bower_components/requirejs-underscore-tpl/underscore-tpl',
        marionette: '../bower_components/backbone.marionette/lib/backbone.marionette',
        jquery: '../bower_components/jquery/dist/jquery',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        text: '../bower_components/text/text',
        localStorage: '../bower_components/backbone.localstorage/backbone.localStorage'
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
        bootstrap: {
            deps: ['jquery']
        },
        common: {
            deps:["marionette"]
        }
    },
    waitSeconds: 60
});

require([
//    'app',
//    'modules/Pages',
    'jquery',
    'bootstrap',
    'backbone',
    'common',
    'marionette' 
], function (Marionette){ //, PagesModule
    //'use strict';
    window.app=new Marionette.Application();
	app.addRegions({
        nav: "#main-nav",
        footer: "#footer",
        body1: "#body1-region",
        body2: "#body2-region"
    });
    
    require(["app"],function(){
        app.start();
    })
});
