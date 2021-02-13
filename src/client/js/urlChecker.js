var validUrl = require('valid-url');

// check if url is valid url or not 
function checkArticleUrl(inputText) {
    // console.log("::: Running Url Checker :::", inputText);
    if (validUrl.isUri(inputText)) {
        console.log('Looks like an URI');

    } else {
        alert("please enter valid url")
    }
}

export { checkArticleUrl }