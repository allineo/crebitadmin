

export default HomeContent;

function HomeContent(props) {

    return (<div>
        <FixUserLink phone={props.phone} />
        <br /><br /><br />
        <LinksPostman phone={props.phone} />
    </div>);
}



function FixUserLink(props) {
    const baselink = 'https://console.firebase.google.com/u/0/project/rr4x-b8540/firestore/data/~2Fusers~2F';
    //let user = firebase.queryByPhone(client, phone);
    const link = baselink; // + user['id'];  //Gdv69bPuYqwa54Q6p9PD  //user['nome'];
    const message = <div>
        Usuário ID: (Falta buscar esses dados do Firestore) <br />
        Nome: (Arjan precisa digitar o nome no Firestore) <br />
        Whatsapp: {props.phone} <br />
        <br />
        Link: <a href={link} target='_blank'>Valide os dados aqui </a>

        <br /> <br /> <br />

        Gerar na Liveon os Steps  <br />
         - Step 0 (CPF) e retornar o individual ID (cadastrar o LiveonID no Firebase) <br />
         - Step 1 (Email) <br />
         - Step 2 (Phone) <br />
         - Step 3 (Address) <br />
         - Step 4 (Profession) (automatico) <br />

         <br /><br />
         - Step 5 (Document info) (Fazer um form para o Arjan inserir direto na Liveon) <br />
    </div>
    return message;
}

function LinksPostman(props) {
    const rg = 'https://web.postman.co/workspace/LiveOn~98ee052e-4a64-48bd-86f9-fb9481ca3998/request/2030980-f412dcf6-fab0-4a0f-85ec-e166c74cde09';
    const sign = 'https://web.postman.co/workspace/LiveOn~98ee052e-4a64-48bd-86f9-fb9481ca3998/request/2030980-3967cbdb-d8f0-4272-bbaf-9c76111c9b92';
    const selfie = 'https://web.postman.co/workspace/LiveOn~98ee052e-4a64-48bd-86f9-fb9481ca3998/request/2030980-cbce10e6-2e11-4239-924e-9ed2e496910b';

    const message = <div>
        - Step 6 - Upload do <a href={rg} target='_blank' rel="noreferrer" >RG/CNH</a><br /><br />
        - Step 7 - Upload da <a href={sign} target='_blank' rel="noreferrer" >Assinatura</a><br /><br />
        - Step 8 - Upload da <a href={selfie} target='_blank' rel="noreferrer" >Selfie</a><br /><br />

        <br /> 
        - Step 9 (Password da liveon) (automatico)
    </div>
    return message;
}
