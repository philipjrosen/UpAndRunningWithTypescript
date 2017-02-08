"use strict";
var _ = require("lodash");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/timer");
require("rxjs/add/observable/interval");
Observable_1.Observable.interval(1000)
    .subscribe(function (x) { return console.log(x); });
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
