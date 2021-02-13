var path = require('path')
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
    // console.log(__dirname)

// app.get('/', function(req, res) {
//     // res.sendFile('dist/index.html')
//     res.sendFile(path.resolve('src/client/views/index.html'))
// })

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})

var baseUrl = "https://api.meaningcloud.com/sentiment-2.1";
// var articleUrl = "https://www.bbc.com/news/world-us-canada-56035306";
// var getSematic = async(req, res) => {
//     console.log(`response: ${mockAPIResponse.apiKey}`)
//     var result = await app.get(baseUrl + mockAPIResponse.apiKey + "&of=json&txt=Main" + "lang=eng");
//     console.log(baseUrl + mockAPIResponse.apiKey + "&of=json&url=" + articleUrl + "&" + "lang=en");

// }

app.post('/', async function(req, res) {
        var articleUrl = req.body.articleUrl;
        console.log(req.body.articleUrl);
        console.log(`${baseUrl}?key=${mockAPIResponse.apiKey}&of=json&url=${articleUrl}&lang=en`);
        const result = await fetch(`${baseUrl}?key=${mockAPIResponse.apiKey}&of=json&url=${articleUrl}&lang=en`);
        try {
            // console.log(result.json())
            data = await result.json();
            console.log("data")
            console.log(data)
                /**
                 * 
                 *"score_tag": "P",
                 "agreement": "DISAGREEMENT",
                 "subjectivity": "SUBJECTIVE",
                 "confidence": "83",
                 "irony": "NONIRONIC",
                 */
            res.json(data);

        } catch (error) {
            console.log(`Error:${error.message}`);
            res.send(error.message);
        }
    })
    // app.post('/PostArticleUrl',)