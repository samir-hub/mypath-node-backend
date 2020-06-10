"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
var port = 5000;
server_1.default.listen(port, function () {
    console.log("Listening on port " + port + "...");
});
