"use strict";
var _ = require("lodash");
var App = (function () {
    function App() {
        this.title = "Egghead";
    }
    App.prototype.getUsers = function () {
        return [{ name: "Philip" }];
    };
    return App;
}());
console.log(_.isArray(new App().getUsers()));
