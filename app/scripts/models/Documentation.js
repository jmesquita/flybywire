/*global Flybywire, Backbone*/

Flybywire.Models = Flybywire.Models || {};

(function () {
    'use strict';

    Flybywire.Models.Documentation = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
