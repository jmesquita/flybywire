/*global Flybywire, Backbone*/

Flybywire.Collections = Flybywire.Collections || {};

(function () {
    'use strict';

    Flybywire.Collections.Build = Backbone.Collection.extend({

        model: Flybywire.Models.Build,
        url: function() {
        	return '/data/'+this.section+'_builds.json'
        },
        initialize: function(section) {
        	this.section = section;
        }

    });

})();
