/*global Flybywire, Backbone, JST*/

Flybywire.Views = Flybywire.Views || {};

(function () {
    'use strict';

    Flybywire.Views.Documentation = Backbone.View.extend({

        template: JST['app/scripts/templates/Documentation.ejs'],
        template_doc_list : JST['app/scripts/templates/DocumentationList.ejs'],

        initialize: function(project, section) {
            this.section = section;
            this.project = Flybywire.project_collection.get(project);
            this.collection = new Flybywire.Collections.Documentation();
            this.collection.url = this.project.get('urls').docs;
            this.listenTo(this.collection, 'reset', this.done);
            this.collection.fetch({reset: true});
        },
        render: function() {
            return this.$el.html(this.template({'project': this.project.toJSON()}));
        },
        done: function() {
            if (this.section === 'all') {
                this.$el.find('div#doc_list').html(this.template_doc_list({'docs': this.collection.toJSON()}));
            } else {
                var model = this.collection.get(this.section);
                if (!model) {
                    alert('Cannot find documentation for '+this.section+'!');
                    return;
                }
                this.$el.find('div#doc_list').html(this.template_doc_list({'docs': [model.toJSON()]}));
            }
        }

    });

})();
