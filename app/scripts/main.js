/*global Flybywire, $*/


window.Flybywire = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        this.navbarview = new Flybywire.Views.Navbarview();
        this.router = new Flybywire.Routers.Router();
    }
};

$(document).ready(function () {
    'use strict';
    Flybywire.init();
});
