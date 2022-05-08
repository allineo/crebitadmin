var axios = require('axios');


let liveonCredentials = {
    "urlProxy": 'https://proxy.apps.binnovation.co/crebit',
    "url": "https://lotus-prod-apim.baas.solutions/crebit",
    "subscriptionKey": "16d9f23318a14fe38555008356a59854",
    "Authorization": "MFY2MzlPNVF5b0lpNDNINGh0RFhIQWVUNDMrUzh2OGxNdDY1bGJ4RjVzUT06U1Z0YmZ6QmxZV1Y3dkU0WTRDRU5jaE16OXFYOE11M3Z6enpNWmxUNzNZclI0b0NrM0VsdzltM0h2Nm12RmxYVllHRFVEWW5FeXY2UVBNTUJZSWY0V2c9PQ==",
    "adminpwd": "70c071daac26ae7b"
};



exports.getIndividuo = async function (cpf) {

    try {
        const url = liveonCredentials['urlProxy'] + '/v2/individual/' + cpf;
        const headers = {
            'Content-Type': 'application/json',
            'Subscription-key': liveonCredentials['subscriptionKey'],
            'Authorization': 'Basic ' + liveonCredentials['Authorization']
        }
        const data = JSON.stringify({});
        const resp = await axios.get(url, data, {
            headers: headers
        })
            .then(function (response) {
                console.log(response);
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


const sendDocInfo = async function (cpf) {
    /*   const urlAuth = liveonCredentials['urlProxy'] + "/auth";
       var requestOptions = getTokenRequestOptions();
       fetch(urlAuth, requestOptions)
           .then(response => response.json())
           .then(result => {
               //console.log(result);
               let token = result.token;*/
    const urlDocInfo = liveonCredentials['urlProxy'] + '/v2/register/individual/step5';
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
        .catch(error => console.log('error', error));
    /* })
     .catch(error => console.log('error', error));*/
}






