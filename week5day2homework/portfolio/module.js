const fs = require("fs");
const folder = "./projects/";

exports.setlist = function() {
  fs.readdir(folder, (err, files) => {
    if (err) {
      console.log("error");
    }
    files.forEach(file => {
      body += "<li><a href=" + file + ">" + file + "</a></li>";
    });
    res.end(`
      <!doctype html>
<html>
<title>PORTOFOLIO</title>
<ul>
${body}
</ul>
</html>`);
  });
  return;
};
