var validUrl = require('valid-url');
// check if url is valid url or not 
function checkArticleUrl(articleUrl) {
    // console.log("::: Running Url Checker :::", inputText);
    if (validUrl.isUri(articleUrl)) {
        return true;
    } else {
        return false;
        // alert("please enter valid url")
    }
}

export { checkArticleUrl }