
// https://maas-baas.readme.io
// https://www.getpostman.com/collections/8642d8b8301dd4bbdd2d



let liveonCredentials = {
    "urlProxy": 'https://proxy.apps.binnovation.co/crebit',
    "url": "https://lotus-prod-apim.baas.solutions/crebit",
    "subscriptionKey": "16d9f23318a14fe38555008356a59854",
};


function getTokenRequestOptions(cpf) {
    var header = {
        'Content-Type': 'application/json',
        'Subscription-key': liveonCredentials['subscriptionKey']
    };
    var access = cpf.substring(3, 9).split("").reverse().join("");
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

function getToken(cpf) {
    var requestOptions = getTokenRequestOptions(cpf);
    fetch(liveonCredentials['urlProxy'] + "/auth", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


export const getAccountInfo = async function (cpf) {
    console.log(cpf);
    const token = await getToken(cpf);
    console.log(token);
    document.getElementById('resposta').innerHTML = JSON.stringify(token);
}
