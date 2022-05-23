
let credentials = {
    "urlproxy_backend": "https://api-crebit.apps.binnovation.co",
    "urlproxy_backend_localhost": "https://localhost:8000"
};

/*
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
*/

export const createCPFIndividuo = async function (cpf) {
    /*
    document.getElementById('resposta').innerHTML = 'Criando individuo na Liveon para CPF = ' + cpf;
    const urlRegisterIndivuduo = liveonCredentials['urlProxy'] + '/v2/register/individual';
    var header = {
        'Content-Type': 'application/json',
       // 'Subscription-key': liveonCredentials['subscriptionKey']
    };
    var data = JSON.stringify({
        "document": cpf
    });
    var requestOptions = {
        method: 'POST',
        headers: header,
        body: data,
        redirect: 'follow'
    };
    fetch(urlRegisterIndivuduo, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            document.getElementById('resposta').innerHTML =
                'Individuo Liveon criado para CPF = ' + cpf + '<br /><br />' +
                result + 
                JSON.stringify(result);
        })
        .catch(error => console.log('error', error));*/
} 
/* { "success": true,
#    "individual_id": "614220bf011fb90050503717",
#    "document": "65904249187" }
# {"success":false,"code":101,"error_message":"Esse indivíduo já existe","error_data":null} */





export const getIndividuo = async function (cpf) {
//exports.getIndividuo = function (cpf) {
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
    fetch(credentials['urlproxy_backend'] + "/getindividuo", requestOptions)
        .then(response => response.json())
        .then(result => {
                console.log(result);
                document.getElementById('resposta').innerHTML = 
                'Dados do Individuo Liveon CPF = ' + cpf + '<br /><br />' +
                JSON.stringify(result);
        })
        .catch(error => console.log('error', error));

}




export const sendDocInfo = async function (cpf) {
/*    const urlDocInfo = liveonCredentials['urlProxy'] + '/v2/register/individual/step5';
    var header = {
        'Content-Type': 'application/json',
        'Subscription-key': liveonCredentials['subscriptionKey']
        //  'Authorization': 'Basic ' + getEnv('liveon')['Authorization'] 
    };

    const id = "6275cc3287891600637d573e";
    const rg = "262677698";
    const uf = "RJ";
    const emissao = "2018-04-18";
    const nome = "Izlan Santos de Souza";
    const mae = "Solange Santos de Souza";
    const nascimento = "1991-11-04";
    const gender = "M";

    var data = JSON.stringify({
        "individual_id": id,
        "document_number": rg,
        "document_state": uf,
        "issuance_date": emissao,
        "document_name": nome,
        "mother_name": mae,
        "gender": gender,
        "birth_date": nascimento,
        "marital_status": "Solteiro (a)",
        "nationality": "Brasileiro",
        "pep": true,
        "pep_since": "2000-05-05"
    });
    var requestOptions = {
        method: 'POST',
        headers: header,
        body: data,
        redirect: 'follow'
    };
    fetch(urlDocInfo, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(error => console.log('error', error));*/
}








/*exports.emailIndividual = async function (userdata) {
    const individual_id = userdata['liveon']['individual_id'];
    if (individual_id != '') {
        try {
            phoneIndividual(individual_id, userdata['telefone']);
            const url = liveonCredentials['url'] + '/v2/register/individual/step1';
            const headers = {
                'Content-Type': 'application/json',
                'Subscription-key': liveonCredentials['subscriptionKey']
            }
            const data = JSON.stringify({
                "individual_id": individual_id,
                "full_name": userdata['nome'],
                "username": userdata['cpf'],
                "email": userdata['email']
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
            console.log("emailIndividual " + _error);
        }
    }
}

async function phoneIndividual(individual_id, phone) {
    try {
        let phoneNumber = phone.substring(4);
        phoneNumber = (phoneNumber.length < 9)? '9' + phoneNumber: phoneNumber;

        const url = liveonCredentials['url'] + '/v2/register/individual/step2';
        const headers = {
            'Content-Type': 'application/json',
            'Subscription-key': liveonCredentials['subscriptionKey']
        }
        const data = JSON.stringify({
            "individual_id": individual_id,
            "phone_prefix": phone.substring(2, 4),
            "phone_number": phoneNumber
        });
        console.log(data);
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
        console.log("phoneIndividual " + _error);
    }
}

exports.addressIndividual = async function (userdata) {
    const individual_id = userdata['liveon']['individual_id'];
    if (individual_id != '') {
        try {
            const url = liveonCredentials['url'] + '/v2/register/individual/step3';
            const headers = {
                'Content-Type': 'application/json',
                'Subscription-key': liveonCredentials['subscriptionKey']
            }
            const data = JSON.stringify({
                "individual_id": individual_id,
                "postal_code": userdata['endereco']['cep'],
                "address_type_id": "1",
                "street": userdata['endereco']['logradouro'],
                "number": (userdata['endereco']['numero']).replace(/[^\d]+/g, ''),
                "neighborhood": userdata['endereco']['bairro'],
                "complement": (userdata['endereco']['complemento']).substring(0,30),
                "state": userdata['endereco']['uf'],
                "city": userdata['endereco']['localidade'],
                "country": "Brasil"
            });
            console.log(data);
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
            console.log("addressIndividual " + _error);
        }
    }
}


exports.rendaIndividual = async function (userdata) {
    const individual_id = userdata['liveon']['individual_id'];
    if (individual_id != '') {
        try {
            const url = liveonCredentials['url'] + '/v2/register/individual/step4';
            const headers = {
                'Content-Type': 'application/json',
                'Subscription-key': liveonCredentials['subscriptionKey']
            }
            const data = JSON.stringify({
                "individual_id": individual_id,
                "profession_id": "1",
                "income_value": 100000 //(userdata['liveon']['renda']).replace(/[^\d]+/g, '')
            });
            console.log(data);
            const resp = await axios.post(url, data, {
                headers: headers
            })
                .then(function (response) {
                    return response.data;
                })
                .catch(function (error) {
                    console.log('error.response.data: ' + JSON.stringify(error.response.data));
                    console.log('error.config: ' + JSON.stringify(error.config));
                    console.log(error);
                });
        } catch (_error) {
            console.log("rendaIndividual " + _error);
        }
        //acesso(userdata);
    }
}


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