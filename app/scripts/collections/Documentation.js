/*global Flybywire, Backbone*/

Flybywire.Collections = Flybywire.Collections || {};

(function () {
    'use strict';

    Flybywire.Collections.Documentation = Backbone.Collection.extend({

        model: Flybywire.Models.Documentation

    });

})();
