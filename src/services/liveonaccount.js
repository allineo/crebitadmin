
let credentials = {
    "urlproxy_backend": "https://api-crebit.apps.binnovation.co"
};


exports.getAccountInfo = function (cpf) {
    var data = JSON.stringify({
        "cpf": cpf
    });
    var requestOptions = {
        method: 'POST',
        headers: {},
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


exports.getSaldo = function (cpf) {
    document.getElementById('resposta').innerHTML = 'Buscando Saldo ...';
    var data = JSON.stringify({
        "cpf": cpf
    });
    var requestOptions = {
        method: 'POST',
        headers: {},
        body: data,
        redirect: 'follow'
    };
    fetch(credentials['urlproxy_backend'] + "/balance", requestOptions)
        .then(response => response.json())
        .then(result => {
            //console.log(result);
            document.getElementById('resposta').innerHTML =
                'Saldo da Conta = <b>' + result + '</b>';
        })
        .catch(error => {
            console.log('error', error);
            document.getElementById('resposta').innerHTML = JSON.stringify(error);
        });
}

exports.getExtrato = function (cpf) {
    document.getElementById('resposta').innerHTML = 'Buscando Extrato ...';
    var data = JSON.stringify({
        "cpf": cpf
    });
    var requestOptions = {
        method: 'POST',
        headers: {},
        body: data,
        redirect: 'follow'
    };
    fetch(credentials['urlproxy_backend'] + "/statements", requestOptions)
        .then(response => response.json())
        .then(result => {
            //console.log(result);
            document.getElementById('resposta').innerHTML =
                'Extrato: <br>' + result;
        })
        .catch(error => {
            console.log('error', error);
            document.getElementById('resposta').innerHTML = JSON.stringify(error);
        });
}


exports.activateCard = function (cpf) {
    document.getElementById('resposta').innerHTML = 'Ativando cartão';
    var data = JSON.stringify({
        "cpf": cpf,
        "card": document.getElementById('card').value,
    });
    var requestOptions = {
        method: 'POST',
        headers: {},
        body: data,
        redirect: 'follow'
    };
    fetch(credentials['urlproxy_backend'] + "/activatecard", requestOptions)
        .then(response => response.json())
        .then(result => {
            //console.log(result);
            const num = cpf.substring(3, 7).split("").reverse().join("");
            document.getElementById('resposta').innerHTML =
                'Ativação: ' + num + '<br /><br />' + JSON.stringify(result);
        })
        .catch(error => {
            console.log('error', error);
            document.getElementById('resposta').innerHTML = JSON.stringify(error);
        });
}


exports.listCards = function (cpf) {
    document.getElementById('resposta').innerHTML = 'Listando cartoes...';
    var data = JSON.stringify({
        "cpf": cpf
    });
    var requestOptions = {
        method: 'POST',
        headers: {},
        body: data,
        redirect: 'follow'
    };
    fetch(credentials['urlproxy_backend'] + "/listcards", requestOptions)
        .then(response => response.json())
        .then(result => {
            //console.log(result);
            document.getElementById('resposta').innerHTML =
                'CARTOES: <br /><br />' + JSON.stringify(result);
        })
        .catch(error => {
            console.log('error', error);
            document.getElementById('resposta').innerHTML = JSON.stringify(error);
        });
}