const liveon = require('./liveonadmin.js');
const firebasedb = require('./firebase.js');



async function createCPFIndividuo(client, cpf) {
    let user = await firebasedb.queryByCPF(client, cpf);
    try {
        // console.log('user: ' + user);
        // firebasedb.update(user);
        let liveonid = user['liveon']['individual_id'];
        if (liveonid == '') {
            liveonid = await liveon.createIndividual(cpf);
        }
        console.log(liveonid);
    } catch (_error) {
        console.log(_error);
    }
    return user;
}


async function createFullIndividuo(client, cpf) {
    let user = await firebasedb.queryByCPF(client, cpf);
    try {
        // console.log('user: ' + user);
        let liveonid = user['liveon']['individual_id'];
        console.log(liveonid);
        await liveon.emailIndividual(user);
        await liveon.addressIndividual(user);
        await liveon.rendaIndividual(user);
    } catch (_error) {
        console.log(_error);
    }
    return user;
}



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


