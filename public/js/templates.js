/*global define */

define(function (require) {
	'use strict';

	return {
        pages : {
          home: require('tpl!templates/pages/home.html'),
          about: require('tpl!templates/pages/about.html'),
          contact: require('tpl!templates/pages/contact.html'),
          //events: require('tpl!templates/pages/events.html'),
          schedule: require('tpl!templates/pages/schedule.html'),
          sponsors: require('tpl!templates/pages/sponsors.html'),
          volunteers: require('tpl!templates/pages/volunteers.html'),
          login: require('tpl!templates/pages/login.html')
        },
        page: require('tpl!templates/page.html'),
        menuItem: require('tpl!templates/menuItem.html'),
		footer: require('tpl!templates/footer.html')
	};
});

