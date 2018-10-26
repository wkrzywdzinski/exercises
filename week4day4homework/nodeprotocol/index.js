const url = require("url");
const qs = require("querystring");
const parsedurl = url.parse(process.argv[2]);
const parsedqs = qs.parse(parsedurl.query);
// console.log(parsedurl.host);
// console.log(parsedqs.a, parsedqs.b);
var parameters = `The protocol is ${parsedurl.protocol}
The host is ${parsedurl.host}
The hostname is ${parsedurl.hostname}
The port is ${parsedurl.port}
The pathname is ${parsedurl.pathname}
The query is ${parsedurl.pathname}
The value of the a parameter is ${parsedqs.a}
The value of the b parameter is ${parsedqs.b}`;
console.log(parameters);
