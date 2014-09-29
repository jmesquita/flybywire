/*global Flybywire, Backbone, JST*/

Flybywire.Views = Flybywire.Views || {};

(function () {
    'use strict';

    Flybywire.Views.Navbarview = Backbone.View.extend({

        template: JST['app/scripts/templates/NavBarView.ejs'],

        el: 'body',

        initialize: function() {
            this.contentDiv = this.$el.find('#the_views');
            Flybywire.project_collection = new Flybywire.Collections.Projects();
            this.project_collection = Flybywire.project_collection;
            this.listenTo(this.project_collection, 'reset', this.start);
            this.project_collection.fetch({reset: true});
        },
        start: function() {
            Backbone.history.start();
        },
        go: function(view) {
            this.currentView = view;
            this.currentView.render();
            this.contentDiv.html(this.currentView.$el);
        }

    });

})();
