var validUrl = require('valid-url');

const postArticleUrl = async(url = '', data = {}) => {
        console.log(url);
        console.log(data)
        const result = await fetch(url, {
            method: 'POST',
            cache: "no-cache",
            mode: "cors",
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        try {
            const data = await result.json();
            console.log(data)
            return data;
        } catch (error) {
            console.log(`ERROR:${error.message}`);
        }
    }
    // check if url is valid url or not 
function checkArticleUrl(articleUrl) {
    // console.log("::: Running Url Checker :::", inputText);
    if (validUrl.isUri(articleUrl)) {
        console.log('Looks like an URI');
        console.log({ articleUrl });

        postArticleUrl("http://localhost:8081/PostArticleUrl", {
            articleUrl
        }).then(function(data) {
            console.log("data");
            console.log(data);
            /*
                 <div id="scoreTag"></div>
                <div id="agreement"></div>
                <div id="subjectivity"></div>
                <div id="confidence"></div>
                <div id="irony"></div>
            */
            document.getElementById("scoreTag").innerHTML = `Score Tag: ${data.score_tag}`;
            document.getElementById("agreement").innerHTML = `Agreement: ${data.agreement}`;
            document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity}`;
            document.getElementById("confidence").innerHTML = `Confidence: ${data.confidence}`;
            document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;


        });
    } else {
        alert("please enter valid url")
    }
}

export { checkArticleUrl }