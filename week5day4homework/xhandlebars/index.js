const express = require("express");
const fs = require("fs");
const app = express();
const ca = require("chalk-animation");
const hb = require("express-handlebars");
const files = fs.readdirSync("./projects");
app.engine("handlebars", hb());
app.set("view engine", "handlebars");
app.use(express.static("./public"));
app.use(express.static("./projects"));
//////////////////////end of setup//////////////
app.get("/aboutme", (req, res) => {
  res.render("aboutme", {
    layout: "main"
  });
});

app.get("/", (req, res) => {
  res.render("aboutme", {
    layout: "main"
  });
});

app.get("/myprojects", (req, res) => {
  res.render("myprojects", {
    layout: "main",
    files: files
  });
});

app.get("/:someproject/description", (req, res) => {
  console.log(req.params.someproject);
  var data = require("./projects/" + req.params.someproject + "/data.json");
  console.log(data);
  res.render("project", {
    layout: "main",
    data: data
  });
});
///////////////downsection///////////

app.listen(8080, () => {
  console.log(files);
  ca.rainbow("listening 8080");
});
