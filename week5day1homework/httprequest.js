const http = require("http");
const fs = require("fs");
const server = http.createServer(function(request, response) {
  //////////errors///////////
  request.on("error", function(err) {
    console.log("error request", err);
  });
  response.on("error", function(err) {
    console.log("error response", err);
  });
  //////////consolelogs//////
  console.log("request type", request.method);
  console.log("url: ", request.url);
  console.log("header: ", request.headers);
  fs.appendFile(
    "requests.txt",
    [
      new Date(),
      request.method,
      request.url,
      request.headers["user-agent"],
      "\n",
      "\n"
    ].join("\t"),
    err => {
      if (err) throw err;
      console.log("log appended");
    }
  );
  //////////////// get //////////
  if (request.method == "GET") {
    response.setHeader("Content-Type", "text/html");
    response.statusCode = 200;
    response.end(`
        <!doctype html>
        <html>
        <title>Hello World!</title>
        <p>Hello World!
</html>`);
  } else if (request.method == "HEAD") {
    response.setHeader("Content-Type", "text/html");
    response.statusCode = 200;
    response.end();
  } else if (request.method == "POST") {
    let body = "";
    request.on("data", function(chunk) {
      body += chunk;
    });
    request.on("end", function() {
      console.log(body);
      response.statusCode = 405;
      response.setHeader("Location", "/");
      response.end();
    });
  } else {
    response.statusCode = 405;
    response.end();
  }
});
server.listen(8080, function() {
  console.log("listening to 8080");
});
