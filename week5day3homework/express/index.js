/////////////////////setup/////////////////
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
app.disable("x-powered-by");
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cookieParser());
var basicAuth = require("basic-auth");
var auth = function(req, res, next) {
  var creds = basicAuth(req);
  if (
    !creds ||
    creds.name != "doglover123" ||
    creds.pass != "ihatethesekitties"
  ) {
    res.setHeader(
      "WWW-Authenticate",
      'Basic realm="enter your username and password to enter fluffy kingdom"'
    );
    res.sendStatus(401);
  } else {
    next();
  }
};

///////////////////////cookie redirection ////////////////////////////////
app.use(function(req, res, next) {
  if (!req.cookies.cookieaccept && req.url != "/cookie") {
    res.cookie("url", req.url);
    res.redirect("/cookie");
  } else {
    next();
  }
}); ////// cookiepage////
app.get("/cookie", function(req, res) {
  res.send(
    `<html>
    <title>Cookie auth</title>
    <H1>ACCEPT COOKIES</h1>
    <form action="" method="post">
        <button name="foo" value="upvote">I ACCEPT COOKIES</button>
    </form>
    </html>`
  );
}); ////cookiepost/////
app.post("/cookie", function(req, res) {
  res.cookie("cookieaccept", "yes");
  console.log(req.cookies.url);
  res.redirect(req.cookies.url);
});
///////////////////// end of cookie redirect ///////////////////////////////
app.use("/kittycar", auth);
app.use(express.static("./projects"));

app.listen(8080, () => console.log(`I'm listening`));
