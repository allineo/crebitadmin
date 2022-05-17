//import { changeAccessIndividuo } from './liveonadministrator';
import { getAccountInfo } from './liveonaccount';


function AdminContent(props) {
    return (<div>
        <button onClick={() => getAccountInfo(props.cpf)}>
            ALIAS DA CONTA
        </button>
        <br /><br /><br />
        
        <br />
        Resposta:
        <br /><br />
        <div id='respostaAdmin'>aqui</div>
    </div>);
}

export default AdminContent;
