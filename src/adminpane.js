import { changeAccessIndividuo } from './liveonadministrator';



function AdminContent(props) {
    return (<div>
        <button onClick={() => changeAccessIndividuo(props.cpf)}>
            TESTE
        </button>
        <br /><br /><br />
        
        <br />
        Resposta:
        <br /><br />
        <div id='respostaAdmin'>aqui</div>
    </div>);
}

export default AdminContent;
