
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

export const createCNPJ = async function () {
    document.getElementById('resposta').innerHTML =
        'Enviando o Registro da Empresa...';
    var data = JSON.stringify({
        "companyType": document.getElementById('typeempresa').value,
        "companySubject": document.getElementById('subject').value,
        "companyNature": document.getElementById('nature').value,
        "companyName": document.getElementById('nameempresa').value,
        "companyEmail": document.getElementById('emailempresa').value,
        "documentNumber": document.getElementById('cnpj').value,
        "exemptStateRegistration": true,
        "openingDate": document.getElementById('opening').value,
        "monthlyInvoicing": 10000000,
        "zip": document.getElementById('cepempresa').value,
        "street": document.getElementById('ruaempresa').value,
        "number": document.getElementById('numempresa').value,
        "neighborhood": document.getElementById('bairroempresa').value,
        "city": document.getElementById('cidadeempresa').value,
        "state": document.getElementById('estadoempresa').value,
        "country": "Brasil",
        "countryCode": 55,
        "area": document.getElementById('dddempresa').value,
        "phone": document.getElementById('phoneempresa').value,
        //"promotional_code": "ABCDE12345"
      });
      console.log(data);
    fetch(credentials['urlproxy_backend'] + "/createcnpj", getRequestOptions(data))
        .then(response => response.json())
        .then(result => {
            //console.log(result);
            document.getElementById('resposta').innerHTML =
                'Registro da Empresa<br /><br />' +
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