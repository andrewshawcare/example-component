var JsDom = require("jsdom");
global.window = JsDom.jsdom().defaultView;
global.document = window.document;

var RequireJs = require("requirejs");
global.define = RequireJs.define;
global.window.require = RequireJs;
RequireJs.config({
  paths: {
    "node_modules": "./node_modules",
    "ace": "./node_modules/ace-builds/src"
  },
  nodeRequire: require
});

var Jasmine = require("jasmine");
var jasmine = new Jasmine();
RequireJs(["./spec.js"], function () {
  jasmine.execute();
});
