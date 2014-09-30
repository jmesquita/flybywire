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
            this.build_collection = new Flybywire.Collections.Build(project);
            this.collection.url = this.project.get('urls').docs;
            this.listenTo(this.build_collection, 'reset', this.done);
            
            var that = this;
            this.collection.fetch({
                reset: true,
                success: function() {
                    that.build_collection.fetch({
                        reset: true,
                        error: function() {
                            alert('Could not load builds.');
                        }
                    });
                },
                error: function () {
                    alert('Could not load documentation list.');
                }
            });
        },
        render: function() {
            return this.$el.html(this.template({'project': this.project.toJSON()}));
        },
        done: function() {
            var columns = [{
                name: "id", // The key of the model attribute
                label: "ID", // The name to display in the header
                editable: false, // By default every cell in a column is editable, but *ID* shouldn't be
                cell: "integer"
              }, {
                name: "timestamp",
                label: "Date/Time",
                // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like *id* above, or a string
                cell: "string", // This is converted to "StringCell" and a corresponding class in the Backgrid package namespace is looked up
                editable: false
              }, {
                name: "sha1",
                label: "SHA1",
                editable: false,
                cell: "string" // Renders the value in an HTML anchor element
            }, {
                name: "build_url",
                label: "Job",
                editable: false,
                cell: "uri" // Renders the value in an HTML anchor element
            }];
            if (this.section === 'all') {
                columns.push({
                    name: "branch",
                    "label": "Branch",
                    editable: false,
                    cell: "string"
                });
            }

            var grid = new Backgrid.Grid({
              columns: columns,
              collection: this.build_collection
            });

            if (this.section !== 'all') {
                grid.removeRow(grid.collection.difference(grid.collection.where({'branch': this.section})));
            }

            this.$el.find('div#doc_list').html(grid.render().el);
            // this.$el.find('div#doc_list').html(this.template_doc_list({'docs': this.mix_and_match()}));
        }

    });

})();
