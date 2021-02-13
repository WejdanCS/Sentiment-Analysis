var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function(req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})

var bas_url = "https://api.meaningcloud.com/sentiment-2.1?key=";
var url = "https://www.bbc.com/news/world-us-canada-56035306";
var getSematic = async(req, res) => {
    console.log(`response: ${mockAPIResponse.apiKey}`)
    var result = await app.get(bas_url + mockAPIResponse.apiKey + "&of=json&txt=Main" + "lang=eng");
    console.log(bas_url + mockAPIResponse.apiKey + "&of=json&url=" + url + "&" + "lang=en");

}