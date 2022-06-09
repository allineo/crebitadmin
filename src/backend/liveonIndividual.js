import { currentuser } from './firebaseauth';


let credentials = {
    "urlproxy_backend": "https://api-crebit.apps.binnovation.co"
};


function getRequestOptions(data) {
    var requestOptions = {
        method: 'POST',
        headers: {},
        body: data,
        redirect: 'follow'
    };
    return requestOptions;
}

export const createCPFIndividuo = async function (client, cpf) {
    document.getElementById('resposta').innerHTML =
        'Enviando os dados do Individuo Liveon CPF = ' + cpf;
    var data = JSON.stringify({
        "cpf": cpf,
        "client": client
    });
    fetch(credentials['urlproxy_backend'] + "/createindividuo", getRequestOptions(data))
        .then(response => response.json())
        .then(result => {
            //console.log(result);
            document.getElementById('resposta').innerHTML =
                'Dados do Individuo Liveon CPF = ' + cpf + '<br /><br />' +
                JSON.stringify(result);
        })
        .catch(error => {
            console.log('error', error);
            document.getElementById('resposta').innerHTML = JSON.stringify(error);
        });
}
/* { "success": true,
#    "individual_id": "614220bf011fb90050503717",
#    "document": "65904249187" }
# {"success":false,"code":101,"error_message":"Esse indivíduo já existe","error_data":null} */


export const getIndividuo = async function (cpf) {
    var data = JSON.stringify({
        "cpf": cpf
    });
    fetch(credentials['urlproxy_backend'] + "/getindividuo", getRequestOptions(data))
        .then(response => response.json())
        .then(result => {
            //console.log(result);
            document.getElementById('resposta').innerHTML =
                'Dados do Individuo Liveon CPF = ' + cpf + '<br /><br />' +
                JSON.stringify(result);
        })
        .catch(error => {
            console.log('error', error);
            document.getElementById('resposta').innerHTML = JSON.stringify(error);
        });
}


export const sendDocInfo = async function (cpf) {
    var data = JSON.stringify({
        "docs": {
            "id": currentuser['liveon']['individual_id'],
            "nome": currentuser['nome'],
            "rg": document.getElementById('rg').value,
            "uf": document.getElementById('uf').value,
            "emissao": document.getElementById('emissao').value,
            "mae": document.getElementById('mae').value,
            "nascimento": document.getElementById('nascimento').value,
            "gender": document.getElementById('gender').value
        }
    });
    fetch(credentials['urlproxy_backend'] + "/docsinfo", getRequestOptions(data))
        .then(response => response.json())
        .then(result => {
            //console.log(result);
            document.getElementById('resposta').innerHTML =
                'Dados do Individuo Liveon CPF = ' + cpf + '<br /><br />' +
                JSON.stringify(result);
        })
        .catch(error => {
            console.log('error', error);
            document.getElementById('resposta').innerHTML = JSON.stringify(error);
        });
}

export const approve = async function (cpf) {
    document.getElementById('resposta').innerHTML = 'Aprovando individuo...';
    var data = JSON.stringify({
        "id": currentuser['liveon']['individual_id'],
        "cpf": cpf
    });
    fetch(credentials['urlproxy_backend'] + "/approveindividuo", getRequestOptions(data))
        .then(response => response.json())
        .then(result => {
            //console.log(result);
            document.getElementById('resposta').innerHTML =
                'Individuo Liveon APROVADO CPF = ' + cpf + '<br /><br />' +
                JSON.stringify(result);
        })
        .catch(error => {
            console.log('error', error);
            document.getElementById('resposta').innerHTML = JSON.stringify(error);
        });
}