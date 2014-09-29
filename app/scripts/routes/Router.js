/*global Flybywire, Backbone*/

Flybywire.Routers = Flybywire.Routers || {};

(function () {
    'use strict';

    Flybywire.Routers.Router = Backbone.Router.extend({
    	routes: {
            'documentation/:project/:section': 'documentation',
            '' : 'welcome'
        },
        documentation: function(project, section) {
            Flybywire.navbarview.go(new Flybywire.Views.Documentation(project, section));
        },
        welcome: function() {
            Flybywire.navbarview.go(new Flybywire.Views.Welcome());
        }
    });

})();
