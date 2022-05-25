import { sendDocInfo } from './backend/liveonIndividual';


function DocsContent(props) {
    return (<div>
        <FormDocsInfo props={props.props} />
        <br /><br />
        <LinksPostman props={props.props} />
    </div>);
}

export default DocsContent;

function FormDocsInfo(props) {
    return (<div>
        - Step 5 (Document info) <br />
        (Verificar a qualidade da foto do documento enviada) <br /><br />

        Número do RG ou CNH: <input type='text' id='rg'></input><br />
        UF do documento: <input type='text' id='uf' placeholder='DF'></input><br />
        Data de emissão: <input type='text' id='emissao' placeholder='aaaa-mm-dd'></input><br />
        Nome da Mãe: <input type='text' id='mae' size='50'></input><br />
        Data de nascimento: <input type='text' id='nascimento' placeholder='aaaa-mm-dd'></input><br />
        Gênero: <input type='text' id='gender' placeholder='M ou F'></input><br /><br />
        <button onClick={() => sendDocInfo(props.props.client, props.props.cpf)}>
            Enviar DOCS INFOS
        </button>
    </div>);
}


function LinksPostman(props) {
    const rg = 'https://universal-crater-486876.postman.co/workspace/LiveOn~98ee052e-4a64-48bd-86f9-fb9481ca3998/request/2030980-f412dcf6-fab0-4a0f-85ec-e166c74cde09';
    const sign = 'https://universal-crater-486876.postman.co/workspace/LiveOn~98ee052e-4a64-48bd-86f9-fb9481ca3998/request/2030980-3967cbdb-d8f0-4272-bbaf-9c76111c9b92';
    const selfie = 'https://universal-crater-486876.postman.co/workspace/LiveOn~98ee052e-4a64-48bd-86f9-fb9481ca3998/request/2030980-cbce10e6-2e11-4239-924e-9ed2e496910b';

    return (<div>
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
        &nbsp; &nbsp; &nbsp; &nbsp; * Clicar no botao azul Send
    </div>);
}
