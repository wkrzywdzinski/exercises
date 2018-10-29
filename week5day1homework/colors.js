const chalk = require("chalk");
const http = require("http");
const url = require("url");
const qs = require("querystring");
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
  //////////////// get //////////
  if (request.method == "GET") {
    response.setHeader("Content-Type", "text/html");
    response.statusCode = 200;
    response.end(`
        <!doctype html>
<html>
<title>Colors</title>
<form method="POST">
  <input type="text" name="text">
  <select name="color">
    <option value="red">red</option>
    <option value="blue">blue</option>
    <option value="green">green</option>
    <option value="yellow">yellow</option>
    <option value="gray">gray</option>
    <option value="magenta">magenta</option>
    <option value="cyan">cyan</option>
  </select>
  <button type="submit">Go</button>
</form>
</html>`);
  } else if (request.method == "POST") {
    let body = "";
    request.on("data", function(chunk) {
      body += chunk;
    });

    request.on("end", function() {
      var parsedvalues = qs.parse(body);
      response.end(`<!doctype html>
<html>
<title>${parsedvalues.text}</title>
<a href="/" style="color:${parsedvalues.color}">${parsedvalues.text}</a>
</html>`);
    });
  } else {
    response.statusCode = 405;
  }
});
server.listen(8080, function() {
  console.log("listening to 8080");
});
