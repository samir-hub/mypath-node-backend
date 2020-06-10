"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Express = require("express");
var Helmet = require("helmet");
var server = Express();
server.use(Helmet);
exports.default = server;
