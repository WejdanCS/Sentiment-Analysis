var validUrl = require('valid-url');
// check if url is valid url or not 
function checkArticleUrl(articleUrl) {
    if (validUrl.isUri(articleUrl)) {
        return true;
    } else {
        return false;
    }
}

export { checkArticleUrl }