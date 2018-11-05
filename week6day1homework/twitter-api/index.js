const express = require("express");
const app = express();
const { gettoken, gettweets, filtertweets } = require("./twitterreq.js");
app.use(express.static("./tickerAjax"));
app.get("/data", (req, res) => {

    gettoken()

    .then(function(token)
    {Promise.all([
  gettweets(token, "BarackObama"),
  gettweets(token, "BarackObama"),
  gettweets(token, "MichelleObama")
])
.then(function (tweets) {

var tweets = [...tweets[0], ...tweets[1], ...tweets[2]]
let sorted = tweets.sort(function(a, b) {
                    return new Date(b.created_at) - new Date(a.created_at);
                })
console.log(sorted)
var filteredtweets = filtertweets(sorted);
         res.json(filteredtweets);
    })
    .catch(function(err){console.log(err);})
})
});

app.listen(8080, () => console.log("listening 8080"));
