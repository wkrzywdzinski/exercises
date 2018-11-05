const express = require("express");
const app = express();
const { gettoken, gettweets, filtertweets } = require("./twitterreq.js");
app.use(express.static("./tickerAjax"));
app.get("/data", (req, res) => {
    gettoken(function(err, token) {
        if (err) {
            console.log("error gettoken ", err);
            return;
        }
        gettweets(token, function(err, tweets) {
            if (err) {
                console.log("error gettweets: ", err);
                return;
            }
            var filteredtweets = filtertweets(tweets);
            res.json(filteredtweets);
        });
    });
});

app.listen(8080, () => console.log("listening 8080"));
