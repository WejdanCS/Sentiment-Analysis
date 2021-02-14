const dotenv = require('dotenv');
dotenv.config();
var apikey = {
    apiKey: process.env.API_KEY,
}

module.exports = apikey