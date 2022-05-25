
// https://maas-baas.readme.io
// https://www.getpostman.com/collections/8642d8b8301dd4bbdd2d



let credentials = {
    "urlproxy_backend": "https://api-crebit.apps.binnovation.co"
};


exports.getAccountInfo = function (client, cpf) {
    var header = {
        //'Content-Type': 'application/json',
    };
    var data = JSON.stringify({
        "cpf": cpf,
        "client": client
    });
    var requestOptions = {
        method: 'POST',
        headers: header,
        body: data,
        redirect: 'follow'
    };
    fetch(credentials['urlproxy_backend'] + "/alias", requestOptions)
        .then(response => response.json())
        .then(result => {
            //console.log(result);
            let alias = result['alias_account']; 
            if (alias != null) {
                alias = result['alias_account']['account_number'];
            }
            document.getElementById('resposta').innerHTML =
                'Número da Conta na Liveon = <b>' + alias + '</b>';
        })
        .catch(error => {
            console.log('error', error);
            document.getElementById('resposta').innerHTML = JSON.stringify(error);
        });
}


exports.activateCard = function (client, cpf) {
    var header = {
        //'Content-Type': 'application/json',
    };
    var data = JSON.stringify({
        "cpf": cpf,
        "client": client,
        "card" : document.getElementById('card').value,
    });
    var requestOptions = {
        method: 'POST',
        headers: header,
        body: data,
        redirect: 'follow'
    };
    fetch(credentials['urlproxy_backend'] + "/activatecard", requestOptions)
        .then(response => response.json())
        .then(result => {
            //console.log(result);
            document.getElementById('resposta').innerHTML =
                'Cartão ativado <br /><br />' + JSON.stringify(result);
        })
        .catch(error => {
            console.log('error', error);
            document.getElementById('resposta').innerHTML = JSON.stringify(error);
        });
}