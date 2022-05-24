
let credentials = {
    "urlproxy_backend": "https://api-crebit.apps.binnovation.co",
    "urlproxy_backend_localhost": "https://localhost:8000"
};


function getRequestOptions(data) {
    var header = {
        //'Content-Type': 'application/json',
    };
    var requestOptions = {
        method: 'POST',
        headers: header,
        body: data,
        redirect: 'follow'
    };
    return requestOptions;
}

/*
function getToken() {
    var requestOptions = getTokenRequestOptions()
    fetch(liveonCredentials['urlProxy'] + "/auth", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
*/

export const createCPFIndividuo = async function (client, cpf) {
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





export const getIndividuo = async function (client, cpf) {
    var data = JSON.stringify({
        "cpf": cpf,
        "client": client
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


export const sendDocInfo = async function (client, cpf) {
    var data = JSON.stringify({
        "docs": {
            "rg": document.getElementById('rg').value,
            "uf": document.getElementById('uf').value,
            "emissao": document.getElementById('emissao').value,
            "mae": document.getElementById('mae').value,
            "nascimento": document.getElementById('nascimento').value,
            "gender": document.getElementById('gender').value
        },
        "cpf": cpf,
        "client": client });
    console.log(data);
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



/*

async function acesso(userdata) {
    const individual_id = userdata['liveon']['individual_id'];
    if (individual_id != '') {
        try {
            const url = liveonCredentials['url'] + '/v2/register/individual/step9';
            const headers = {
                'Content-Type': 'application/json',
                'Subscription-key': liveonCredentials['subscriptionKey']
            }
            const access = userdata['cpf'].substring(3, 9).split("").reverse().join("");
            const data = JSON.stringify({
                "individual_id": individual_id,
                "password": access,
                "confirm_password": access
            });
            const resp = await axios.post(url, data, {
                headers: headers
            })
                .then(function (response) {
                    return response.data;
                })
                .catch(function (error) {
                    console.log('error.response.data: ' + JSON.stringify(error.response.data));
                    console.log('error.config: ' + JSON.stringify(error.config));
                    //console.log(error);
                });
        } catch (_error) {
            console.log("rendaIndividual " + _error);
        }
    }
}*/