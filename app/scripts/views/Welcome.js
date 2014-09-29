/*global Flybywire, Backbone, JST*/

Flybywire.Views = Flybywire.Views || {};

(function () {
    'use strict';

    Flybywire.Views.Welcome = Backbone.View.extend({

        template: JST['app/scripts/templates/Welcome.ejs'],

        tagName: 'div',

        events: {},

        initialize: function () {
        },

        render: function () {
            this.$el.html(this.template({}));
        }

    });

})();
