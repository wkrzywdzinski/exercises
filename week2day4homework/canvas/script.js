var canv = document.getElementById("canv");
var ctx = canv.getContext("2d");

ctx.strokeStyle = "white";
ctx.lineWidth = 10;
ctx.beginPath();
ctx.arc(250, 120, 100, 0, Math.PI * 2);
ctx.moveTo(250, 220);
ctx.lineTo(250, 420);
ctx.lineTo(300, 490);
ctx.moveTo(250, 420);
ctx.lineTo(200, 490);
ctx.moveTo(250, 320);
ctx.lineTo(200, 280);
ctx.moveTo(250, 320);
ctx.lineTo(300, 280);

ctx.stroke();
