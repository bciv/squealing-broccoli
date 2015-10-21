/* global define */

define([
    'backbone',
	'marionette',
//    'regions/notification',
//    'regions/dialog', 
	'collections/Nav',
//	'views/MenuView',
//	'views/Footer'
], function (Backbone, Marionette, Nav){ //, NotifyRegion, DialogRegion, Nav, MenuView, Footer
	'use strict';

	var app=new Marionette.Application();
	
	app.pages = new Nav([
        {title: 'Home', name: 'home', active: true},
        //{title: 'Events', name: 'events'},
        {title: 'Schedule', name: 'schedule'},
        {title: 'Sponsors', name: 'sponsors'},
        {title: 'Volunteers', name: 'volunteers'},
        {title: 'About Us', name: 'about'},
        {title: 'Contact Us', name: 'contact'},
        //{title: 'Login', name: 'login'},
    ]);

	//return window.app = app;
    app.on('start',function(){
        Backbone.history.start();
        //console.write("test test 1");
    });
});

