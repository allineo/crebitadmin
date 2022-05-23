
// https://maas-baas.readme.io
// https://www.getpostman.com/collections/8642d8b8301dd4bbdd2d



let liveonCredentials = {
    "urlProxy": 'https://proxy.apps.binnovation.co/crebit',
    "url": "https://lotus-prod-apim.baas.solutions/crebit",
    "subscriptionKey": "16d9f23318a14fe38555008356a59854",
};


function getTokenRequestOptions() {
    var header = {
        //'Subscription-key': subscriptionkey,
        'Content-Type': 'application/json',
    };
    var data = JSON.stringify({
        "document": "14090172730",
        "password": "727109"
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
    fetch("https://proxy.apps.binnovation.co/crebit/auth", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


exports.getAccountInfo = function (cpf) {
    var header = {
        //'Subscription-key': subscriptionkey,
        //'Content-Type': 'application/json',
    };
    var data = JSON.stringify({
        "cpf": cpf 
    });
    var requestOptions = {
        method: 'POST',
        headers: header,
        body: data,
        redirect: 'follow'
    };
    fetch("http://proxy.apps.binnovation.co:8000/alias", requestOptions)
        .then(response => response.json())
        .then(result => {
            //console.log(result);
            let alias = result['alias_account']['account_number'];
            document.getElementById('resposta').innerHTML =
                'Número da Conta na Liveon = <b>' + alias + '</b>';
        })
        .catch(error => console.log('error', error));

}
