var box = $("#box");
var button = $("#button");
button.on("click", function(e) {
  try {
    JSON.parse(box.val());
    alert("GOOD JOB");
  } catch (e) {
    alert("OH NEIN");
  }
});
