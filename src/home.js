import { createCPFIndividuo, getIndividuo, sendDocInfo } from './liveonIndividual';


//    /usr/share/nginx/html
//  /home/alline
//https://proxy.apps.binnovation.co/?cpf=65904249187

function HomeContent(props) {
    return (<div>
        <FixUserLink props={props} />
        <br /><br /><br />
        <LinksPostman props={props} />
        <br /><br /><br />
    </div>);
}

export default HomeContent;


function FixUserLink(props) {
    const baselink = 'https://console.firebase.google.com/u/0/project/rr4x-b8540/firestore/data/~2Fusers~2F';
    //let user = firebase.queryByPhone(client, phone);
    const link = baselink; // + user['id'];  //Gdv69bPuYqwa54Q6p9PD  //user['nome'];
    const message = <div>
        <div id='firebaseUserDiv'>
            Usuário ID:  <br />
            Nome: <br />
            CPF: <br />
            Whatsapp:
        </div> <br />
        <div id='firebaseLinkDiv'>
            Link: <a href={link} target='_blank' rel="noreferrer">Valide os dados aqui </a>
        </div>
        <br /> <br />
        Gerar na Liveon os Steps:  
        <br /><br />
        - Step 0 (Enviar CPF e retornar o individual ID) <br />
        (cadastrar o LiveonID no Firebase) <br />
        <ButtonCreateIndividuo cpf={props.props.cpf} />
        <br /> <br />
        - Step 1 (Email) <br />
        - Step 2 (Phone) <br />
        - Step 3 (Address) <br />
        - Step 4 (Profession) (automatico)
        <br /><br />
        <div>
            <button onClick={() => getIndividuo(props.props.cpf)}>
                VER INDIVIDUO LIVEON<br /><b>CPF = {props.props.cpf}</b>
            </button>
        </div>
    </div>
    return message;
}

function ButtonCreateIndividuo(props) {
    return (<div>
        <button onClick={() => createCPFIndividuo(props.cpf)}>
            CRIAR INDIVIDUO LIVEON<br /><b>CPF = {props.cpf}</b>
        </button>
    </div>);
}



function LinksPostman(props) {
    const rg = 'https://universal-crater-486876.postman.co/workspace/LiveOn~98ee052e-4a64-48bd-86f9-fb9481ca3998/request/2030980-f412dcf6-fab0-4a0f-85ec-e166c74cde09';
    const sign = 'https://universal-crater-486876.postman.co/workspace/LiveOn~98ee052e-4a64-48bd-86f9-fb9481ca3998/request/2030980-3967cbdb-d8f0-4272-bbaf-9c76111c9b92';
    const selfie = 'https://universal-crater-486876.postman.co/workspace/LiveOn~98ee052e-4a64-48bd-86f9-fb9481ca3998/request/2030980-cbce10e6-2e11-4239-924e-9ed2e496910b';

    const message = <div>
        Verificar a qualidade da foto do documento enviada
        <br />
        - Step 5 (Document info) (Fazer um form para o Arjan inserir direto na Liveon) <br />
        <br />
        <button onClick={() => sendDocInfo(props.cpf)}>
            Enviar DOCS INFOS
        </button>
        <br /><br />

        - Step 6 - Upload do <a href={rg} target='_blank' rel="noreferrer" >RG/CNH</a> <br />
        &nbsp; &nbsp; &nbsp; &nbsp; * Trocar <b>LIVEON ID</b> da URL do POST (/step6/<b>61c383d1ad6ec3005e414804</b>?image_type=)<br />
        &nbsp; &nbsp; &nbsp; &nbsp; * Aba Params: rg ou cnh / <b>front</b> <br />
        &nbsp; &nbsp; &nbsp; &nbsp; * Aba Body para upload do arquivo do documento (Select File) <br />
        &nbsp; &nbsp; &nbsp; &nbsp; * Clicar no botao azul Send <br /><br />
        &nbsp; &nbsp; &nbsp; &nbsp; * Refazer tudo agora com Param: document_type= <b>back</b>
        <br /><br />

        - Step 7 - Upload da <a href={sign} target='_blank' rel="noreferrer" >Assinatura</a><br />
        &nbsp; &nbsp; &nbsp; &nbsp; * Trocar <b>LIVEON ID</b> da URL do POST (/step7/<b>61c383d1ad6ec3005e414804</b>)<br />
        &nbsp; &nbsp; &nbsp; &nbsp; * Aba Body para upload do arquivo do documento (Select File) <br />
        &nbsp; &nbsp; &nbsp; &nbsp; * Clicar no botao azul Send <br /><br />

        - Step 8 - Upload da <a href={selfie} target='_blank' rel="noreferrer" >Selfie</a><br />
        &nbsp; &nbsp; &nbsp; &nbsp; * Trocar <b>LIVEON ID</b> da URL do POST (/step8/<b>61c383d1ad6ec3005e414804</b>)<br />
        &nbsp; &nbsp; &nbsp; &nbsp; * Aba Body para upload do arquivo do documento (Select File) <br />
        &nbsp; &nbsp; &nbsp; &nbsp; * Clicar no botao azul Send <br /><br />

        <br /> <br />

        Aprovar indivíduo (Alline terá que fazer isso via postman por enquanto)

        <br /> <br />
        - Step 9 (Password da liveon) (automatico)

        <br /> <br />

        Enviar Mensagem Whatsapp de Parabens para o cliente:<br />
        *Parabéns!* Sua Conta Digital foi criada com sucesso. Em breve estará liberada para sua utilização.

        <br /> <br />

        Adicionar Alias Account da Liveon no Firebase <br /><br />

        Enviar Mensagem Whatsapp final para o cliente:<br />
        Olá! Sua Conta Digital já está funcionando!
        Digite *c* para acessar a lista de transações financeiras disponíveis.

        <br /> <br /><br />

        CARTÃO:<br />
        <br />
        Embossar o cartao do cliente<br />
        <br />
        Pegar o numero completo do cartao do cliente<br />
        Entregar o cartao para o cliente<br />
        Associar o numero do cartao do cliente ao id do individuo<br />
        Criar a senha do cliente<br />

    </div>
    return message;
}
