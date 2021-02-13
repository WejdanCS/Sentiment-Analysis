var validUrl = require('valid-url');

const postArticleUrl = async function(url = '', data = {}) {
        console.log(url);
        console.log(data)
        const result = await fetch(url, {
            method: 'POST',
            // mode: 'cors',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        try {
            return await result.json();
        } catch (error) {
            console.log(error.message);
        }
    }
    // check if url is valid url or not 
async function checkArticleUrl(articleUrl) {
    // console.log("::: Running Url Checker :::", inputText);
    if (validUrl.isUri(articleUrl)) {
        console.log('Looks like an URI');
        const data = await postArticleUrl("localhost:8081/", {
            articleUrl
        });
        console.log("data:");
        console.log(data);


    } else {
        alert("please enter valid url")
    }
}

export { checkArticleUrl }