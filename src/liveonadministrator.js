

let liveonCredentials = {
    "urlProxy": 'https://proxy.apps.binnovation.co/crebit',
    "url": "https://lotus-prod-apim.baas.solutions/crebit",
    "subscriptionKey": "16d9f23318a14fe38555008356a59854",
    "Authorization": "MFY2MzlPNVF5b0lpNDNINGh0RFhIQWVUNDMrUzh2OGxNdDY1bGJ4RjVzUT06U1Z0YmZ6QmxZV1Y3dkU0WTRDRU5jaE16OXFYOE11M3Z6enpNWmxUNzNZclI0b0NrM0VsdzltM0h2Nm12RmxYVllHRFVEWW5FeXY2UVBNTUJZSWY0V2c9PQ==",
    "adminpwd": "70c071daac26ae7b"
};


function getTokenRequestOptions() {
    var header = {
        'Content-Type': 'application/json'
    };
    var data = JSON.stringify({
        "document": "65904249187",
        "password": "001248"
    });
    var requestOptions = {
        method: 'POST',
        headers: header,
        body: data,
        redirect: 'follow'
    };
    return requestOptions;
}

function getToken() {
    var requestOptions = getTokenRequestOptions()
    fetch(liveonCredentials['urlProxy'] + "/auth", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


export const changeAccessIndividuo = async function () {
    const id = "6275cc3287891600637d573e";
    const cpf = "14090172730";
    const url = liveonCredentials['url'] + '/account/change_password'; // '/account/forgot_password';

    let access_old = '182313'; // cpf.substr(3, 6).split("").reverse().join("");
    const token = await getToken(cpf, access_old);
    console.log(token);
}


