const { type } = require("os");

function route(pathname, handle, response) {
  console.log("pathname:" + pathname);

  if (typeof handle[pathname] == "function") {
    handle[pathname](response);
  } else {
    console.log("404");
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write("404!!!!!!!!!");
    response.end();
  }
}

exports.route = route;
