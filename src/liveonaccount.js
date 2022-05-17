
// https://maas-baas.readme.io
// https://www.getpostman.com/collections/8642d8b8301dd4bbdd2d



let liveonCredentials = {
    "urlProxy": 'https://proxy.apps.binnovation.co/crebit',
    "url": "https://lotus-prod-apim.baas.solutions/crebit",
    "subscriptionKey": "16d9f23318a14fe38555008356a59854",
    "Authorization": "MFY2MzlPNVF5b0lpNDNINGh0RFhIQWVUNDMrUzh2OGxNdDY1bGJ4RjVzUT06U1Z0YmZ6QmxZV1Y3dkU0WTRDRU5jaE16OXFYOE11M3Z6enpNWmxUNzNZclI0b0NrM0VsdzltM0h2Nm12RmxYVllHRFVEWW5FeXY2UVBNTUJZSWY0V2c9PQ==",
    "adminpwd": "70c071daac26ae7b"
};


function getTokenRequestOptions(cpf) {
    const access = cpf.substring(3, 9).split("").reverse().join("");
    var header = {
        'Content-Type': 'application/json',
        'Subscription-key': liveonCredentials['subscriptionKey']
    };
    var dados = JSON.stringify({
        "document": cpf,
        "password": access
    });
    var requestOptions = {
        method: 'POST',
        headers: header,
        body: dados,
        redirect: 'follow'
    };
    return requestOptions;
}

function getToken(cpf, access) {
    var requestOptions = getTokenRequestOptions(cpf, access);
    fetch(liveonCredentials['urlProxy'] + "/auth", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}




export const getAccountInfo = async function (cpf) {

    const urlAuth = "https://proxy.apps.binnovation.co/crebit/auth";
    var requestOptions = getTokenRequestOptions(cpf);
    fetch(urlAuth, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            document.getElementById('resposta').innerHTML = JSON.stringify(result);
            //let token = result.token;
            //console.log(token);
        })
        .catch(error => console.log('error', error));
}