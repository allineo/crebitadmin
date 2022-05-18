
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


exports.getAccountInfo =  function (cpf) {
   // document.getElementById("messageField").innerHTML = 'Aguarde...';
   // let code = document.getElementById("codeField").value;
    //let token = getToken();
    const urlAuth = "https://proxy.apps.binnovation.co/crebit/auth";
    var requestOptions = getTokenRequestOptions();
    fetch(urlAuth, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            let token = result.token;
            console.log(token);
            const urlValidateCode = 'https://proxy.apps.binnovation.co/crebit' + '/pix/dict/validate_code';
            /*var header = {
                //'Subscription-key': subscriptionkey,
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
            };
            var data = JSON.stringify({
                "key": '+' + phone,
                "key_type": "phone",
                "code": code
            });
            var requestOptions = {
                method: 'POST',
                headers: header,
                body: data,
                redirect: 'follow'
            };
            fetch(urlValidateCode, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    exibeMensagem(result);
                })
                .catch(error => console.log('error', error));*/
        })
        .catch(error => console.log('error', error));
}
