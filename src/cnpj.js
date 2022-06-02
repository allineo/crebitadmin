import { createCNPJ } from './backend/liveoncnpj';


function CNPJContent(props) {
    return (<div>
        <FormCNPJ props={props.props} />
        <br /><br />
        <LinksPostman props={props.props} />
    </div>);
}

export default CNPJContent;

function FormCNPJ(props) {
    return (<div>
        <b>EMPRESA CNPJ</b>:<br />
        <br />
        - Step 1 (Registro da Empresa) <br /><br />

        Nome da Empresa: <input type='text' id='nameempresa' placeholder='Empresa Tal' size='50'/><br />
        E-mail da Empresa: <input type='text' id='emailempresa' size='50'/><br />
        CNPJ da Empresa: <input type='text' id='cnpj' size='50'/><br /><br />
        Tipo de Empresa: <input type='text' id='typeempresa' defaultValue='Sociedade Empresária Limitada (LTDA)' size='50'/><br />
        Atividade Principal: <input type='text' id='subject'
            placeholder='8211-3/00 Serviços combinados de escritório e apoio administrativo' size='50'/><br />
        Natureza Jurídica: <input type='text' id='nature' defaultValue='206-2 - Sociedade Empresária Limitada' size='50'/><br />
        Data de Abertura: <input type='text' id='opening' placeholder='aaaa-mm-dd'/><br /><br />
        CEP: <input type='text' id='cepempresa' size='10'/> &nbsp;
        Cidade: <input type='text' id='cidadeempresa' size='30'/> &nbsp;
        UF: <input type='text' id='estadoempresa' size='5' placeholder='DF'/><br />
        Rua: <input type='text' id='ruaempresa' size='30'/> &nbsp;
        Número: <input type='text' id='numempresa' size='5'/><br />
        Bairro: <input type='text' id='bairroempresa' size='30'/><br /><br />
        DDD: <input type='text' id='dddempresa' size='5'/> &nbsp;
        Fone: <input type='text' id='phoneempresa' size='20'/> &nbsp;
        <br /><br />
        <button onClick={() => createCNPJ(props.cpf)}>
            Enviar Registo da Empresa
        </button>
    </div>);
}


function LinksPostman(props) {
    const contratosocial = 'https://universal-crater-486876.postman.co/workspace/LiveOn~98ee052e-4a64-48bd-86f9-fb9481ca3998/request/2030980-f412dcf6-fab0-4a0f-85ec-e166c74cde09';

    return (<div>
        - Step 2 - Upload do <a href={contratosocial} target='_blank' rel="noreferrer" >Contrato Social (PDF)</a> <br />
        &nbsp; &nbsp; &nbsp; &nbsp; * Trocar <b>LIVEON ID</b> da URL do POST (/step6/<b>61c383d1ad6ec3005e414804</b>?image_type=)<br />
        &nbsp; &nbsp; &nbsp; &nbsp; * Aba Params: rg ou cnh / <b>front</b> <br />
        &nbsp; &nbsp; &nbsp; &nbsp; * Aba Body para upload do arquivo do documento (Select File) <br />
        &nbsp; &nbsp; &nbsp; &nbsp; * Clicar no botao azul Send
        <br /><br />
    </div>);
}
