let http = require("http");
// http모듈을 require 을 통해 http 함수에 담음
let url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    let pathname = url.parse(request.url).pathname;
    route(pathname, handle, response);
  }

  http.createServer(onRequest).listen(8888);
  // localhost:8888
}

exports.start = start;
