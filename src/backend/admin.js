const liveon = require('./liveonadmin.js');



async function getIndividuo(client, cpf) {
    const user = await liveon.getIndividuo(cpf);
    console.log(user);
    return user;
}




const cpf = '14090172730';
//createCPFIndividuo('RR4X', cpf);
//createFullIndividuo('RR4X', cpf);
getIndividuo('RR4X', cpf);

// node ./src/admin.js


