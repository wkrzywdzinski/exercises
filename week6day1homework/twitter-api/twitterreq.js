const secrets = require("./secrets.json");
const https = require("https");
var util = require('util')
module.exports.gettoken = util.promisify(function getToken(cb) {
    var concatenatedcreds = secrets.consumerKey + ":" + secrets.consumerSecret;
    var encodedcreds = new Buffer(concatenatedcreds).toString("base64");
    let options = {
        method: "POST",
        host: "api.twitter.com",
        path: "/oauth2/token",
        headers: {
            Authorization: 'Basic ' + encodedcreds,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        }
    };
    let callback = resp => {
        if (resp.statusCode != 200) {
            cb(resp.statusCode);
            return;
        }
        let body = "";
        resp.on("data", chunk => {
            body += chunk;
        });
        resp.on("end", () => {
            let parsedBody = JSON.parse(body);
            let bearerToken = parsedBody.access_token;
            cb(null, bearerToken);
        });
    }

    // run the request to twitter
    const req = https.request(options, callback);

    // write body of request
    req.write("grant_type=client_credentials");
    req.end();
});

module.exports.gettweets = util.promisify(function getTweets(btoken, user, cb) {
  const start = "/1.1/statuses/user_timeline.json?screen_name="
  const end = "&count=10"
  let path = start + user + end;
    let options = {
        method: "GET",
        host: "api.twitter.com",
        path: path,
        headers: {
            Authorization: 'Bearer ' + btoken
        }
    };

    let callback = resp => {
        if (resp.statusCode != 200) {
            cb(resp.statusCode);
            return;
        }
        let body = "";
        resp.on("data", chunk => {
            body += chunk;
        });
        resp.on("end", () => {
            let parsedBody = JSON.parse(body);
            cb(null, parsedBody);
        });
    };
    const req = https.request(options, callback);
    req.end();
});
module.exports.filtertweets = function filtertweets(tweets) {
    let headlines = [];
    tweets.forEach(function(item) {
        if (item.entities.urls.length == 1) {
            headlines.push({
                "headline": item.user.name + ": " + item.text.substring(0,item.text.indexOf("https://") - 1),
                "link": item.entities.urls[0].url
            });
        }
    });
    return headlines;}
