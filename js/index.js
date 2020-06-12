"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dotenv = require("dotenv");
Dotenv.config();
var server_1 = require("./server");
var PORT = process.env.PORT || 5000;
console.log(PORT);
server_1.default.listen(PORT, function () {
    console.log("Listening on port " + PORT + "...");
});
