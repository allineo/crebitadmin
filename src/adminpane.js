//import { changeAccessIndividuo } from './liveonadministrator';
import { getAccountInfo } from './liveonaccount';


function AdminContent(props) {
    return (<div>
        <button onClick={() => getAccountInfo(props.cpf)}>
            VER ALIAS DA CONTA<br /><b>CPF = {props.cpf}</b>
        </button>
    </div>);
}

export default AdminContent;
