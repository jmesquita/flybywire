/*global Flybywire, Backbone*/

Flybywire.Collections = Flybywire.Collections || {};

(function () {
    'use strict';

    Flybywire.Collections.Projects = Backbone.Collection.extend({

        model: Flybywire.Models.Projects,
        url: 'data/projects.json'

    });

})();
