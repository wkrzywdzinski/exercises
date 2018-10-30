const http = require("http");
const fs = require("fs");
const path = require("path"); //// >>> parse //
const server = http.createServer((req, res) => {
  if (req.method != "GET") {
    res.statusCode = 405;
    return res.end();
  }
  /////// normalize /////
  const item = __dirname + "/projects" + req.url;
  const normalize = path.normalize(item);
  console.log(normalize);
  var ext = checkext(req.url);

  if (!normalize.startsWith(__dirname + "/projects")) {
    res.statusCode = 403;
    return res.end();
  }
  fs.stat(normalize, function(err, stats) {
    if (err) {
      res.statusCode = 404;
      return res.end();
    }
    if (stats.isFile()) {
      res.setHeader("Content-Type", ext);
      const stream = fs.createReadStream(normalize);
      stream.pipe(res);
      stream.on("error", () => {
        res.statusCode = 500;
        return res.end();
      });
    }
    if (stats.isDirectory()) {
      if (!req.url.endsWith("/")) {
        res.statusCode = 302;
        return res.end(res.setHeader("Location", req.url + "/"));
      } else {
        res.setHeader("Content-Type", "text/html");
        const indexstream = fs.createReadStream(item + "index.html");
        indexstream.pipe(res);
        indexstream.on("error", () => {
          res.statusCode = 500;
          return res.end();
        });
      }
    }
  });
});
server.listen(8080, function() {
  console.log("listening to 8080");
});

function checkext(ext) {
  if (path.extname(ext) == ".html") {
    return "text/html";
  }
  if (path.extname(ext) == ".css") {
    return "text/css";
  }
  if (path.extname(ext) == ".js") {
    return "text/javascript";
  }
  if (path.extname(ext) == ".json") {
    return "application/json";
  }
  if (path.extname(ext) == ".gif") {
    return "image/gif";
  }
  if (path.extname(ext) == ".jpg") {
    return "image/jpeg";
  }
  if (path.extname(ext) == ".png") {
    return "image/png";
  }
  if (path.extname(ext) == ".svg") {
    return "image/svg+xml";
  }
}
