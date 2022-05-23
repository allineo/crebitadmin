
// https://maas-baas.readme.io
// https://www.getpostman.com/collections/8642d8b8301dd4bbdd2d



let credentials = {
    "urlproxy_backend": "https://api-crebit.apps.binnovation.co",
    "urlproxy_backend_localhost": "http://localhost:8000"
};


exports.getAccountInfo = function (cpf) {
    var header = {
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
    fetch(credentials['urlproxy_backend_localhost'] + "/alias", requestOptions)
        .then(response => response.json())
        .then(result => {
            //console.log(result);
            let alias = result['alias_account']['account_number'];
            document.getElementById('resposta').innerHTML =
                'Número da Conta na Liveon = <b>' + alias + '</b>';
        })
        .catch(error => console.log('error', error));
}
