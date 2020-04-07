var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/verblyud"] = requestHandlers.verblyud;
handle["/vol"] = requestHandlers.vol;
handle["/volk"] = requestHandlers.volk;

server.start(router.route, handle);