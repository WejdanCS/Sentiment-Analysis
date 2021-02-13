// let json = {
//     'title': 'test json response',
//     'message': 'this is a message',
//     'time': 'now'
// }
// https://api.meaningcloud.com/sentiment-2.1
const dotenv = require('dotenv');
dotenv.config();
var apikey = {
    apiKey: process.env.API_KEY,
}
console.log(`Your API key is ${process.env.API_KEY}`);

module.exports = apikey