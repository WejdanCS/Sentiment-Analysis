const express = require('express')
const cors = require("cors");
const bodyParser = require("body-parser")
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch');
const app = express()
app.use(cors())
app.use(bodyParser.json())
    // to use url encoded values
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('dist'))

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
})

// base url for Meaning Cloud API
var baseUrl = "https://api.meaningcloud.com/sentiment-2.1";

app.post('/PostArticleUrl', async function(req, res) {
    var articleUrl = req.body.articleUrl;
    const result = await fetch(`${baseUrl}?key=${mockAPIResponse.apiKey}&of=json&url=${articleUrl}&lang=en`);
    try {
        data = await result.json();
        const sentimentRestult = {
            score_tag: data.score_tag,
            agreement: data.agreement,
            subjectivity: data.subjectivity,
            confidence: data.confidence,
            irony: data.irony,
        }
        res.json(sentimentRestult);

    } catch (error) {
        res.send(error.message);
    }
})