
import { activateCard } from './backend/liveonaccount';

function CardContent(props) {
    return (<div>
        <b>CARTÃO</b>:<br />
        <br />
        Embossar o cartao do cliente (Alline)<br />
        <br />
        Entregar o cartao para o cliente<br /><br />

        Número do Cartão: <input type='text' id='card'></input> &nbsp;
        <button onClick={() => activateCard(props.props.client, props.props.cpf)}>
            ATIVAR CARTÃO
        </button>
        <br /><br />
        Enviar SMS de senha para o cliente<br />

    </div>);
}

export default CardContent;