function handleSubmit(event) {
    event.preventDefault()
        // check what text was put into the form field
    let articleUrl = document.getElementById('articleUrl').value;
    // return true if url is valid
    var isValid = Client.checkArticleUrl(articleUrl);
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

    console.log(isValid)
    if (isValid) {
        console.log({ articleUrl });
        postArticleUrl("http://localhost:8081/PostArticleUrl", {
            articleUrl
        }).then(function(data) {
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


export { handleSubmit }