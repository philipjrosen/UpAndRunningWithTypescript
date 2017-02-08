"use strict";
var App = (function () {
    function App() {
        this.title = "Egghead";
    }
    App.prototype.getUsers = function () {
        return [{ name: "Philip" }];
    };
    return App;
}());
