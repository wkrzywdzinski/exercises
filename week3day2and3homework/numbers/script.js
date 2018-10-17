function askfornumber(a) {
  if (a > 0 && a < 11) {
    return a;
  } else {
    alert("WRONG NUMBER");
  }
}
function translateNumberToGerman(a) {
  console.log(german[a]);
}
var german = [
  "null",
  "eins",
  "zwei",
  "drei",
  "vier",
  "funf",
  "sechs",
  "sieben",
  "acht",
  "neun",
  "zehn"
];
