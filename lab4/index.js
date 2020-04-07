var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/func1"] = requestHandlers.func1;
handle["/func2"] = requestHandlers.func2;
handle["/func3"] = requestHandlers.func3;

server.start(router.route, handle);